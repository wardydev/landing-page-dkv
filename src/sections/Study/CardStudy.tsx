import React from "react";

interface CardStudy {
  image: string;
  title: string;
  subTitle: string;
}

const CardStudy: React.FC<CardStudy> = ({ image, title, subTitle }) => {
  return (
    <a
      className=" rounded-[8px] transition-all duration-300 hover:shadow-box bg-white flex space-x-5 p-[30px] border-l-4
            border-white hover:border-primary"
      href="#"
    >
      <div className="w-[72px] h-[72px] rounded bg-white relative  group-hover:bg-[#FFE8E8]">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded "
        />
      </div>
      <div className="course-content">
        <h4 className=" lg:text-2xl text-1xl  mb-2 font-bold">{title}</h4>
        <p>{subTitle}</p>
      </div>
    </a>
  );
};

export default CardStudy;
