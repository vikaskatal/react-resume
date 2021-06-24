import React from "react";
import WorkItem from "./WorkItem/WorkItem";

const WorkList = ({ list }) => {
  return (
    <div className="work">
      <div className="my-container my-container--work">
        <h2>Projects</h2>
        <div className="work__items">
          {list.length > 0 &&
            list.map((item, index) => (
              <WorkItem key={`workEle${index}`} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WorkList;
