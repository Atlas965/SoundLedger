import { Instagram, Youtube, Music, ArrowUpRight } from "lucide-react";
import { FaTiktok, FaSpotify } from "react-icons/fa";
import logoUrl from "@assets/Blue_Black_Simple_Minimalist_Music_YouTube_Channel_Logo_1772476538957.png";

export function Footer() {
  const socialLinks = [
    { icon: <FaSpotify className="w-5 h-5" />, label: "Spotify", href: "#" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube", href: "#" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#" },
    { icon: <FaTiktok className="w-5 h-5" />, label: "TikTok", href: "#" },
  ];

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-5">
            <a href="#home" onClick={scrollToTop} className="flex items-center gap-3 mb-6 inline-block">
              <img src={logoUrl} alt="SoundLedger Logo" className="w-12 h-12 rounded-full object-cover" />
              <span className="font-display font-bold text-2xl text-white">SoundLedger</span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Independent music for the modern era. Direct to fans, fully transparent, completely authentic.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-8">
            <h4 className="font-display font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Music', 'Videos', 'About'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:Soundledgerrecords@gmail.com" className="text-muted-foreground hover:text-white transition-colors text-sm">
                  Soundledgerrecords@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SoundLedger. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
