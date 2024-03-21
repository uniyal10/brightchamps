import Image from "next/image";
import { Inter } from "next/font/google";
import { url } from "inspector";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StepOne from "./components/StepOne";
import { createContext } from "react";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";
import Finished from "./components/Finished";

const inter = Inter({ subsets: ["latin"] });
export const StepContext = createContext<any>(null);

export default function Home() {
  const [step, setStep] = useState<number>(1);

  const rendarPage = () => {
    if (step === 1) {
      return <StepOne />;
    }
    if (step === 2) {
      return <StepTwo />;
    }
    if (step === 3) {
      return <StepThree />;
    }
    if (step === 4) {
      return <StepFour />;
    }
    if (step === 5) {
      return <StepFive />;
    }
    if (step === 6) {
      return <Finished />;
    }
  };

  return (
    <StepContext.Provider value={setStep}>
      <main className={` h-screen ${inter.className} bg-white`}>
        {rendarPage()}
      </main>
    </StepContext.Provider>
  );
}
