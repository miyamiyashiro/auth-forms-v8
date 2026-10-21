import Input from '../components/ui/Input.jsx';
import Button from '../components/ui/Button.jsx';
import SocialButton from '../components/ui/SocialButton.jsx';

export default function AuthPage() {
  return (
    <main>
      <h1>Authentication UI</h1>
      <Input id="example-email" label="Email Address"
        name="email" type="email" placeholder="you@example.com" />
      <Button type="button">Sign In</Button>
      <div>
        <SocialButton label="Continue with Google">G</SocialButton>
        <SocialButton label="Continue with Apple">A</SocialButton>
        <SocialButton label="Continue with Facebook">f</SocialButton>
      </div>
    </main>
  );
}