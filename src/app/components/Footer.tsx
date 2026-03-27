import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Leaf } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Empty Space for Balance */}
          <div className="hidden md:block"></div>

          {/* Center: Logo and Name */}
          <div className="flex flex-col items-center text-center">
            <Link to="/" className="flex flex-col items-center gap-3 mb-4">
              <div className="h-20 w-20 bg-secondary/20 rounded-full flex items-center justify-center border-2 border-secondary/40">
                <Leaf size={40} className="text-secondary" />
              </div>
              <div className="text-xl font-semibold text-secondary">
                Aspen Magdalene House
              </div>
            </Link>
          </div>

          {/* Right: Social & Donate */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary/20 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary/20 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary/20 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
            <Link to="/get-involved">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                DONATE NOW
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Aspen Magdalene House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}