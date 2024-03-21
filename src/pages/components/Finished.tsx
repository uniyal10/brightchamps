import ProgressDisabled from "./ProgressDisabled";

const Finished = () => {
  const rendarBackground = () => {
    return (
      <img
        className={`h-96 w-100 m-auto`}
        src="/asserts/backgrounds/backgroundmain.png"
        alt=""
      />
    );
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className=" relative">
          {rendarBackground()}
          <div className=" absolute -top-20 left-28">
            <img width={"400px"} src="/asserts/finished.png" />
            <div className="flex justify-center">
              <img width={"200px"} src="/asserts/monkey.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finished;
