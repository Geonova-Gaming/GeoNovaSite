// CountdownTimer.jsx
import React, { useEffect, useRef } from "react";
import "./countdownTimer.css";

const CountdownTimer = ({ targetDate, title }) => {
  const ddRef = useRef(null);
  const hhRef = useRef(null);
  const mmRef = useRef(null);
  const ssRef = useRef(null);

  const getTargetDate = () => {
    if (targetDate) return new Date(targetDate);
    // fallback: next Halloween
    const now = new Date();
    let year = now.getFullYear();
    let halloween = new Date(year, 9, 31);
    if (halloween.getTime() < now.getTime()) {
      halloween = new Date(year + 1, 9, 31);
    }
    return halloween;
  };

  const updateCountdown = () => {
    const s = 1000, m = s * 60, h = m * 60, d = h * 24;
    const now = new Date().getTime();
    const dist = getTargetDate().getTime() - now;
    const days = Math.floor(dist / d);
    const hours = Math.floor((dist % d) / h);
    const mins = Math.floor((dist % h) / m);
    const secs = Math.floor((dist % m) / s);
    const pad = (n) => String(n).padStart(2, "0");

    if (ddRef.current) ddRef.current.textContent = pad(days);
    if (hhRef.current) hhRef.current.textContent = pad(hours);
    if (mmRef.current) mmRef.current.textContent = pad(mins);
    if (ssRef.current) ssRef.current.textContent = pad(secs);
  };

  useEffect(() => {
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      {/* Title above countdown */}
      {title && <h2 className="countdown-title">{title}</h2>}

      <svg viewBox="0 0 1400 700" opacity="1">
        {/* Glow filter only */}
        <filter id="glow" width="300%" height="300%" x="-100%" y="-100%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="13" result="blur" />
          <feFlood floodColor="rgba(239, 68, 68, 0.75)" result="flood" />
          <feComposite in="flood" in2="blur" operator="in" result="glowColor" />
          <feMerge>
            <feMergeNode in="glowColor" />
            <feMergeNode in="glowColor" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Countdown text */}
        <text x="200" y="350" className="time-value" ref={ddRef}></text>
        <text x="500" y="350" className="time-value" ref={hhRef}></text>
        <text x="800" y="350" className="time-value" ref={mmRef}></text>
        <text x="1100" y="350" className="time-value" ref={ssRef}></text>

        <text x="200" y="450" className="time-label">DAYS</text>
        <text x="500" y="450" className="time-label">HRS</text>
        <text x="800" y="450" className="time-label">MIN</text>
        <text x="1100" y="450" className="time-label">SEC</text>
      </svg>
    </div>
  );
};

export default CountdownTimer;
