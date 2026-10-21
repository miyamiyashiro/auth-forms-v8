import { useState } from 'react';
Input from '../ui/Input.jsx';
import Button from '../ui/Button.jsx';
import AuthDivider from './AuthDivider.jsx';
import SocialLogin from './SocialLogin.jsx';

export default function SignInForm({ onSwitchForm }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(previous => ({ ...previous, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Sign In submitted', { email: formData.email, passwordLength: formData.password.length });
  }
  return (
    <section className="flex w-[min(480px,calc(100vw-32px))] flex-col gap-[18px] rounded-3xl border border-[rgba(0,53,102,0.88)] bg-[rgba(0,29,61,0.67)] px-[30px] pb-[30px] pt-[34px] shadow-[0_24px_48px_-8px_rgba(0,0,0,0.38)] backdrop-blur-[11px]">
      <header className="text-center">
        <h1 className="text-[34px] font-extrabold leading-tight text-yellow-300">Welcome Back</h1>
        <p className="mt-2 text-sm text-auth-slate">Sign in to continue your journey</p>
      </header>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-3">
          <Input id="signin-email" label="Email Address" type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} autoComplete="email" />
          <Input id="signin-password" label="Password" type="password" name="password" placeholder="••••••••" value={formData.password} onChange={handleChange} autoComplete="current-password" />
        </div>
        <div className="flex items-center justify-between text-[12px] text-auth-slate">
          <label className="flex items-center gap-2"><input type="checkbox" /> Remember me</label>
          <button type="button" className="text-yellow-400">Forgot password?</button>
        </div>
        <Button type="submit">Sign In</Button>
      </form>
      <AuthDivider />
      <SocialLogin />
      <p className="text-center text-[13px] text-auth-slate">
        Don't have an account?{' '}
        <button type="button" onClick={onSwitchForm} className="font-semibold text-yellow-400">Sign Up</button>
      </p>
    </section>
  );
}