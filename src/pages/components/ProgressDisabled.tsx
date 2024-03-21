const ProgressDisabled = () => {
  return (
    <>
      <div className=" absolute top-4 left-24">
        <div className=" relative">
          <img width={"400px"} src="/asserts/progressDisabled.png" />
          <div className=" absolute -top-4 -right-10">
            <img width={"80px"} src="/asserts/bananaDisabled.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressDisabled;
