import React from "react";

const baseButtonClass =
  "rounded-lg shadow-md p-4 inline-flex items-center justify-center text-sm font-medium transition-colors";

const chooseButtonClassName = (type: string) => {
  switch (type) {
    case "warning":
      return `${baseButtonClass} bg-helpers-error-button text-elements-primary-contrastText ring-1 ring-inset ring-helpers-error-button hover:bg-helpers-error-button-hover`;
    case "undo":
      return `${baseButtonClass} bg-neutral-dimmed text-text-secondary ring-1 ring-border-shadow ring-neutral-shadow hover:bg-button-hover`;
    case "continue":
      return `${baseButtonClass} bg-elements-primary-main text-elements-primary-contrastText hover:bg-elements-primary-shadow`;
    case "remove":
      return `${baseButtonClass} bg-helpers-remove-button text-elements-primary-contrastText ring-1 ring-inset ring-helpers-remove-button hover:bg-helpers-remove-button-hover`;
    case "text":
      return `${baseButtonClass} bg-transparent text-text-secondary hover:text-text-primary`;
    case "icon":
      return `${baseButtonClass} bg-transparent text-text-secondary hover:text-text-primary hover:bg-button-hover`;
    default:
      return baseButtonClass;
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

  if (href) {
    return (
      <a
        href={href}
        className={commonClassNames}
        onClick={handleClick}
        {...props}
      >
        {IconWithStyles && (
          <span className={children ? "mr-2" : ""}>{IconWithStyles}</span>
        )}
        {children}
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
      {IconWithStyles && (
        <span className={children ? "mr-2" : ""}>{IconWithStyles}</span>
      )}
      {children}
    </button>
  );
};

export default Button;
