import { WalletButton } from "@/shared/wallet-button";

export const Header = () => {
  return (
    <header className="border-b border-ink/10 px-6 py-2 flex items-center justify-between">
      <span className="font-semibold tracking-tight">GM Robinhood</span>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-wider text-ink/60">
            Robinhood
          </span>
          <span
            className="rounded-full
                       bg-gradient-to-r from-[#6D28D9] to-[#DB2777]
                       px-1 text-[9px] font-bold tracking-wider
                       text-white"
          >
            testnet
          </span>
        </div>
        <WalletButton />
      </div>
    </header>
  );
};
