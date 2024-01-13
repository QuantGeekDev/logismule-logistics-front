import homeImage from "/public/home.jpg";
import Hero from "@/components/Hero/Hero";

const Home = (): React.ReactElement => {
  return (
    <main>
      <Hero imageAlt="car factory" imageUrl={homeImage.src} title="Home" />
    </main>
  );
};

export default Home;
