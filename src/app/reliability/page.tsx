import Hero from "@/components/Hero/Hero";
import reliabilityHeroImage from "/public/reliability.jpg";

const ReliabilityPage = (): React.ReactElement => {
  return (
    <section>
      <Hero
        title="Reliability"
        imageUrl={reliabilityHeroImage.src}
        imageAlt="man welding"
      />
    </section>
  );
};

export default ReliabilityPage;
