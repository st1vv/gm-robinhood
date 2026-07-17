type HomeUserStatsProps = {
  freeCount: number;
  premiumCount: number;
};

export const HomeUserStats = ({
  freeCount,
  premiumCount,
}: HomeUserStatsProps) => {
  return (
    <div className="w-full flex flex-col gap-3 sm:flex-row">
      <StatBox label="Your GM" value={freeCount} />
      <StatBox label="Your Premium GM" value={premiumCount} />
    </div>
  );
};

type StatBoxProps = {
  label: string;
  value: number;
};

const StatBox = ({ label, value }: StatBoxProps) => {
  return (
    <div className="w-full flex-1 rounded-lg border border-ink/15 bg-ink/5 px-4 py-3 flex flex-col gap-1">
      <span className="font-mono text-xl lg:text-2xl font-semibold text-ink">
        {value}
      </span>
      <span className="text-xs lg:text-sm uppercase tracking-wide text-ink/50">
        {label}
      </span>
    </div>
  );
};
