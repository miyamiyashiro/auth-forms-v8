export default function SocialButton({ label, children }) {
    return (
      <button type="button" aria-label={label}>
        {children}
      </button>
    );
  }