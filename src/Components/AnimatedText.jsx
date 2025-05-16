import React from 'react';

const AnimatedText = ({ text, delayStart = 0 }) => {
  return (
    <h1 className="text-7xl font-bold font-oswald tracking-wide ml-24 mt-20">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="letter-animate"
          style={{
            animationDelay: `${delayStart + index * 0.1}s`, // Stagger each letter
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText;
