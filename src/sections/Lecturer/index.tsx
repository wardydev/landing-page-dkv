import { HeadingSection } from "@/components";
import React from "react";
import CardLecturer from "./CardLecturer";

const Lecturer = () => {
  return (
    <div className=" section-padding">
      <div className="container">
        <HeadingSection
          miniTitle="Heading"
          title="Beberapa pencapaian"
          highlightTitle="Kami"
        />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-7 pt-10">
          <CardLecturer name="Yoga Sumadewa" field="Desain Komunikasi Visual" />
          <CardLecturer name="Sunardi Kasim" field="Seni Dan Budaya" />
          <CardLecturer name="Risyaf Arsa" field="Semiotika" />
          <CardLecturer name="Sinta Dewi" field="Seminar Ilmiah" />
        </div>
      </div>
    </div>
  );
};

export default Lecturer;
