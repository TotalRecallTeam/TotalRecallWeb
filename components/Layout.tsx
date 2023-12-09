import { FC } from "react";
import { Footer, Navbar } from "../components";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="gradient-bg-welcome h-screen">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};
