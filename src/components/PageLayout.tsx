import style from "./PageLayout.module.scss";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.wrapper}>{children}</div>;
};
