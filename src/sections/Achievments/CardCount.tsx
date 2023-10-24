import React from "react";

interface CardCount {
  img: string;
  counter: number;
  title: string;
}

const CardCount: React.FC<CardCount> = ({ img, counter, title }) => {
  return (
    <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
      <img
        src={img}
        alt=""
        className=" absolute left-1/2 -translate-x-1/2 -top-10"
      />
      <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
        <span className="counter">{counter}</span>
        k+
      </h4>
      <p>{title}</p>
    </div>
  );
};

export default CardCount;
