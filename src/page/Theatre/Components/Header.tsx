type Props = {
  title: string | undefined;
  language: string | undefined;
  duration: string | undefined;
};

function Header({ language, title, duration }: Props) {
  return (
    <header className="m-5">
      <h3 className="text-white text-xl font-semibold">
        {title} ({language})
      </h3>
      <h1 className="text-white text-base font-light">{duration}</h1>
    </header>
  );
}

export default Header;
