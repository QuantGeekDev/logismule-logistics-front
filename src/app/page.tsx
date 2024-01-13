import CallToAction from "@/components/CallToAction/CallToAction";
import homeImage from "/public/home.jpg";
import Hero from "@/components/Hero/Hero";

const Home = (): React.ReactElement => {
  return (
    <main>
      <Hero imageAlt="car factory" imageUrl={homeImage.src} title="Home" />
      <CallToAction />
    </main>
  );
};

export default Home;
