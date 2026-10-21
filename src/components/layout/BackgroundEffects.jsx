export default function BackgroundEffects() {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-120px] top-[-130px] h-[520px] w-[520px] rounded-full bg-yellow-400/12 blur-[100px]" />
        <div className="absolute bottom-[-176px] right-[-170px] h-[600px] w-[600px] rounded-full bg-navy-800/70 blur-[120px]" />
      </div>
    );
  }