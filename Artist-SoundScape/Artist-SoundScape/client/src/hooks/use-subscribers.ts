import { useMutation } from "@tanstack/react-query";
import { api, type SubscriberInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateSubscriber() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: SubscriberInput) => {
      const validated = api.subscribers.create.input.parse(data);
      
      const res = await fetch(api.subscribers.create.path, {
        method: api.subscribers.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Invalid email address");
        }
        throw new Error("Failed to subscribe. Please try again later.");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Welcome to the Ledger",
        description: "You've successfully subscribed to updates.",
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Subscription failed",
        description: error.message,
      });
    },
  });
}
