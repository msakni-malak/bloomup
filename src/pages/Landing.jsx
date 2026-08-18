import AutForm from "../components/AutForm";
import Footer from "../components/Footer";
import logo2 from "../assets/logo2.svg";
import Description from "../components/Description";
const Landing = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="bg-[#EFE8CE] pt-10 overflow-x-hidden">
      <div className=" flex flex-row items-center pl-5">
          <img src={logo2} alt="BloomUp Logo" className="w-10 h-10" />
          <h2 className="text-2xl font-bold font-title text-[#4F5D2F] pb-2">BloomUp</h2>
      </div>
      <div className="flex flex-col md:flex-row md:min-h-screen">
          <div className="flex flex-col gap-5 w-full md:w-1/2 items-center justify-center py-20">
            <h1 className="text-5xl font-title text-[#BB8588] font-bold leading-relaxed">
              Every little <span className="text-[#A3A380]">HABIT</span> is a seed,
            <br/> Plant yours today.</h1>
            <h1 className="text-center text-[#4F5D2F] font-bold text-xl">Turn your daily goals into gentle rituals of growth.
              <br/>Track your habits, nurture your dreams,
              <br/>and watch yourself bloom — one small step at a time</h1>
          </div>
          <AutForm />
      </div>
      <Description />
      <div className="py-20 text-center">
        <h2 className="text-4xl font-title font-bold text-[#BB8588] mb-6">
          Ready to grow your garden?
        </h2>
        <p className="text-[#A3A380] text-lg mb-8">
          Join thousands who are blooming one habit at a time
        </p>
        <button
          onClick={scrollToTop}
          className="button-2 px-5"
        >
          Start Your Journey
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;