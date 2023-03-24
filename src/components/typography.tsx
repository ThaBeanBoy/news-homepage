import React from 'react';

type typeProps = {
  children: string;
  style?: string;
};

export function H1({ children, style }: typeProps): JSX.Element {
  return (
    <h1 className={`text-[40px] font-extrabold leading-[40px] ${style}`}>
      {children}
    </h1>
  );
}

export function H2({ children, style }: typeProps): JSX.Element {
  return <h2 className={`text-[32px] ${style}`}>{children}</h2>;
}

export function H3({ children, style }: typeProps): JSX.Element {
  return <h2 className={`text-[20px] ${style}`}>{children}</h2>;
}

export function H4({ children, style }: typeProps): JSX.Element {
  return <h2 className={`text-[18px] ${style}`}>{children}</h2>;
}

export function P({ children, style }: typeProps): JSX.Element {
  return <p className={`leading-[24px] ${style}`}>{children}</p>;
}

export function SM({ children, style }: typeProps): JSX.Element {
  return <p className={`${style}`}>{children}</p>;
}
