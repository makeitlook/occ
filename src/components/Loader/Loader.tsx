// components/Loader.tsx
import React from "react";
import { TailSpin } from "react-loader-spinner";
import Logo from "@/components/Logo/Logo";

const Loader: React.FC = () => (
  <div
    className="flex flex-col justify-center items-center w-full h-screen bg-card-background text-text-primary rounded-lg shadow-md p-4 space-y-8"
  >
    <Logo />
    <TailSpin height="50" width="50" color="#000000" ariaLabel="loading" />
  </div>
);

export default Loader;
