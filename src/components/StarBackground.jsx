import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const updateReduceMotion = () => setReduceMotion(Boolean(mediaQuery?.matches));
    updateReduceMotion();
    mediaQuery?.addEventListener?.("change", updateReduceMotion);

    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQuery?.removeEventListener?.("change", updateReduceMotion);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.min(
      140,
      Math.max(
        35,
        Math.floor((window.innerWidth * window.innerHeight) / 22000)
      )
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 1.6 + 0.6,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.25 + 0.25,
        animationDuration: Math.random() * 5 + 5,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 2;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1.2 + 0.8,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 2.5 + 4,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-80">
      {stars.map((star) => (
        <div
          key={star.id}
          className={reduceMotion ? "star" : "star animate-pulse-subtle"}
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: reduceMotion ? undefined : star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className={reduceMotion ? "meteor" : "meteor animate-meteor"}
          style={{
            width: meteor.size * 40 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: reduceMotion ? undefined : meteor.delay + "s",
            animationDuration: reduceMotion ? undefined : meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};