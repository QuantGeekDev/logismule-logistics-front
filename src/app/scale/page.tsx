import Hero from "@/components/Hero/Hero";
import scaleImage from "/public/scale.jpg";

const ScalePage = (): React.ReactElement => {
  return (
    <section>
      <Hero imageAlt="industrial warehouse" imageUrl={scaleImage.src} title="Scale" />
    </section>
  );
};

export default ScalePage;
