import React from 'react';
import { ReactComponent as IconArrow }  from '../../assets/images/arrow.svg';
import { Link } from "react-router-dom";

export default function WorkItem() {
  return (
    <>
      <Link to={`work/1`} className="work__item">
        <span className="work__item__title">Dockabl<span> Work management app  </span> </span>
        <span className="work__item__arr">
            <IconArrow />
        </span>
      </Link>
    </>
  )
}
