import Input from '../ui/Input.jsx';
import Button from '../ui/Button.jsx';
import AuthDivider from './AuthDivider.jsx';
import SocialLogin from './SocialLogin.jsx';

export default function SignUpForm() {
  return (
    <section className="flex w-[min(480px,calc(100vw-32px))] flex-col gap-[18px] rounded-3xl border border-[rgba(0,53,102,0.88)] bg-[rgba(0,29,61,0.67)] px-[30px] pb-[30px] pt-[34px] shadow-[0_24px_48px_-8px_rgba(0,0,0,0.38)] backdrop-blur-[11px]">
      <header className="text-center">
        <h1 className="text-[34px] font-extrabold leading-tight text-yellow-300">Create Account</h1>
        <p className="mt-2 text-sm text-auth-slate">Join our community today</p>
      </header>
      <div className="flex flex-col gap-3">
        <Input id="signup-name" label="Full Name" name="name" placeholder="Your full name" />
        <Input id="signup-email" label="Email Address" type="email" name="email" placeholder="you@example.com" />
        <Input id="signup-password" label="Password" type="password" name="password" placeholder="••••••••" />
      </div>
      <Button type="button">Create Account</Button>
      <AuthDivider />
      <SocialLogin />
      <p className="text-center text-[13px] text-auth-slate">
        Already have an account? <button type="button" className="font-semibold text-yellow-400">Sign In</button>
      </p>
    </section>
  );
}