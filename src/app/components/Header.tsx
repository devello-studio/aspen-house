import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { PUBLIC_IMAGES } from "../../constants/publicImages";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [howCanIHelpOpen, setHowCanIHelpOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img src={PUBLIC_IMAGES.logo} alt="Aspen Magdalene House" className="h-16 w-16 object-contain" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary leading-tight">Aspen</span>
              <span className="text-lg font-bold text-primary leading-tight">Magdalene House</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive("/") && location.pathname === "/"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutUsOpen(true)}
              onMouseLeave={() => setAboutUsOpen(false)}
            >
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive("/about")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                About Us
                <ChevronDown size={16} className={`transition-transform ${aboutUsOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutUsOpen && (
                <div className="absolute top-full left-0 bg-background border border-border shadow-lg rounded-md py-2 min-w-[200px]">
                  <Link
                    to="/utah-statistics"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    Utah Statistics
                  </Link>
                  <Link
                    to="/our-board"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    Our Board
                  </Link>
                  <Link
                    to="/survivors"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    Survivor Advisors
                  </Link>
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    Our Story
                  </Link>
                  <Link
                    to="/thistle-farms"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    Thistle Farms
                  </Link>
                </div>
              )}
            </div>

            {/* How can I help? Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setHowCanIHelpOpen(true)}
              onMouseLeave={() => setHowCanIHelpOpen(false)}
            >
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive("/get-involved") || isActive("/programs")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                How can I help?
                <ChevronDown size={16} className={`transition-transform ${howCanIHelpOpen ? 'rotate-180' : ''}`} />
              </button>
              {howCanIHelpOpen && (
                <div className="absolute top-full left-0 bg-background border border-border shadow-lg rounded-md py-2 min-w-[200px]">
                  <Link
                    to="/get-involved"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    Donate
                  </Link>
                  <Link
                    to="/get-involved#volunteer"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    Volunteer
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/special-events"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive("/special-events")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Special Events
            </Link>

            <Link
              to="/get-involved"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive("/get-involved")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Donate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive("/") && location.pathname === "/"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive("/about")
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/utah-statistics"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive("/utah-statistics")
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              Utah Statistics
            </Link>
            <Link
              to="/our-board"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive("/our-board")
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              Our Board
            </Link>
            <Link
              to="/survivors"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive("/survivors")
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              Survivor Advisors
            </Link>
            <Link
              to="/thistle-farms"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive("/thistle-farms")
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              Thistle Farms
            </Link>
            <Link
              to="/special-events"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive("/special-events")
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              Special Events
            </Link>
            <Link
              to="/get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive("/get-involved")
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              Donate
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}