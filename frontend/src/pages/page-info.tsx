import React, { useContext } from "react";

import "../css/info.css";
import { useNavigate } from "react-router-dom";
import { infoCard } from "../App";

const PageInfo: React.FC = () => {
  const navigate = useNavigate();
  const cardInfo = useContext(infoCard);

  const handleClickBack = () => {
    navigate('/');
  }

  return (
    <div className="info">
      <div className="info__inner">
        <div className="info__button-back" onClick={() => handleClickBack()}>
          <svg
            className="btn_back"
            width="23px"
            height="23px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#000000"
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              ></path>
              <path
                fill="#000000"
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              ></path>
            </g>
          </svg>
        </div>
        <h2 className="info__title">{cardInfo.title}</h2>
        <div className="info__block">
          <div className="info__block-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageInfo;
