import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Card = ({ className = '', children, style }: CardProps) => (
  <section className={`card ${className}`.trim()} style={style}>
    {children}
  </section>
);

export default Card;
