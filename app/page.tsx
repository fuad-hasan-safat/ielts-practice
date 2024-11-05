import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ielts Home",
  description: "Build by Fuad Hasan Safat",
};

export default function Home() {
  return (
    <div className="flex justify-center pt-[110px]">


      <div className="container">

        <h1 className="text-3xl font-bold">Welcome to IELTS Prep</h1>
        <p className="text-2xl">Start with one of our courses</p>

      </div>

    </div>
  );
}
