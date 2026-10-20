export default function Input({
    id,
    label,
    type = 'text',
    name,
    placeholder,
  }) {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </div>
    );
  }