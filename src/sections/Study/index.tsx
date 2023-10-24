import { HeadingSection } from "@/components";
import React from "react";
import CardStudy from "./CardStudy";

const Study = () => {
  return (
    <div className="feature-area bg-[url('../images/all-img/section-bg-6.png')] bg-cover bg-no-repeat bg-center section-padding -mt-8">
      <div className="container">
        <HeadingSection
          miniTitle="Heading"
          title="Beberapa pencapaian"
          highlightTitle="Kami"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          <CardStudy
            image="/images/icon/ct1.svg"
            title="Data Science"
            subTitle="Nirmana"
          />
          <CardStudy
            image="/images/icon/ct2.svg"
            title="Illustrasi"
            subTitle="Menggambar"
          />
          <CardStudy
            image="/images/icon/ct3.svg"
            title="Desain Komunikasi"
            subTitle="Fotografi"
          />
          <CardStudy
            image="/images/icon/ct4.svg"
            title="Videografi"
            subTitle="Kajian Ilmiah"
          />
          <CardStudy
            image="/images/icon/ct5.svg"
            title="Komunikasi Visual"
            subTitle="Desain Komunikasi Visual"
          />
          <CardStudy
            image="/images/icon/ct6.svg"
            title="Semiotika"
            subTitle="Seminar Ilmiah"
          />
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
