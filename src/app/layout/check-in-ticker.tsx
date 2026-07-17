import { useMemo } from "react";

const ITEM_COUNT = 20;

export const CheckInTicker = () => {
  const addresses = useMemo(
    () => Array.from({ length: ITEM_COUNT }, () => generateRandomAddress()),
    [],
  );

  const items = [...addresses, ...addresses];

  return (
    <div className="w-full overflow-hidden border-b border-ink/10 py-2">
      <div className="flex w-max animate-marquee">
        {items.map((addr, i) => (
          <span
            key={i}
            className="flex items-center mr-6 gap-1.5 text-xs lg:text-sm font-mono text-ink/60 whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ink/40" />
            {truncateAddress(addr)} said GM
          </span>
        ))}
      </div>
    </div>
  );
};

const generateRandomAddress = (): string => {
  const chars = "0123456789abcdef";
  let hex = "";
  for (let i = 0; i < 40; i++) {
    hex += chars[Math.floor(Math.random() * chars.length)];
  }
  return `0x${hex}`;
};

const truncateAddress = (addr: string) => {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
};
