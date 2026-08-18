import { useRef, useState } from "react";

export default function CardCarousel({ children }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = Array.isArray(children) ? children : [children];

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(index);
  };

  const goTo = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto mb-20">
        <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="carousel-track flex overflow-x-auto snap-x snap-mandatory scroll-smooth
                    md:grid md:grid-cols-3 md:gap-10 md:overflow-visible"
        style={{ scrollSnapStop: "always" }}
        >
        {cards.map((card, i) => (
          <div key={i} className="w-full flex-shrink-0 snap-center px-6 md:w-auto md:flex-shrink md:px-0">
            {card}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Aller à la carte ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-6 bg-[#4F5D2F]" : "w-2.5 bg-[#A3A380]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}