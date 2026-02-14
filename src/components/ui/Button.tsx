import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'cta';
type ButtonSize = 'default' | 'large';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-cta text-white shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5',
  outline:
    'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary',
  cta: 'bg-gradient-cta text-white shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 relative overflow-hidden',
};

const sizeStyles: Record<ButtonSize, string> = {
  default: 'px-8 py-3 text-base',
  large: 'px-10 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  type = 'button',
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-[8px] cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2';

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {variant === 'cta' && (
          <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />
        )}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
      {variant === 'cta' && (
        <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />
      )}
    </button>
  );
}
