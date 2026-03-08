import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoUrl from "@assets/Blue_Black_Simple_Minimalist_Music_YouTube_Channel_Logo_1772476538957.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Music", href: "#music" },
    { name: "Videos", href: "#videos" },
    { name: "About", href: "#about" },
    { name: "Join", href: "#newsletter" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <img 
            src={logoUrl} 
            alt="SoundLedger Logo" 
            className="w-10 h-10 rounded-full object-cover border border-white/10 group-hover:border-primary/50 transition-colors"
          />
          <span className="font-display font-bold text-xl tracking-wide text-white group-hover:text-primary transition-colors">
            SoundLedger
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#newsletter"
            onClick={(e) => scrollToSection(e, '#newsletter')}
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white/5 border border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0)] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          >
            Subscribe
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
