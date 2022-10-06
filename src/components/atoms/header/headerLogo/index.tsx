import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/" passHref>
      <h1 className="logo cursor-pointer border-none font-bold tracking-widest outline-none duration-300 hover:text-blue-600">
        Haikel
      </h1>
    </Link>
  );
};

export default HeaderLogo;
