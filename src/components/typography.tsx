import React from 'react';

type typeProps = {
  children: string;
  className?: string;
};

export function H1({ children, className }: typeProps): JSX.Element {
  return (
    <h1 className={`text-[40px] font-extrabold leading-[40px] ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ children, className }: typeProps): JSX.Element {
  return <h2 className={`text-[32px] ${className}`}>{children}</h2>;
}

export function H3({ children, className }: typeProps): JSX.Element {
  return <h2 className={`text-[20px] ${className}`}>{children}</h2>;
}

export function H4({ children, className }: typeProps): JSX.Element {
  return <h2 className={`text-[18px] ${className}`}>{children}</h2>;
}

export function P({ children, className }: typeProps): JSX.Element {
  return <p className={`leading-[24px] ${className}`}>{children}</p>;
}

export function SM({ children, className }: typeProps): JSX.Element {
  return <p className={`${className}`}>{children}</p>;
}
