import React from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

import buttonStyle from "./Button.module.scss";
import style from "./LinkButton.module.scss";

type LinkButtonProps = {
  href: string;
  children?: ReactNode;
  className?: string;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  className,
}) => (
  <Link
    href={href}
    className={clsx(buttonStyle.button, style.linkButton, className)}
  >
    {children}
  </Link>
);
