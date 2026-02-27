import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-espresso-brown";
  const widthClasses = fullWidth ? "w-full" : "";
  
  const variants = {
    primary: "bg-[#c26d5c] hover:bg-[#a85848] text-[#fdfbf7] hover:-translate-y-0.5 hover:shadow-md",
    secondary: "bg-[#3e2723] hover:bg-[#2b1b18] text-[#fdfbf7] hover:-translate-y-0.5 hover:shadow-md",
    outline: "bg-transparent border-2 border-[#3e2723] text-[#3e2723] hover:bg-[#3e2723] hover:text-[#fdfbf7]"
  };

  const classes = `${baseClasses} ${widthClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
