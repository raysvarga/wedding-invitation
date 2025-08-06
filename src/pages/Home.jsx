import HeroSection from '../components/HeroSection';
import CoupleIntro from '../components/CoupleIntro';
import SaveTheDate from '../components/SaveTheDate';
import Countdown from '../components/Countdown';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CoupleIntro />
      <SaveTheDate />
      <Countdown />
    </div>
  );
}

