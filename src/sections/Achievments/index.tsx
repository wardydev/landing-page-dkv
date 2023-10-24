import { HeadingSection } from "@/components";
import React from "react";
import CardCount from "./CardCount";

const Achievments = () => {
  return (
    <div className=" section-padding">
      <div className="container">
        <HeadingSection
          miniTitle="Heading"
          title="Beberapa pencapaian"
          highlightTitle="Kami"
        />
        <div className="grid  xl:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-[30px] pt-10">
          <CardCount
            img="/images/icon/counter-1.svg"
            counter={20}
            title="Enrolled Students"
          />
          <CardCount
            img="/images/icon/counter-2.svg"
            counter={460}
            title="Academic Programs"
          />
          <CardCount
            img="/images/icon/counter-3.svg"
            counter={123}
            title="Certified Students"
          />
          <CardCount
            img="/images/icon/counter-3.svg"
            counter={200}
            title="Award Winning"
          />
        </div>
      </div>
    </div>
  );
};

export default Achievments;
