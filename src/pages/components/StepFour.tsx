import BackButton from "./BackButton";
import NextButton from "./NextButton";
import ProgressDisabled from "./ProgressDisabled";

interface InfoType {
  heading: string;
  description: string;
  rank: string;
  img: string;
}

const infoJson = [
  {
    heading: "/asserts/pinkcardhead.png",
    description: "/asserts/pinkcarddes.png",
    rank: "/asserts/rank1.png",
    img: "/asserts/pinkcardimg.png",
  },
  {
    heading: "/asserts/bluecardhead.png",
    description: "/asserts/bluecarddes.png",
    rank: "/asserts/rank2.png",
    img: "/asserts/bluecardimg.png",
  },
  {
    heading: "/asserts/bothcardhead.png",
    description: "/asserts/bothcarddes.png",
    rank: "/asserts/rank3.png",
    img: "/asserts/bothcardimg.png",
  },
];

const InfoCard = ({ item }: { item: InfoType }) => {
  return (
    <>
      <div className=" relative">
        <img width={"150px"} src="/asserts/cardInfo.png" />
        <div className=" absolute  top-0">
          <div className=" ml-6">
            <img width={"100px"} src={item?.img} />
          </div>
          <div>
            <img width={"25px"} src={item?.rank} />
          </div>
          <div className=" ml-8 -mt-8">
            <img width={"80px"} src={item?.heading} />
          </div>
          <div className=" ml-5 mt-1">
            <img width={"100px"} src={item?.description} />
          </div>
        </div>
      </div>
    </>
  );
};

const StepFour = () => {
  const rendarBackground = () => {
    return (
      <img
        className={`h-96 w-100 m-auto`}
        src="/asserts/backgrounds/backgroundmain.png"
        alt=""
      />
    );
  };

  const rendarInfoCard = () => {
    return (
      <div className=" absolute top-28 flex  w-full justify-around">
        {infoJson.map((_item, index) => {
          return <InfoCard key={index} item={_item} />;
        })}
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
          {rendarInfoCard()}
          <NextButton pageNumber={4} />
        </div>
      </div>
    </>
  );
};

export default StepFour;
