import Input from '../ui/Input.jsx';
import Button from '../ui/Button.jsx';
import AuthDivider from './AuthDivider.jsx';
import SocialLogin from './SocialLogin.jsx';

export default function SignInForm() {
  return (
    <section>
      <header>
        <h1>Welcome Back</h1>
        <p>Sign in to continue your journey</p>
      </header>

      <div>
        <Input id="signin-email" label="Email Address" type="email" name="email" placeholder="you@example.com" />
        <Input id="signin-password" label="Password" type="password" name="password" placeholder="••••••••" />
      </div>

      <div>
        <span>Remember me</span>
        <button type="button">Forgot password?</button>
      </div>

      <Button type="button">Sign In</Button>
      <AuthDivider />
      <SocialLogin />

      <div>
        <span>Don't have an account?</span>
        <button type="button">Sign Up</button>
      </div>
    </section>
  );
}