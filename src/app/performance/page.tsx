import performanceHeroImage from "/public/performance.jpg";
import Hero from "@/components/Hero/Hero";

const PerformancePage = (): React.ReactElement => {
  return (
    <section>
      <Hero
        title="Performance"
        imageUrl={performanceHeroImage.src}
        imageAlt="laser etching machine"
      />
    </section>
  );
};

export default PerformancePage;
