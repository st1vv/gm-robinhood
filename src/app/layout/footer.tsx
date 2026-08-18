export const Footer = () => {
  return (
    <footer className="border-t border-ink/10 px-6 py-4 flex flex-col items-center text-center">
      <p className="text-xs lg:text-sm font-mono text-ink/60 leading-relaxed">
        Community project by{" "}
        <a
          href="https://x.com/stivcrypto"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink font-semibold hover:opacity-70 transition-opacity"
        >
          {"[cryptostiv]"}
        </a>
      </p>
      {/* <p className="max-w-md text-[10px] lg:text-xs font-mono text-ink/40 leading-relaxed">
        Not affiliated with, endorsed by, or connected to Robinhood Markets,
        Inc.
      </p> */}
    </footer>
  );
};
