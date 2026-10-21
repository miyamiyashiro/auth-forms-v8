export default function AuthDivider() {
    return (
      <div className="flex w-full items-center gap-3">
        <span className="h-px flex-1 bg-navy-800" />
        <span className="text-[11px] font-medium tracking-[.16em] text-auth-slate">OR CONTINUE WITH</span>
        <span className="h-px flex-1 bg-navy-800" />
      </div>
    );
  }