import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses =
    "font-medium rounded-lg transition-colors focus:outline-none";

  const variantClasses = {
    primary: "bg-church-green hover:bg-opacity-80 text-church-black",
    secondary: "bg-church-gray hover:bg-opacity-90 text-church-white",
    outline:
      "bg-transparent border border-church-green hover:bg-church-green/10 text-church-black",
  };

  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={allClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
