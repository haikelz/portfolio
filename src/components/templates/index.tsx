import BottomNav from "@/organisms/BottomNav";
import Footer from "@/organisms/Footer";
import Header from "@/organisms/Header";
import { ChildrenProps } from "@/types";

const Template = ({ children }: ChildrenProps) => {
  return (
    <div className="min-h-screen w-full bg-light bg-fixed bg-center dark:bg-dark dark:text-gray-100">
      <Header />
      {children}
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Template;