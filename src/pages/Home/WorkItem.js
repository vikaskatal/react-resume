import React from "react";
import { ReactComponent as IconArrow } from "../../assets/images/arrow.svg";
import { Link } from "react-router-dom";

const WorkItem = ({ item: { id, name, tag } }) => {
  return (
    <>
      <Link to={`work/${id}`} className="work__item">
        <span className="work__item__title">
          {" "}
          {name} <span> {tag} </span>{" "}
        </span>
        <span className="work__item__arr">
          <IconArrow />
        </span>
      </Link>
    </>
  );
};

export default WorkItem;
