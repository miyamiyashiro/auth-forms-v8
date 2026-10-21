import { useState } from 'react';
import BackgroundEffects from '../components/layout/BackgroundEffects.jsx';
import AuthBadge from '../components/ui/AuthBadge.jsx';
import SignInForm from '../components/auth/SignInForm.jsx';
import SignUpForm from '../components/auth/SignUpForm.jsx';

export default function AuthPage() {
  const [isSignUp] = useState(true);
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-950 p-4 py-24">
      <BackgroundEffects />
      <AuthBadge />
      <span className="absolute right-5 top-[58px] z-20 text-xs font-bold text-auth-slate sm:right-[85px]">
        {isSignUp ? 'SIGN UP' : 'SIGN IN'}
      </span>
      <div className="relative z-10">
        {isSignUp
          ? <SignUpForm  />
          : <SignInForm  />}
      </div>
    </main>
  );

}
