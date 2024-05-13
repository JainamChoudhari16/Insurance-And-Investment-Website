import { useEffect, useState, useRef } from "react";

const stats = [
  { id: 1, name: "Insured Families", value: "2000" },
  { id: 2, name: "Total Claims", value: "500" },
  { id: 3, name: "Policies Sold", value: "3000" },
];

function Stats() {
  const [animatedStats, setAnimatedStats] = useState(
    stats.map((stat) => ({ ...stat, animatedValue: 0 }))
  );
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // You can adjust the threshold as per your needs
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const animationDuration = 2000; // Animation duration in milliseconds
    const startTime = Date.now();

    const intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime;

      setAnimatedStats((prevStats) =>
        prevStats.map((stat) => {
          const targetValue = parseInt(stat.value.replace(/\D+/g, "")); // Extract numeric value from string
          const increment = Math.ceil(
            (targetValue / animationDuration) * elapsedTime
          ); // Calculate increment based on elapsed time and target value

          return { ...stat, animatedValue: Math.min(increment, targetValue) };
        })
      );

      if (elapsedTime >= animationDuration) {
        clearInterval(intervalId);
      }
    }, 20); // Interval time for smoother animation
  };

  return (
    <div ref={statsRef} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {animatedStats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.animatedValue.toLocaleString()}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Stats;
