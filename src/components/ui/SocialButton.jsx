export default function SocialButton({ label, children }) {
    return (
      <button
        type="button"
        aria-label={label}
        className="flex h-14 w-14 items-center justify-center rounded-[14px] border border-navy-800 bg-[rgba(0,29,61,0.82)] text-[19px] font-bold text-yellow-400 transition hover:border-yellow-400/40 hover:bg-navy-800/70"
      >
        {children}
      </button>
    );
  }