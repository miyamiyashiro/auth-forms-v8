export default function Button({ children, type = 'button', disabled = false }) {
    return (
      <button type={type} disabled={disabled}
        className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl bg-yellow-400 text-[15px] font-bold text-navy-950 shadow-[0_8px_18px_rgba(255,195,0,0.22)] transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 disabled:cursor-not-allowed disabled:opacity-60">
        {children}
      </button>
    );
  }
  