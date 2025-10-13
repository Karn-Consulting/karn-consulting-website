import { Github, Linkedin, Twitter } from "lucide-react";
import logoImage from "@assets/Untitled design_1760331409261.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 py-12 px-8" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="relative w-32 h-10 overflow-hidden">
              <img 
                src={logoImage} 
                alt="Karn Consulting" 
                className="absolute top-1/2 left-0 -translate-y-1/2 h-16 w-auto object-contain"
                style={{ clipPath: "inset(25% 0 25% 0)" }}
                data-testid="img-footer-logo" 
              />
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              Leading AI & ML Solutions for the Future
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold" data-testid="text-footer-solutions-title">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-ai-ml">AI & ML</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-self-governing">Self-Governing Systems</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-analytics">Predictive Analytics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-automation">Process Automation</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold" data-testid="text-footer-company-title">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-about">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-careers">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-case-studies">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-contact">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold" data-testid="text-footer-connect-title">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover-elevate active-elevate-2 transition-colors"
                data-testid="link-twitter"
                onClick={() => console.log('Twitter clicked')}
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover-elevate active-elevate-2 transition-colors"
                data-testid="link-linkedin"
                onClick={() => console.log('LinkedIn clicked')}
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover-elevate active-elevate-2 transition-colors"
                data-testid="link-github"
                onClick={() => console.log('GitHub clicked')}
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p data-testid="text-copyright">© {currentYear} Karn Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}