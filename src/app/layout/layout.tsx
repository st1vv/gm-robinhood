import { Footer } from "@/app/layout/footer";
import { Header } from "@/app/layout/header";
import type { ReactNode } from "react";

type LayoutType = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutType) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};
