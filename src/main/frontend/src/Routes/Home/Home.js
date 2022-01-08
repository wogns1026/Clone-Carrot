import Banner from "./Banner/Banner";
import HotKeywords from "./Keywords/HotKeywords";
import HotArticleList from "./Article/HotArticleList";

const Home = () => {
  return (
    <>
      <Banner />
      <HotArticleList />
      <HotKeywords />
    </>
  );
};
export default Home;
