import { createElement, ReactNode } from "react";

export function Button({
  href,
  children = "Button",
  className = "",
}: {
  href?: string;
  children: ReactNode | string;
  className: string;
}) {
  const ButtonEl = href ? "a" : "button";
  return <button className={className}>{children}</button>;
}
