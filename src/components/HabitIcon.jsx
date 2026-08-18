import emoji1 from "../assets/emoji1.svg";
import emoji2 from "../assets/emoji2.svg";
import emoji3 from "../assets/emoji3.svg";
import emoji4 from "../assets/emoji4.svg";
import emoji5 from "../assets/emoji5.svg";
import emoji6 from "../assets/emoji6.svg";

const icons = {
  "emoji1.svg": emoji1,
  "emoji2.svg": emoji2,
  "emoji3.svg": emoji3,
  "emoji4.svg": emoji4,
  "emoji5.svg": emoji5,
  "emoji6.svg": emoji6,
};

const HabitIcon = ({ icon, title, className }) => {
  if (!icon) return null;

  return (
    <img
      src={icons[icon]}
      alt={title || "Habit icon"}
      className={className}
    />
  );
};

export default HabitIcon;
