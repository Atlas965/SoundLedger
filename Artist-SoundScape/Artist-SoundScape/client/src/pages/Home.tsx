import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { Play, ArrowRight, Music2, Disc, ShieldCheck, Zap } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@shared/routes";
import { motion } from "framer-motion";
import logoUrl from "@assets/Blue_Black_Simple_Minimalist_Music_YouTube_Channel_Logo_1772975862046.png";

export default function Home() {
  const subscribeMutation = useCreateSubscriber();

  const form = useForm<z.infer<typeof api.subscribers.create.input>>({
    resolver: zodResolver(api.subscribers.create.input),
    defaultValues: { email: "" },
  });

  const onSubmit = (data: z.infer<typeof api.subscribers.create.input>) => {
    subscribeMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Abstract animated background blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-primary mb-8 border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New Release Available
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-display font-extrabold tracking-tighter mb-6 leading-tight">
              Sound<span className="text-gradient">Ledger</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
              Independent Music. Direct to Fans.
              <br />
              Experience the next evolution of sound.
            </p>
          </FadeIn>

          <FadeIn
            delay={0.4}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection("#music")}
              className="px-8 py-4 rounded-full font-semibold bg-primary text-primary-foreground flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] hover:-translate-y-1"
            >
              <Play className="w-5 h-5 fill-current" />
              Listen Now
            </button>
            <button
              onClick={() => scrollToSection("#videos")}
              className="px-8 py-4 rounded-full font-semibold glass-panel text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              Watch Videos
            </button>
          </FadeIn>
        </div>
      </section>

      {/* MUSIC SECTION */}
      <section id="music" className="py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Latest <span className="text-gradient">Releases</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Stream the newest tracks directly. No middlemen, just pure audio
                experience.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Spotify Player Area */}
            <FadeIn
              direction="right"
              delay={0.2}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative glass-panel rounded-2xl p-4 aspect-square flex flex-col items-center justify-center">
                {/* Fallback image representing an album cover - using unsplash abstract */}
                {/* album cover abstract dark vaporwave */}
                <div className="w-full h-full rounded-xl overflow-hidden relative mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop"
                    alt="Album Cover"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white"></h3>
                      <p className="text-primary/80">SoundLedger</p>
                    </div>
                  </div>
                </div>

                {/* Mock Player UI */}
                <div className="w-full flex items-center gap-4 bg-black/50 rounded-full p-2 pr-6 border border-white/10">
                  <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black hover:scale-105 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-1" />
                  </button>
                  <div className="flex-1">
                    <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-1/3 rounded-full relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_5px_#fff]"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1 font-mono">
                      <span>1:24</span>
                      <span>3:42</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Tracklist */}
            <FadeIn direction="left" delay={0.4} className="lg:col-span-7">
              <div className="glass-panel rounded-3xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <h3 className="font-display font-bold text-2xl">Tracklist</h3>
                  <span className="text-sm font-mono text-muted-foreground">
                    5 Tracks • 18 Min
                  </span>
                </div>

                <div className="space-y-2">
                  {[
                    { num: "01", title: "", duration: "", playing: false },
                    { num: "02", title: "", duration: "", playing: true },
                    { num: "03", title: "", duration: "", playing: false },
                    { num: "04", title: "", duration: "", playing: false },
                    { num: "05", title: "", duration: "", playing: false },
                  ].map((track, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        x: 10,
                        backgroundColor: "rgba(255,255,255,0.05)",
                      }}
                      className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-colors ${track.playing ? "bg-primary/10 border border-primary/20" : "border border-transparent"}`}
                    >
                      <div className="w-8 text-center font-mono text-sm text-muted-foreground">
                        {track.playing ? (
                          <div className="flex items-end justify-center gap-1 h-4">
                            <motion.div
                              animate={{ height: ["40%", "100%", "40%"] }}
                              transition={{ repeat: Infinity, duration: 1 }}
                              className="w-1 bg-primary rounded-t-sm"
                            ></motion.div>
                            <motion.div
                              animate={{ height: ["80%", "30%", "80%"] }}
                              transition={{ repeat: Infinity, duration: 0.8 }}
                              className="w-1 bg-primary rounded-t-sm"
                            ></motion.div>
                            <motion.div
                              animate={{ height: ["50%", "90%", "50%"] }}
                              transition={{ repeat: Infinity, duration: 1.2 }}
                              className="w-1 bg-primary rounded-t-sm"
                            ></motion.div>
                          </div>
                        ) : (
                          track.num
                        )}
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`font-semibold ${track.playing ? "text-primary" : "text-white"}`}
                        >
                          {track.title}
                        </h4>
                      </div>
                      <div className="text-muted-foreground font-mono text-sm">
                        {track.duration}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section id="videos" className="py-32 relative bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Visual <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Official music videos, behind-the-scenes content, and exclusive
                footage.
              </p>
            </div>
            <button className="text-primary hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
              Visit YouTube Channel <ArrowRight className="w-4 h-4" />
            </button>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Featured Video */}
            <FadeIn delay={0.2} className="lg:col-span-2 group">
              <div className="relative glass-panel rounded-3xl overflow-hidden aspect-video lg:aspect-[16/9] border border-white/10 flex items-center justify-center bg-zinc-900 cursor-pointer">
                {/* youtube placeholder dark neon concert */}
                <img
                  src="https://pixabay.com/get/g9395497f17c59c5d56d75365828798d1a6aa2da1b83e2febda6d86bfadd72da3b53bf9817e8c877ac26f68ea1b7d05c072a2f75a1a7c1c08d423935460af7729_1280.jpg"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                  alt="Video thumbnail"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="relative z-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]">
                  <Play className="w-8 h-8 text-white group-hover:text-black ml-2 fill-current" />
                </div>

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider border border-primary/30 mb-3 inline-block">
                    Official Video
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white"></h3>
                </div>
              </div>
            </FadeIn>

            {/* Grid of smaller videos */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              {[
                {
                  title: "Live at The Catalyst",
                  type: "Live Performance",
                  img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop",
                },
                {
                  title: "Making of 'Genesis'",
                  type: "Behind the Scenes",
                  img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop",
                },
              ].map((vid, i) => (
                <FadeIn
                  key={i}
                  delay={0.4 + i * 0.2}
                  className="flex-1 relative glass-panel rounded-3xl overflow-hidden group cursor-pointer border border-white/10"
                >
                  <img
                    src={vid.img}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700"
                    alt={vid.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="w-4 h-4 text-white group-hover:text-black ml-1 fill-current" />
                  </div>

                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-primary text-xs font-semibold mb-1">
                      {vid.type}
                    </p>
                    <h4 className="text-xl font-bold text-white leading-tight">
                      {vid.title}
                    </h4>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-32 relative border-t border-white/5 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[2.5rem] blur-2xl opacity-50"></div>
                <div className="glass-panel p-2 rounded-[2rem] relative z-10">
                  {/* artist profile dark studio portrait */}
                  <div className="relative w-full h-auto aspect-[4/5] rounded-3xl overflow-hidden group">
                    <img
                      src={logoUrl}
                      alt="SoundLedger Logo" 
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 glass-panel rounded-2xl p-6 border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Music2 className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-3xl font-display font-bold text-white"></p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                The New Standard of{" "}
                <span className="text-gradient">Independent Audio</span>
              </h2>

              <div className="space-y-6 text-muted-foreground text-lg mb-10 leading-relaxed font-light">
                <p>
                  SoundLedger was built on a simple premise: artists and fans
                  shouldn't need intermediaries. Fusing cutting-edge electronic
                  production with raw organic instrumentation, the sound defies
                  simple categorization.
                </p>
                <p>
                  "We're not just releasing music; we're building an ecosystem.
                  A direct line from the studio to your headphones. Fully
                  transparent, fully independent."
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Disc />,
                    title: "Self-Released",
                    desc: "100% independent catalog ownership",
                  },
                  {
                    icon: <ShieldCheck />,
                    title: "Direct to Fans",
                    desc: "No labels dictating the sound",
                  },
                  {
                    icon: <Zap />,
                    title: "Tech-Forward",
                    desc: "Embracing new distribution models",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 text-primary p-2 rounded-lg bg-primary/10 border border-primary/20">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE / NEWSLETTER */}
      <section id="newsletter" className="py-32 relative">
        <div className="absolute inset-0 bg-primary/5 border-t border-primary/10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="glass-panel border-primary/20 p-10 md:p-16 rounded-[3rem] text-center shadow-[0_0_50px_rgba(0,255,255,0.05)]">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Join The <span className="text-gradient">Ledger</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
                Get exclusive early access to drops, secret unlisted tracks, and
                priority tour tickets. No spam, only signal.
              </p>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-md mx-auto relative"
              >
                <div className="relative flex items-center">
                  <input
                    {...form.register("email")}
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-black/40 border border-white/10 rounded-full py-5 pl-8 pr-36 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all backdrop-blur-md"
                  />
                  <button
                    type="submit"
                    disabled={subscribeMutation.isPending}
                    className="absolute right-2 top-2 bottom-2 bg-primary text-black font-bold px-6 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {subscribeMutation.isPending ? (
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                    ) : (
                      "Access"
                    )}
                  </button>
                </div>
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm mt-3 text-left pl-6">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </form>
              <p className="text-xs text-muted-foreground mt-6 uppercase tracking-wider">
                Join 15,000+ independent music listeners
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
