import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="">
        <p>30% off until 4d:2h:41m:17s</p>
        <h1>Master focus & Get More Done in Less Time</h1>
        <p>
          A step-by-step system to eliminate procrastination, train your brain
          for deep work, and boost productivity effortlessly.
        </p>
        <button>Enroll now</button>
        <button>Curriculum</button>
      </div>
      <div className="">
        <Image src="/assets/texture.png" width={100} height={100} alt="" />
        <Image src="/assets/hero.png" width={100} height={100} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
