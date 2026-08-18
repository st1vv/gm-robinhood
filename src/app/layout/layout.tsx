import { Footer } from "@/app/layout/footer";
import { Header } from "@/app/layout/header";
import { CheckInTicker } from "@/app/layout/check-in-ticker";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CheckInTicker />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
