import React, { useEffect } from 'react';
import WorkList from './WorkList';
import Info from './Info';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

export default function Home() {
  useEffect(() => {
    let element = document.getElementById("root");
    element.classList.add("home-page");
    return () => {
      element.classList.remove("home-page");
    }
  }, [])

  return (
    <div className="site-content">
      <Info />
      <WorkList />
    </div>
  )
}
