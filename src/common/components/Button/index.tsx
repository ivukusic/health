import Link from 'next/link';

export const Button = ({ type = 'primary', children, className, href, button, style }: any) =>
  button ? (
    <button
      className={`btn btn-custom-${type}${className ? ` ${className}` : ''}`}
      style={style}
      type={button}
    >
      <span></span>
      <span></span>
      {children}
    </button>
  ) : (
    <Link
      className={`btn btn-custom-${type}${className ? ` ${className}` : ''}`}
      style={style}
      href={href}
    >
      <span></span>
      <span></span>
      {children}
    </Link>
  );
