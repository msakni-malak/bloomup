import card2 from "../assets/photoCard2.png";
import card1 from "../assets/photoCard1.png";
import card3 from "../assets/photoCard3.png";
import card4 from "../assets/photoCard4.png";
import card5 from "../assets/photoCard5.png";
import card6 from "../assets/photoCard6.png";
import CardCarousel from "./CardCarousel";

export default function Description() {
    return(
        <div className="min-h-screen bg-[#EFE8CE] py-20 px-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
                <h1 className="text-5xl font-title font-bold text-[#4F5D2F] mb-8 leading-relaxed">
                Grow the life you dream of
                </h1>
                <p className="paragraph">
                BloomUp is a gentle digital garden where your habits, goals, and dreams
                can grow at their own rhythm. Instead of overwhelming productivity
                systems, you’ll find calm structure. Instead of pressure, you’ll find
                progress.
                <br /><br />
                Every task you complete, every habit you nurture, every reflection you
                write becomes a seed planted in your personal garden. Over time, those
                seeds transform into visible growth — confidence, clarity, and
                consistency.
                <br /><br />
                This isn’t about becoming perfect. It’s about becoming a little better,
                one small action at a time.
                </p>
            </div>

        <CardCarousel>
            <div className="card">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                    <img src={card1} alt="BloomUp Logo" />
                </div>
                <h3 className="card-title">
                Plant & Track Habits
                </h3>
                <p className="paragraph">
                    Create daily habits and water them consistently. Watch your streaks
                    grow as you build routines that truly support your life.
                </p>
            </div>
            <div className="card">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                    <img src={card2} alt="BloomUp Logo" />
                </div>
                <h3 className="card-title">
                    Set Goals That Matter
                </h3>
                <p className="paragraph">
                    Turn your intentions into clear, trackable goals and move forward
                    without overwhelm.
                </p>
            </div>
            <div className="card">
                <div className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                    <img src={card3} alt="BloomUp Logo" />
                </div>
                <h3 className="card-title">
                    Watch Your Garden Grow
                </h3>
                <p className="paragraph">
                Visualize your progress with beautiful dashboards and clear statistics.
                See your growth over time and celebrate how far your garden has bloomed!
                </p>
            </div>
        </CardCarousel>

        <h2 className="text-4xl font-title font-bold text-[#4F5D2F] text-center mb-12">
            Gardeners Use BloomUp to Flourish In
        </h2>

        <CardCarousel>
            <div className="card">
                <div className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                    <img src={card4} alt="BloomUp Logo" />
                </div>
                <h3 className="card-title">
                    Health & Wellness
                </h3>
                <p className="paragraph">
                    No motivation to exercise? Can't stick to healthy eating? 
                    BloomUp makes taking care of your health feel like tending a beautiful garden.
                </p>
            </div>

            <div className="card">
                <div className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                    <img src={card5} alt="BloomUp Logo" />
                </div>
                <h3 className="card-title">
                    Study & Work
                </h3>
                <p className="paragraph">
                    Whether you're preparing a report for your teacher or your boss,
                    it becomes easy to track your progress as you complete your most challenging tasks.
                </p>
            </div>

            <div className="card">
                <div className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                    <img src={card6} alt="BloomUp Logo" />
                </div>
                <h3 className="card-title">
                And So Much More!
                </h3>
                <p className="paragraph">
                Our fully customizable to-do list lets you shape BloomUp to fit your personal goals.
                Work on creative projects, practice self-care, or pursue any dream — it's your choice!
                </p>
            </div>
        </CardCarousel>
    </div>
    )
}