import React from "react";
import { classNames } from "../../util/classNames";
import "./style.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  backgroundColor,
  size = "medium",
  label,
  ...props
}: Props) => {
  const className = classNames([
    "storybook-button",
    `storybook-button--${size}`,
    primary ? "storybook-button--primary" : "storybook-button--secondary",
  ]);

  return (
    <button type="button" className={className} {...props}>
      {label}
    </button>
  );
};
