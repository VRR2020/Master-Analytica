import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            🦉
          </div>
          <span className="text-xl font-bold text-primary">
            Master Analytica
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/#services"
            className="text-foreground/70 hover:text-primary transition-colors font-medium"
          >
            Serviços
          </Link>
          <Link
            to="/#expertise"
            className="text-foreground/70 hover:text-primary transition-colors font-medium"
          >
            Expertise
          </Link>
          <Link
            to="/#contact"
            className="rounded-lg bg-accent px-6 py-2 text-accent-foreground hover:opacity-90 transition-opacity font-medium"
          >
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
            <Link
              to="/#services"
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link
              to="/#expertise"
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Expertise
            </Link>
            <Link
              to="/#contact"
              className="rounded-lg bg-accent px-6 py-2 text-accent-foreground hover:opacity-90 transition-opacity font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
