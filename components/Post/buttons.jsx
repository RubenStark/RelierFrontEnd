import { useState } from "react";
import JSConfetti from "js-confetti";
import {
  FcComments,
  FcLike,
  FcLikePlaceholder,
  FcOk,
  FcPlus,
} from "react-icons/fc";

function Buttons() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    if (!liked) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        confettiRadius: 3,
        confettiNumber: 50,
        emojis: [
          "💜",
          "🧡",
          "🖤",
          "💚",
          "🤎",
          "💛",
          "🤍",
          "💙",
          "❤️‍🔥",
          "💓",
          "💗",
          "💖",
          "💕",
          "💘",
          "💞",
          "💝",
        ],
        emojiSize: 30,
        // confettiColors: [
        //   "#ff0a54",
        //   "#ff477e",
        //   "#ff7096",
        //   "#ff85a1",
        //   "#fbb1bd",
        //   "#f9bec7",
        // ],
      });
      //   jsConfetti.addConfetti();
    }
  };

  return (
    <div className="flex justify-around p-5">
      {liked ? (
        <FcLike size={30} onClick={handleClick} />
      ) : (
        <FcLikePlaceholder size={30} onClick={handleClick} />
      )}

      <FcComments size={30} />
      {saved ? (
        <FcOk size={30} onClick={() => setSaved(!saved)} />
      ) : (
        <FcPlus size={30} onClick={() => setSaved(!saved)} />
      )}
    </div>
  );
}

export default Buttons;
