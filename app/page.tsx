import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={`${inter.className}`}>
      <div className="px-8 py-4">
        <h2 className="font-semibold">
          this is a starter repo for a Next.js 13 web app using the experimental
          app dir
        </h2>
      </div>
    </main>
  );
};

export default Home;
