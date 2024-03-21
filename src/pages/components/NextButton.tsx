import { useContext } from "react";
import { StepContext } from "../";

const NextButton = ({ pageNumber }: { pageNumber: number }) => {
  const setStep = useContext(StepContext);

  const rendar = () => {
    if (pageNumber === 1) {
      return (
        <>
          <img width={"150px"} src="/asserts/start.png" />
        </>
      );
    }
    if (pageNumber === 2) {
      return (
        <>
          <img width={"150px"} src="/asserts/next.png" />
        </>
      );
    }
    if (pageNumber === 3) {
      return (
        <>
          <img width={"150px"} src="/asserts/next.png" />
        </>
      );
    }
    if (pageNumber === 4) {
      return (
        <>
          <img width={"150px"} src="/asserts/next.png" />
        </>
      );
    }
  };

  const handleClick = () => {
    setStep((prev: number) => prev + 1);
  };

  return (
    <div
      className=" absolute bottom-2  right-2 cursor-pointer"
      onClick={handleClick}
    >
      {rendar()}
    </div>
  );
};

export default NextButton;
