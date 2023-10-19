import PageSearch from "./pages/page-search";
import PageInfo from "./pages/page-info";
import { URL_INFO, URL_MAIN } from "./utils/const";

import './css/normalize.css'
import './css/app.css'

import { Routes, Route } from "react-router-dom";
import { createContext, useState } from 'react';
import { contextSearch } from "./models/card";

const defaultValue = {
  title: '',
  setTitle: () => "",
}

export const infoCard = createContext<contextSearch>(defaultValue);

const App: React.FC = () => {
  const [title, setTitle] = useState('');

  return (
    <main className="wrapper">
      <div className="main__inner">
        <h1 className="main__title">ВГТУ</h1>
        <infoCard.Provider value={{title, setTitle}}>
        <Routes>
          <Route path={URL_MAIN} element={<PageSearch />} />
          <Route path={URL_INFO} element={<PageInfo />} />
        </Routes>
        </infoCard.Provider>
      </div>
    </main>
  );
};

export default App;
