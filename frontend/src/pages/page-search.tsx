import React, { useContext, useRef, useState } from "react";

import "../css/search.css";
import useClickOutside from "../hooks/useClickOutside";
import { INFO_CARDS } from "../utils/const";
import { infoCard } from "../App";
import { useNavigate } from "react-router-dom";

const PageSearch: React.FC = () => {
  const refMenu = useRef<HTMLDivElement>(null);
  const [menuDateActive, setMenuDateActive] = useState(false);
  const [role, setRole] = useState('Студент');
  const navigate = useNavigate();
  const cardContext = useContext(infoCard);

  useClickOutside(refMenu, setMenuDateActive, menuDateActive);

  const handleClickCard = (title:string) => {
    cardContext.setTitle(title);
    navigate('/info');
  }

  const handleClickList = (role:string) => {
    setRole(role);
    setMenuDateActive(false);
  }

  return (
    <div className="search">
      <div className="search__inner">
        <div className="search__input">
          <div className="search__input-role" ref={refMenu}>
            <div
              className="search__input-name"
              onClick={() => setMenuDateActive(!menuDateActive)}
            >
              {role}
            </div>
            <svg
              width="19px"
              height="19px"
              className="search__input-role__arrow"
              viewBox="0 -4.5 20 20"
              version="1.1"
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
                {" "}
                <title>arrow_down [#338]</title>{" "}
                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-220.000000, -6684.000000)"
                    fill="#000000"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"
                        id="arrow_down-[#338]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            {menuDateActive && (
              <ul className="search__role-popup">
                <li className="search__role-popup__point" onClick={() => handleClickList('Студент')}>Студент</li>
                <li className="search__role-popup__point" onClick={() => handleClickList('Преподаватель')}>Преподаватель</li>
                <li className="search__role-popup__point" onClick={() => handleClickList('Абитуриент')}>Абитуриент</li>
              </ul>
            )}
          </div>
          <div className="search__input-quest">
            <div className="search__input-quest__block">
              <input
                type="text"
                className="search__input-quest__value"
                placeholder="Поиск"
              />
            </div>
            <div className="search__input-quest__svg">  
              <svg
                width="26px"
                height="26px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
       {role === 'Студент' ?  <div className="search__cards">
          {INFO_CARDS.map((card, index) => (
            <div key={index} className="search__cards-card" onClick={() => handleClickCard(card.title)}>
              <h2 className="search__card-title">{card.title}</h2>
              <div className="search__card-description">
                <p>{card.desription}</p>
              </div>
            </div>
          ))}
        </div>: <div className="nothing_date">Разработка в планах:)</div>}
      </div>
    </div>
  );
};

export default PageSearch;
