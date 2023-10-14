import { useState } from "react";

interface Props {
  charsToShow?: number;
  children: string;
}

const ExpandableText = ({ charsToShow = 100, children }: Props) => {
  const [showMore, setShowMore] = useState(false);
  if (children.length <= charsToShow) {
    return <p>{children}</p>;
  }
  const text = showMore ? children.substring(0, charsToShow) : children;
  return (
    <>
      <p>
        {text}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "More" : "Less"}
        </button>
      </p>
    </>
  );
};

export default ExpandableText;
