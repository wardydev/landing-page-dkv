import React from "react";

interface CardLecturer {
  name: string;
  field: string;
}

const CardLecturer: React.FC<CardLecturer> = ({ name, field }) => {
  return (
    <div className=" bg-white shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
      <div className=" h-[270px] rounded-t-md  relative mx-auto  overflow-hidden">
        <img
          src="/images/all-img/team5.png"
          alt=""
          className=" w-full h-full object-cover rounded-t-md "
        />
        <div className=" absolute left-0 top-0 w-full h-full flex flex-col justify-end items-end">
          <button
            type="button"
            className="h-12 w-12 bg-secondary text-white rounded-tl-md flex flex-col items-center justify-center explore-button"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect opacity="0.01" width="18" height="18" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 2.25C9.62132 2.25 10.125 2.75368 10.125 3.375V7.875H14.625C15.2463 7.875 15.75 8.37868 15.75 9C15.75 9.62132
                                    15.2463 10.125 14.625 10.125H10.125V14.625C10.125 15.2463 9.62132 15.75 9 15.75C8.37868 15.75 7.875 15.2463 7.875
                                    14.625V10.125H3.375C2.75368 10.125 2.25 9.62132 2.25 9C2.25 8.37868 2.75368 7.875 3.375 7.875H7.875V3.375C7.875 2.75368
                                    8.37868 2.25 9 2.25Z"
                fill="white"
              />
            </svg>
          </button>
          <ul className=" justify-center bg-primary rounded-tl-md transition-all duration-100 social-explore ">
            <li>
              <a
                href="#"
                className=" text-xl leading-[1] text-white  flex h-12 w-12 items-center justify-center"
              >
                <i>😉</i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-xl leading-[1] text-white flex h-12 w-12 items-center justify-center"
              >
                <i>😉</i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  text-xl leading-[1]  flex h-12 w-12 items-center justify-center text-white "
              >
                <i>😉</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="course-content p-6">
        <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">{name}</h4>
        <div>{field}</div>
      </div>
    </div>
  );
};

export default CardLecturer;
