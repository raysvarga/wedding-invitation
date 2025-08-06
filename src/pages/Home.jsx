import HeroSection from '../components/HeroSection';
import CoupleIntro from '../components/CoupleIntro';
import SaveTheDate from '../components/SaveTheDate';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CoupleIntro />
      <SaveTheDate />
    </div>
  );
}

