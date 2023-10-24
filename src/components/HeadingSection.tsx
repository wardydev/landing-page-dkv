import React from "react";

interface HeadingSection {
  miniTitle: string;
  title: string;
  highlightTitle: string;
}

const HeadingSection: React.FC<HeadingSection> = ({
  miniTitle,
  title,
  highlightTitle,
}) => {
  return (
    <div className="text-center">
      <div className="mini-title">{miniTitle}</div>
      <div className="column-title ">
        {title}
        <span className="shape-bg">{highlightTitle}</span>
      </div>
    </div>
  );
};

export default HeadingSection;
