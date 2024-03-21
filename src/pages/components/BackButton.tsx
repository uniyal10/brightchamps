import { useContext } from "react";
import { StepContext } from "..";

const BackButton = () => {
  const setStep = useContext(StepContext);

  const handleBack = () => {
    setStep((prev: number) => prev - 1);
  };

  return (
    <div
      className=" absolute top-2  left-2 cursor-pointer"
      onClick={handleBack}
    >
      <>
        <img width={"80px"} src="/asserts/back.png" />
      </>
    </div>
  );
};

export default BackButton;
