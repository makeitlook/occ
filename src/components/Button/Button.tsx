"use client";

import React from "react";

const baseButtonClasses =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors";

const chooseButtonClassName = (type: string) => {
  switch (type) {
    case "warning":
      return `${baseButtonClasses} bg-helpers-error-button text-elements-primary-contrastText ring-1 ring-inset ring-helpers-error-button hover:bg-helpers-error-button-hover`;
    case "undo":
      return `${baseButtonClasses} bg-neutral-dimmed text-text-secondary ring-1 ring-border-shadow ring-neutral-shadow hover:bg-button-hover`;
    case "continue":
      return `${baseButtonClasses} bg-elements-primary-main text-elements-primary-contrastText hover:bg-elements-primary-shadow`;
    case "remove":
      return `${baseButtonClasses} bg-helpers-remove-button text-elements-primary-contrastText ring-1 ring-inset ring-helpers-remove-button hover:bg-helpers-remove-button-hover`;
    case "text":
      return `${baseButtonClasses} bg-transparent text-text-secondary hover:text-text-primary shadow-none`;
    case "icon":
      return `inline-flex justify-center items-center rounded-md p-2 text-text-secondary hover:text-text-primary hover:bg-button-hover transition-colors`;
    case "hero-primary":
      return `group relative overflow-hidden ${baseButtonClasses} px-6 py-3 sm:px-10 sm:py-4 bg-card-background text-text-primary tracking-wide border border-border-white/20 hover:bg-neutral-dimmed duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-border-white/10 text-sm sm:text-base`;
    case "hero-secondary":
      return `group relative overflow-hidden ${baseButtonClasses} px-6 py-3 sm:px-10 sm:py-4 bg-transparent text-text-clear tracking-wide border border-border-white/40 hover:border-border-white/60 duration-500 hover:scale-105 text-sm sm:text-base`;
    case "elegant-primary":
      return `group relative overflow-hidden ${baseButtonClasses} px-8 py-3 bg-elements-primary-main text-text-clear tracking-wide hover:bg-elements-primary-shadow duration-500 hover:scale-105 hover:shadow-xl hover:shadow-elements-primary-main/25`;
    case "elegant-secondary":
      return `group relative overflow-hidden ${baseButtonClasses} px-8 py-3 bg-transparent text-text-primary tracking-wide border border-border-dimmed hover:border-text-primary duration-500 hover:scale-105`;
    case "elegant-outline":
      return `group relative overflow-hidden ${baseButtonClasses} px-8 py-3 bg-transparent tracking-wide border duration-500 hover:scale-105`;
    default:
      return baseButtonClasses;
  }
};

const iconClassName = "flex items-center w-4 h-4";

interface ButtonProps {
  type?: string; // variant
  buttonType?: "button" | "submit" | "reset";
  extraClassNames?: string;
  children?: React.ReactNode;
  icon?: React.ReactElement;
  disabled?: boolean;
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  [x: string]: any;
}

const Button = ({
  type = "continue",
  buttonType = "button",
  children,
  icon,
  extraClassNames = "",
  disabled = false,
  href,
  onClick,
  ...props
}: ButtonProps) => {
  const IconWithStyles = icon
    ? React.cloneElement(icon, {
        className: `${iconClassName} ${icon.props.className || ""}`,
      })
    : null;

  const commonClassNames = `${chooseButtonClassName(type)} ${extraClassNames} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  // Handle the click event with type safety for both anchor and button elements
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (disabled) e.preventDefault();
    onClick?.(e); // Ensure onClick is called if provided
  };

  // Add special effects for hero-style buttons
  const renderButtonContent = () => (
    <>
      {IconWithStyles && (
        <span className={children ? "mr-2" : ""}>{IconWithStyles}</span>
      )}
      <span className="relative z-10">{children}</span>
      {(type === "hero-primary" || type === "elegant-primary") && (
        <div className="absolute inset-0 bg-gradient-to-r from-elements-primary-main/10 to-elements-secondary-main/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      )}
      {(type === "hero-secondary" || type === "elegant-secondary") && (
        <div className="absolute inset-0 bg-border-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={commonClassNames}
        onClick={handleClick}
        {...props}
      >
        {renderButtonContent()}
      </a>
    );
  }

  return (
    <button
      type={buttonType}
      disabled={disabled}
      className={commonClassNames}
      onClick={handleClick}
      {...props}
    >
      {renderButtonContent()}
    </button>
  );
};

export default Button;
