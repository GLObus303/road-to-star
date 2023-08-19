import { Events } from "../components/Events";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import style from "../styles/index.module.scss";

const Home = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Title />
      <Events />
    </div>
  );
};

export default Home;
