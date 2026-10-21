export default function Input({ id, label, type = 'text', name, placeholder, value, onChange, error, autoComplete }) {
    return (
      <div className="flex min-h-[80px] w-full flex-col gap-2">
        <label htmlFor={id} className="text-[13px] font-medium leading-[normal] text-white">{label}</label>
        <input
          id={id} type={type} name={name} placeholder={placeholder}
          value={value} onChange={onChange} autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`h-14 w-full rounded-xl border bg-[rgba(0,29,61,0.78)] px-4 text-[15px] text-white outline-none transition placeholder:text-auth-slate ${error
            ? 'border-auth-red focus:ring-2 focus:ring-auth-red/40'
            : 'border-navy-800 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/25'}`}
        />
        {error && <p id={`${id}-error`} className="-mt-1 text-xs text-auth-red">{error}</p>}
      </div>
    );
  }