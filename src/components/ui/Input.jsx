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
        <Input
         id="email"
        label="Email Address"
        type="email"
        name="email"
        placeholder="you@example.com"
        />
      </div>
    );
  }