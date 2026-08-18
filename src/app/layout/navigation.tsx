import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-mono transition-opacity hover:opacity-70 ${
    isActive ? "text-ink font-semibold" : "text-ink/50"
  }`;

export const Navigation = () => {
  return (
    <nav className="flex items-center gap-4">
      <NavLink to="/" end className={navLinkClass}>
        GM
      </NavLink>
      <NavLink to="/collection" className={navLinkClass}>
        NFTs
      </NavLink>
    </nav>
  );
};
