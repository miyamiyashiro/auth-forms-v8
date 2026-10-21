export default function Input({
    id,
    label,
    type = 'text',
    name,
    placeholder,
  }) {
    return (
      <div className="flex min-h-[80px] w-full flex-col gap-2">
        <label
          htmlFor={id}
          className="text-[13px] font-medium leading-[normal] text-white"
        >
          {label}
        </label>
  
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          className="h-14 w-full rounded-xl border border-navy-800 bg-[rgba(0,29,61,0.78)] px-4 text-[15px] text-white outline-none transition placeholder:text-auth-slate focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/25"
        />
      </div>
    );
  }