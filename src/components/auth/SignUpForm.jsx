import Input from '../ui/Input.jsx';
import Button from '../ui/Button.jsx';
import AuthDivider from './AuthDivider.jsx';
import SocialLogin from './SocialLogin.jsx';

export default function SignUpForm() {
  return (
    <section>
      <header>
        <h1>Create Account</h1>
        <p>Join our community today</p>
      </header>

      <div>
        <Input id="signup-name" label="Full Name" name="name" placeholder="Your full name" />
        <Input id="signup-email" label="Email Address" type="email" name="email" placeholder="you@example.com" />
        <Input id="signup-password" label="Password" type="password" name="password" placeholder="••••••••" />
      </div>

      <Button type="button">Create Account</Button>
      <AuthDivider />
      <SocialLogin />

      <div>
        <span>Already have an account?</span>
        <button type="button">Sign In</button>
      </div>
    </section>
  );
}