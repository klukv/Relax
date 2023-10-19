import React, { useContext, useEffect, useState } from "react";

import "../css/info.css";
import { useNavigate } from "react-router-dom";
import { infoCard } from "../App";
import { getInfoCard, getInfoSearch } from "../services/contentService";
import { ICard, Icontent } from "../models/card";

const PageInfo: React.FC = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState<Icontent>({
    content: '',
    address: '',
    score : 0
  });
  const [cards, setCard] = useState<ICard[]>([]);
  const info = useContext(infoCard);

  const handleClickBack = () => {
    navigate('/');
  }

  useEffect(() => {
    if(info.type === 'search'){
      getInfoSearch(info.title).then(data => {
        setContent(data);
        console.log(data);
      })
    }else if(info.type === 'card'){
      getInfoCard(info.title).then(data => {
        setCard(data);
      })
    }
  },[])

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
        <h2 className="info__title">{info.title}</h2>
        <div className="info__block">
          <div className="info__block-text">
              {info.type === 'search' ? (<><h3 className="info__content">Адресс</h3>
              <p>{content.address}</p></>) : <ul>
                {cards.map((infoCard, index) => (<li key={index}>Заголовок:{infoCard.title} контент:{infoCard.content}</li>))}
                </ul>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageInfo;
