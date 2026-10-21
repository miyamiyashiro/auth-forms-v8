export default function Button({ children, type = 'button' }) {
    return (
      <button
        type={type}
        className="flex h-14 w-full items-center justify-center rounded-xl bg-yellow-400 text-[15px] font-bold text-navy-950 shadow-[0_8px_18px_rgba(255,195,0,0.22)] transition hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/60"
      >
        {children}
      </button>
    );
  }
  