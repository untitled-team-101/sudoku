import React from "react";
import ReactLove from "./img/reactlove.svg";
import "./styles/Credits.scss";

function Credits(props) {
  return (
    <>
      <div className={"credits"}>
        <div className={"heading"}>
          Made With <img src={ReactLove} />
        </div>
        <div className={"sub-heading"}>
          By &nbsp;
          <a href={"https://github.com/untitled-team-101"}>@untitledteam</a>
        </div>
        <div className={"memberlist"}>
          <ul>
            <li>
              <a href={"https://github.com/Ayan-Dhara"}>Ayan Dhara</a>
            </li>
            <li>
              <a href={"https://github.com/tanmayVaish"}>Tanmay Vaish</a>
            </li>
            <li>
              <a href={"https://github.com/dhruvgarg02"}>Dhruv Garg</a>
            </li>
            <li>
              <a href={"https://github.com/sarveshspatil111"}>Sarvesh Patil</a>
            </li>
            <li>
              <a href={"https://github.com/dpatel-8112"}>Devarshi Patel</a>
            </li>
            <li>
              <a href={"https://github.com/anjaligoswami"}>Anjali Goswami</a>
            </li>
            <li>
              <a href={"https://github.com/grawish"}>Grawish Sachdeva</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Credits;
