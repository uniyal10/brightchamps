import NextButton from "./NextButton";

const StepOne = () => {
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
      <div className="absolute  top-10  right-10  ">
        <div className=" relative flex justify-center ">
          <div className=" absolute top-8">
            <img
              className=" z-0"
              width={"200px"}
              src="/asserts/chatpage1.png"
            />
          </div>
          <div>
            <img className=" z-10" width={"250px"} src="/asserts/chatbg.png" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" relative">
        {rendarBackground()}
        {rendarChat()}
        <NextButton pageNumber={1} />
      </div>
    </div>
  );
};

export default StepOne;
