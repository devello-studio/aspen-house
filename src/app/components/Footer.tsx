import React from "react";
import { Link } from "react-router";
import { Leaf } from "lucide-react";

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

          {/* Right: Empty Space for Balance */}
          <div className="hidden md:block"></div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          <div className="flex flex-col items-center gap-2 mb-3">
            <img src="/devello.svg" alt="Devello Studio logo" width={24} height={24} />
            <p>
              Powered by{" "}
              <a
                href="https://devello.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/90 underline underline-offset-2 hover:text-primary-foreground"
              >
                Devello Studio
              </a>
              .
            </p>
          </div>
          <p>&copy; {new Date().getFullYear()} Aspen Magdalene House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}