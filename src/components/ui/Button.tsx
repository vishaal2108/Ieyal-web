import React, { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-white' | 'accent' | 'ghost';
type ButtonSize    = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   ButtonVariant;
  size?:      ButtonSize;
  href?:      string;
  external?:  boolean;
  leftIcon?:  React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?:   boolean;
  as?:        'button' | 'a' | 'link';
}

const variantClass: Record<ButtonVariant, string> = {
  'primary':      'btn-primary',
  'secondary':    'btn-secondary',
  'outline':      'btn-outline',
  'outline-white':'btn-outline-white',
  'accent':       'btn-accent',
  'ghost':        'btn-ghost',
};

const sizeClass: Record<ButtonSize, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
};

const Spinner: React.FC = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path  className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant  = 'primary',
      size     = 'md',
      href,
      external = false,
      leftIcon,
      rightIcon,
      loading  = false,
      children,
      className = '',
      disabled,
      ...rest
    },
    ref
  ) => {
    const classes = `btn ${variantClass[variant]} ${sizeClass[size]} ${className}`;
    const content = (
      <>
        {loading ? <Spinner /> : leftIcon}
        {children && <span>{children}</span>}
        {!loading && rightIcon}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
            aria-label={typeof children === 'string' ? children : undefined}
          >
            {content}
          </a>
        );
      }
      const targetId = href.replace(/^\/|#/g, '');
      const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById(targetId) || document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
      return (
        <a href={`#${targetId || 'home'}`} onClick={handleScroll} className={classes}>
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...rest}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
