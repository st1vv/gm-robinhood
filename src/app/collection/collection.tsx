import { useCheckInStore } from "@/store/check-in-store";

export const Collection = () => {
  const { totalFree, totalPremium } = useCheckInStore();
  const totalGms = totalFree + totalPremium;

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-6 text-center">
      <h1 className="text-xl lg:text-2xl font-bold tracking-tight">
        Something is minting at dawn
      </h1>

      <p className="text-xs lg:text-sm font-mono text-ink/70 leading-relaxed max-w-sm">
        Every GM is counted. The earliest risers will be the first to know.
      </p>

      <div className="flex flex-col items-center gap-1">
        <span className="font-mono text-4xl lg:text-5xl font-bold tabular-nums">
          {totalGms.toLocaleString()}
        </span>
        <span className="text-xs font-mono uppercase tracking-widest text-ink/50">
          GMs recorded so far
        </span>
      </div>
    </div>
  );
};
