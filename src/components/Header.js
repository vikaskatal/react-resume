import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="myheader mycontainer">
          <div className="myheader__name">
            <Link to="/">Vikas Katal</Link>
          </div>
          <div className="myheader__social">
              <div className="menu-menu-1-container">
                  <ul className="menu">
                      <li className="menu-item"><a target="_blank" href="https://drive.google.com/file/d/1Y09CI7D8awfztY5qc2GS_FIZWmsqBiiN/view?usp=sharing">Download resume</a></li>
                      <li className="menu-item"><a target="_blank" href="https://www.linkedin.com/in/katalzz/">Linked In</a></li>
                      <li className="menu-item"><a href="mailto:katal.viku@gmail.com">Get in touch</a></li>
                  </ul>
              </div>
          </div>
      </header>
    </>
  )
}
