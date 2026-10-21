import { useState } from 'react';
import Input from '../ui/Input.jsx';
import Button from '../ui/Button.jsx';
import AuthDivider from './AuthDivider.jsx';
import SocialLogin from './SocialLogin.jsx';

export default function SignUpForm({ onSwitchForm }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(previous => ({ ...previous, [name]: value }));
    setErrors(previous => ({ ...previous, [name]: '' }));
  }
  function validateForm() {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Full name is required.';
    if (!formData.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) nextErrors.email = 'Enter a valid email.';
    if (!formData.password) nextErrors.password = 'Password is required.';
    else if (formData.password.length < 6) nextErrors.password = 'Use at least 6 characters.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) return;
    window.alert('Cadastro demonstrativo validado. Nenhum dado foi enviado.');
  }
  return (
    <section className="flex w-[min(480px,calc(100vw-32px))] flex-col gap-[18px] rounded-3xl border border-[rgba(0,53,102,0.88)] bg-[rgba(0,29,61,0.67)] px-[30px] pb-[30px] pt-[34px] shadow-[0_24px_48px_-8px_rgba(0,0,0,0.38)] backdrop-blur-[11px]">
      <header className="text-center">
        <h1 className="text-[34px] font-extrabold leading-tight text-yellow-300">Create Account</h1>
        <p className="mt-2 text-sm text-auth-slate">Join our community today</p>
      </header>
      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-3">
          <Input id="signup-name" name="name" label="Full Name" type="text" placeholder="Your full name" autoComplete="name" value={formData.name} onChange={handleChange} error={errors.name} />
          <Input id="signup-email" name="email" label="Email Address" type="email" placeholder="you@example.com" autoComplete="email" value={formData.email} onChange={handleChange} error={errors.email} />
          <Input id="signup-password" name="password" label="Password" type="password" placeholder="••••••••" autoComplete="new-password" value={formData.password} onChange={handleChange} error={errors.password} />
        </div>
        
        <Button type="submit">Create Account</Button>
      </form>
      <AuthDivider />
      <SocialLogin />
      <p className="text-center text-[13px] text-auth-slate">
        Already have an account?{' '}
        <button type="button" onClick={onSwitchForm} className="font-semibold text-yellow-400">Sign In</button>
      </p>
    </section>
  );
}