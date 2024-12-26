import style from "./PageLayout.module.scss";

export const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className={style.wrapper}>{children}</div>
);
