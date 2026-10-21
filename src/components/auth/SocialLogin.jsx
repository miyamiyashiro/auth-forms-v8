import SocialButton from '../ui/SocialButton.jsx';

export default function SocialLogin() {
  return (
    <div className="flex justify-center gap-[14px]">
      <SocialButton label="Continue with Google">G</SocialButton>
      <SocialButton label="Continue with Apple">A</SocialButton>
      <SocialButton label="Continue with Facebook">f</SocialButton>
    </div>
  );
}