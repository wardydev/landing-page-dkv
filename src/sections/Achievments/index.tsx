import React from "react";

const Achievments = () => {
  return (
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Some Fun Fact</div>
          <div className="column-title ">
            Our Great
            <span className="shape-bg">Achievement</span>
          </div>
        </div>
        <div className="grid  xl:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-[30px] pt-10">
          <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
            <img
              src="/images/icon/counter-1.svg"
              alt=""
              className=" absolute left-1/2 -translate-x-1/2 -top-10"
            />
            <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
              <span className="counter">82</span>
              k+
            </h4>
            <p>Enrolled Students</p>
          </div>

          <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
            <img
              src="/images/icon/counter-2.svg"
              alt=""
              className=" absolute left-1/2 -translate-x-1/2 -top-10"
            />
            <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
              <span className="counter">460</span>+
            </h4>
            <p>Academic Programs</p>
          </div>

          <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
            <img
              src="/images/icon/counter-3.svg"
              alt=""
              className=" absolute left-1/2 -translate-x-1/2 -top-10"
            />
            <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
              <span className="counter">20</span>+
            </h4>
            <p>Certified Students</p>
          </div>

          <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
            <img
              src="/images/icon/counter-4.svg"
              alt=""
              className=" absolute left-1/2 -translate-x-1/2 -top-10"
            />
            <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
              <span className="counter">200</span>+
            </h4>
            <p>Award Winning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievments;
