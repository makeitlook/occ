import React from "react";

const chooseButtonClassName = (type: string) => {
  switch (type) {
    case "warning":
      return "inline-flex justify-center rounded-md bg-helpers-error-button px-4 py-2 text-sm text-elements-primary-contrastText font-medium shadow-sm ring-1 ring-inset ring-helpers-error-button hover:bg-helpers-error-button-hover items-center";
    case "undo":
      return "inline-flex justify-center rounded-md bg-neutral-dimmed px-4 py-2 text-sm font-medium ring-1 ring-border-shadow ring-neutral-shadow hover:bg-button-hover items-center text-text-secondary";
    case "continue":
      return "inline-flex justify-center rounded-md bg-elements-primary-main px-4 py-2 text-sm font-medium text-elements-primary-contrastText hover:bg-elements-primary-shadow items-center";
    case "remove":
      return "inline-flex justify-center rounded-md bg-helpers-remove-button px-4 py-2 text-sm text-elements-primary-contrastText font-medium shadow-sm ring-1 ring-inset ring-helpers-remove-button hover:bg-helpers-remove-button-hover items-center";
    case "text":
      return "inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary items-center";
    case "icon":
      return "inline-flex justify-center items-center rounded-md p-2 text-text-secondary hover:text-text-primary hover:bg-button-hover";
    case "hero-primary":
      return "group relative overflow-hidden inline-flex justify-center items-center px-6 py-3 sm:px-10 sm:py-4 bg-card-background text-text-primary font-medium tracking-wide rounded-sm border border-border-white/20 hover:bg-neutral-dimmed transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-border-white/10 text-sm sm:text-base";
    case "hero-secondary":
      return "group relative overflow-hidden inline-flex justify-center items-center px-6 py-3 sm:px-10 sm:py-4 bg-transparent text-text-clear font-medium tracking-wide rounded-sm border border-border-white/40 hover:border-border-white/60 transition-all duration-500 hover:scale-105 text-sm sm:text-base";
    case "elegant-primary":
      return "group relative overflow-hidden inline-flex justify-center items-center px-8 py-3 bg-elements-primary-main text-text-clear font-medium tracking-wide rounded-sm hover:bg-elements-primary-shadow transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-elements-primary-main/25";
    case "elegant-secondary":
      return "group relative overflow-hidden inline-flex justify-center items-center px-8 py-3 bg-transparent text-text-primary font-medium tracking-wide rounded-sm border border-border-dimmed hover:border-text-primary transition-all duration-500 hover:scale-105";
    default:
      return "";
  }
};

const iconClassName = "flex items-center w-4 h-4";

interface ButtonProps {
  type?: string;
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
      type="button"
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
