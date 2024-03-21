import BackButton from "./BackButton";
import NextButton from "./NextButton";
import ProgressDisabled from "./ProgressDisabled";

const StepThree = () => {
  const rendarBackground = () => {
    return (
      <img
        className={`h-96 m-auto`}
        src="/asserts/backgrounds/backgroundwithmonkey.png"
        alt=""
      />
    );
  };

  const rendarChat = () => {
    return (
      <div className="absolute  top-10  right-5  ">
        <div className=" relative flex justify-center ">
          <div className=" absolute top-6">
            <img
              className=" z-0"
              width={"200px"}
              src="/asserts/chatpage3.png"
            />
          </div>
          <div>
            <img className=" z-10" width={"260px"} src="/asserts/chatbg.png" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className=" relative">
          <BackButton />
          <ProgressDisabled />
          {rendarBackground()}
          {rendarChat()}
          <NextButton pageNumber={3} />
        </div>
      </div>
    </>
  );
};

export default StepThree;
