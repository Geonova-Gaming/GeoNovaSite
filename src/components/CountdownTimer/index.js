import React, { useEffect, useRef, useState } from "react";
import "./countdownTimer.css";

const CountdownTimer = ({ targetDate, title }) => {
  const ddRef = useRef(null);
  const hhRef = useRef(null);
  const mmRef = useRef(null);
  const ssRef = useRef(null);

  const [isLive, setIsLive] = useState(false);

  // Convert targetDate to EST 5:00 PM
  const getTargetDate = () => {
    const date = new Date(targetDate);

    // Force 5:00 PM EST
    date.setHours(17, 0, 0, 0);

    return date;
  };

  const updateCountdown = () => {
    const now = new Date();

    //  Convert now to EST
    const nowEST = new Date(
      now.toLocaleString("en-US", { timeZone: "America/New_York" })
    );

    const target = getTargetDate();
    const dist = target.getTime() - nowEST.getTime();

    // If event time has passed → switch to LIVE mode
    if (dist <= 0) {
      setIsLive(true);
      return;
    }

    const s = 1000, m = s * 60, h = m * 60, d = h * 24;
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

  // If event is live, show message instead of countdown
  if (isLive) {
    return (
      <div className="countdown-container">
        <h2 className="countdown-title">Title Reveal Event is now live!</h2>
      </div>
    );
  }

  return (
    <div className="countdown-container">
      {title && <h2 className="countdown-title">{title}</h2>}

      <svg viewBox="0 0 1400 700" opacity="1">
        <filter id="glow" width="300%" height="300%" x="-100%" y="-100%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur" />
          <feFlood floodColor="rgba(128, 86, 244, 0.75)" result="flood" />
          <feComposite in="flood" in2="blur" operator="in" result="glowColor" />
          <feMerge>
            <feMergeNode in="glowColor" />
            <feMergeNode in="glowColor" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <text x="200" y="350" className="time-value" ref={ddRef}></text>
        <text x="550" y="350" className="time-value" ref={hhRef}></text>
        <text x="850" y="350" className="time-value" ref={mmRef}></text>
        <text x="1150" y="350" className="time-value" ref={ssRef}></text>

        <text x="200" y="450" className="time-label">DAYS</text>
        <text x="555" y="450" className="time-label">HRS</text>
        <text x="850" y="450" className="time-label">MIN</text>
        <text x="1150" y="450" className="time-label">SEC</text>
      </svg>
    </div>
  );
};

export default CountdownTimer;
