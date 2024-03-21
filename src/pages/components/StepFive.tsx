import { useContext, useEffect, useState } from "react";
import BackButton from "./BackButton";
import ProgressDisabled from "./ProgressDisabled";
import { useRouter } from "next/router";
import { StepContext } from "..";

const RendarModal = ({ setOpen }: { setOpen: (arg: boolean) => void }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      setOpen(false);
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <div className=" absolute top-10 flex justify-center left-28  ">
      <div className="  absolute cursor-pointer top-28 left-28 transform rotate-45 top-4">
        <img width={"150px"} src="/asserts/selectedblue.png" />
      </div>
      <div className="  absolute cursor-pointer ">
        <img width={"150px"} src="/asserts/selectedpink.png" />
      </div>
      <div className=" z-10">
        <img width={"300px"} src="/asserts/itsmatch.png" />
      </div>
    </div>
  );
};

const PinkCard = ({
  selectedPink,
  type,
  handleClick,
  index,
}: {
  selectedPink: number[] | null;
  handleClick: (arg1: number, arg2: string) => void;
  type: string | null;
  index: number;
}) => {
  return (
    <>
      {selectedPink != null && selectedPink.join("").includes(`${index}`) ? (
        <div className=" cursor-pointer">
          <img width={"150px"} src="/asserts/selectedpink.png" />
        </div>
      ) : (
        <div
          onClick={() =>
            type === "blue" || type === null ? handleClick(index, "pink") : ""
          }
          className=" cursor-pointer"
        >
          <img width={"150px"} src="/asserts/pinkcard.png" />
        </div>
      )}
    </>
  );
};
const BlueCard = ({
  selectedBlue,
  handleClick,
  type,
  index,
}: {
  selectedBlue: number[] | null;
  handleClick: (arg1: number, arg2: string) => void;
  type: string | null;
  index: number;
}) => {
  return (
    <>
      {selectedBlue != null && selectedBlue.join("").includes(`${index}`) ? (
        <div className=" cursor-pointer">
          <img width={"150px"} src="/asserts/selectedblue.png" />
        </div>
      ) : (
        <div
          onClick={() => (type === "pink" ? handleClick(index, "blue") : "")}
          className=" cursor-pointer"
        >
          <img width={"150px"} src="/asserts/bluecard.png" />
        </div>
      )}
    </>
  );
};

const StepFive = () => {
  const [selectedPink, setSelectedPink] = useState<number[] | null>(null);
  const [selectedBlue, setSelectedBlue] = useState<number[] | null>(null);
  const [cardType, setCardType] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const setStep = useContext(StepContext);

  const handleClick = (cardNumber: number, cardType: string) => {
    setCardType(cardType);
    if (cardType === "pink") {
      const arr = selectedPink ? [...selectedPink, cardNumber] : [cardNumber];
      setSelectedPink(arr);
    } else {
      const arr = selectedBlue ? [...selectedBlue, cardNumber] : [cardNumber];
      setSelectedBlue(arr);
    }
  };

  useEffect(() => {
    if (selectedBlue && selectedPink) {
      if (selectedBlue.length && selectedBlue.length === 6) {
        setStep((prev: number) => prev + 1);
      }
      if (selectedBlue.length && selectedPink.length) {
        if (selectedPink.length === selectedBlue.length) {
          setOpen(true);
        }
      }
    }
  }, [selectedBlue]);

  const rendarBackground = () => {
    return (
      <img
        className={`h-96 w-100 m-auto`}
        src="/asserts/backgrounds/backgroundmain.png"
        alt=""
      />
    );
  };

  const rendarCards = () => {
    return (
      <>
        <div className="  absolute top-20 flex justify-between">
          <div className=" grid grid-cols-3">
            {Array(6)
              .fill(0)
              .map((_item, index) => {
                return (
                  <PinkCard
                    type={cardType}
                    key={index}
                    selectedPink={selectedPink}
                    handleClick={handleClick}
                    index={index}
                  />
                );
              })}
          </div>
          <div className=" grid grid-cols-3">
            {Array(6)
              .fill(0)
              .map((_item, index) => {
                return (
                  <BlueCard
                    type={cardType}
                    key={index}
                    selectedBlue={selectedBlue}
                    handleClick={handleClick}
                    index={index}
                  />
                );
              })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className=" relative">
          <BackButton />
          <ProgressDisabled />
          {rendarBackground()}
          {rendarCards()}

          {open ? <RendarModal setOpen={setOpen} /> : <></>}
        </div>
      </div>
    </>
  );
};

export default StepFive;
