import React from "react";

const Study = () => {
  return (
    <div className="feature-area bg-[url('../images/all-img/section-bg-6.png')] bg-cover bg-no-repeat bg-center section-padding -mt-8">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Course Categories</div>
          <div className="column-title ">
            Browse Top
            <span className="shape-bg">Categories</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          <a
            className=" rounded-[8px] transition-all duration-300 hover:shadow-box bg-white flex space-x-5 p-[30px] border-l-4
            border-white hover:border-primary"
            href="#"
          >
            <div className="w-[72px] h-[72px] rounded bg-white relative  group-hover:bg-[#FFE8E8]">
              <img
                src="/images/icon/ct1.svg"
                alt=""
                className="w-full h-full object-cover rounded "
              />
            </div>
            <div className="course-content">
              <h4 className=" lg:text-2xl text-1xl  mb-2 font-bold">
                Data Science
              </h4>
              <p>68 Courses</p>
            </div>
          </a>

          <a
            className=" rounded-[8px] transition-all duration-300 hover:shadow-box bg-white flex space-x-5 p-[30px] border-l-4
            border-white hover:border-primary"
            href="#"
          >
            <div className="w-[72px] h-[72px] rounded bg-white relative  group-hover:bg-green-paste">
              <img
                src="/images/icon/ct2.svg"
                alt=""
                className="w-full h-full object-cover rounded "
              />
            </div>
            <div className="course-content">
              <h4 className=" lg:text-2xl text-1xl  mb-2 font-bold">
                UI/UX Design
              </h4>
              <p>UI/UX Design</p>
            </div>
          </a>

          <a
            className=" rounded-[8px] transition-all duration-300 hover:shadow-box bg-white flex space-x-5 p-[30px] border-l-4
            border-white hover:border-primary"
            href="#"
          >
            <div className="w-[72px] h-[72px] rounded bg-white relative  group-hover:bg-[#E8F5FF]">
              <img
                src="/images/icon/ct3.svg"
                alt=""
                className="w-full h-full object-cover rounded "
              />
            </div>
            <div className="course-content">
              <h4 className=" lg:text-2xl text-1xl  mb-2 font-bold">
                Modern Physics
              </h4>
              <p>68 Courses</p>
            </div>
          </a>

          <a
            className=" rounded-[8px] transition-all duration-300 hover:shadow-box bg-white flex space-x-5 p-[30px] border-l-4
            border-white hover:border-primary"
            href="#"
          >
            <div className="w-[72px] h-[72px] rounded bg-white relative  group-hover:bg-[#E3F9F6]">
              <img
                src="/images/icon/ct4.svg"
                alt=""
                className="w-full h-full object-cover rounded "
              />
            </div>
            <div className="course-content">
              <h4 className=" lg:text-2xl text-1xl  mb-2 font-bold">
                Music Production
              </h4>
              <p>68 Courses</p>
            </div>
          </a>

          <a
            className=" rounded-[8px] transition-all duration-300 hover:shadow-box bg-white flex space-x-5 p-[30px] border-l-4
            border-white hover:border-primary"
            href="#"
          >
            <div className="w-[72px] h-[72px] rounded bg-white relative  group-hover:bg-[#EEE8FF]">
              <img
                src="/images/icon/ct5.svg"
                alt=""
                className="w-full h-full object-cover rounded "
              />
            </div>
            <div className="course-content">
              <h4 className=" lg:text-2xl text-1xl  mb-2 font-bold">
                Data Science
              </h4>
              <p>45 Courses</p>
            </div>
          </a>

          <a
            className=" rounded-[8px] transition-all duration-300 hover:shadow-box bg-white flex space-x-5 p-[30px] border-l-4
            border-white hover:border-primary"
            href="#"
          >
            <div className="w-[72px] h-[72px] rounded bg-white relative  group-hover:bg-[#FFF6EB]">
              <img
                src="/images/icon/ct6.svg"
                alt=""
                className="w-full h-full object-cover rounded "
              />
            </div>
            <div className="course-content">
              <h4 className=" lg:text-2xl text-1xl  mb-2 font-bold">
                Finances
              </h4>
              <p>68 Courses</p>
            </div>
          </a>
        </div>
        <div className="text-center pt-[70px]">
          <a href="#" className=" btn btn-primary">
            View All Categories
          </a>
        </div>
      </div>
    </div>
  );
};

export default Study;
