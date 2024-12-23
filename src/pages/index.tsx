import { Events } from "../components/Events";
import { Header } from "../components/Header";
import { PageLayout } from "../components/PageLayout";
import { Title } from "../components/Title";

const Home = () => (
  <PageLayout>
    <Header />
    <Title />
    <Events />
  </PageLayout>
);

export default Home;
