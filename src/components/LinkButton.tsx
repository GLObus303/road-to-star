import React from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import buttonStyle from "./Button.module.scss";
import style from "./LinkButton.module.scss";
import clsx from "clsx";

type LinkButtonProps = {
  href: string;
  children?: ReactNode;
  className?: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Link
      href={href}
      className={clsx(buttonStyle.button, style.linkButton, className)}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
