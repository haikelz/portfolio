import { currentYear } from "@/libs/helpers/date";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pb-4 text-center tracking-widest md:mb-0">
      <div>
        <p className="pb-1 text-sm font-semibold">2020-{currentYear} Haikel</p>
        <p className="text-sm font-semibold">
          This Website is under{" "}
          <Link
            href="https://github.com/haikelz/website/blob/master/LICENSE"
            className="font-bold hover:text-crayola"
            passHref
          >
            MIT License
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
