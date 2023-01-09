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
  return <button className={className}>{children}</button>;
}
