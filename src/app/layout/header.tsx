import { WalletButton } from "@/shared/wallet-button";
import { Link } from "react-router-dom";
import { MobileNavigation, DesktopNavigation } from "@/app/layout/navigation";
import LogoIcon from "@/assets/logo.svg?react";

export const Header = () => {
  return (
    <header className="border-b border-ink/10 px-6 py-2 flex items-center justify-between">
      <div className="flex-1 flex items-center">
        <Link to="/">
          <LogoIcon className="w-auto h-[26px]" />
        </Link>
      </div>

      <DesktopNavigation />

      <div className="flex-1 flex items-center justify-end gap-4">
        <div className="hidden sm:flex flex-col items-center">
          <span className="text-xs lg:text-sm font-mono uppercase tracking-wider text-ink/60">
            Robinhood
          </span>
          <span
            className="rounded-full bg-gradient-to-r from-[#6D28D9] to-[#DB2777]
                   px-1 text-[10px] font-bold tracking-wider text-white"
          >
            mainnet
          </span>
        </div>

        <WalletButton />
        <MobileNavigation />
      </div>
    </header>
  );
};
