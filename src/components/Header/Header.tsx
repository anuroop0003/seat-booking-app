import React from "react";

type Props = {
  title: string | undefined;
  subtitle: string | undefined;
};

const Header: React.FC<Props> = ({ title, subtitle = undefined }) => {
  return (
    <header className="m-5">
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      {subtitle && (
        <h1 className="text-white text-base font-light">{subtitle}</h1>
      )}
    </header>
  );
};

export default Header;
