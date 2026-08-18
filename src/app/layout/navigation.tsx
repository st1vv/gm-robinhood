import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { StandartButton } from "@/shared/standard-button";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-base lg:text-lg font-mono transition-opacity hover:opacity-70 ${
    isActive ? "text-ink font-semibold" : "text-ink/50"
  }`;

const links = [
  { to: "/", label: "GM", end: true },
  { to: "/collection", label: "NFTs", end: false },
];

export const DesktopNavigation = () => {
  return (
    <nav className="hidden sm:flex items-center gap-4">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          className={navLinkClass}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <StandartButton
        onClick={() => setIsOpen((v) => !v)}
        variant="secondary"
        aria-label="Toggle menu"
        className="w-12 h-12 p-0 sm:hidden flex flex-col justify-center items-center gap-1.5 z-50 relative"
      >
        <span
          className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </StandartButton>

      {isOpen && (
        <div className="sm:hidden fixed inset-0 top-0 bg-lime z-40 flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base lg:text-lg font-mono transition-opacity hover:opacity-70 ${
                  isActive ? "text-ink font-semibold" : "text-ink/50"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};
