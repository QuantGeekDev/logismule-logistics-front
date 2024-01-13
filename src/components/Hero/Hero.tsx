import Image from "next/image";

interface HeroProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
}

const Hero = ({ imageAlt, imageUrl, title }: HeroProps): React.ReactElement => {
  return (
    <div className={`hero ${title.toLowerCase()} relative h-screen`}>
      <div className="absolute -z-10 inset-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900"></div>
      </div>
      <div className="pt-48 flex justify-center align-middle">
        <h1 className="hero__title text-white text-6xl"> {title} </h1>
      </div>
    </div>
  );
};

export default Hero;
