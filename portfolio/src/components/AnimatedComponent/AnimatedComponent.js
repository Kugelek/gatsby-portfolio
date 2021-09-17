import React from 'react';

const AnimatedComponent = ({
  children,
  effect = 'fade-zoom-in',
  offset = '200',
  easing = 'ease-in-sine',
  duration = '700',
  delay = '50',
  containerClass = null,
}) => {
  return (
    <div
      data-aos={effect}
      data-aos-offset={offset}
      data-aos-easing={easing}
      data-aos-delay={delay}
      data-aos-duration={duration}
      className={containerClass ? containerClass : null}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
