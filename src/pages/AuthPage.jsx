import SignInForm from '../components/auth/SignInForm.jsx';
import SignUpForm from '../components/auth/SignUpForm.jsx';

const CURRENT_VIEW = 'signup';

export default function AuthPage() {
  const isSignUp = CURRENT_VIEW === 'signup';

  return (
    <main>
      {isSignUp ? <SignUpForm /> : <SignInForm />}
    </main>
  );
}