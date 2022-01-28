import React, { useState } from 'react'
import './App.css';
import Layout from './hoc/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutMePage from './components/AboutMePage/AboutMePage';
import { SVGiconsSelector } from './components/UI/SVGiconsSelector/SVGiconsSelector';
import { LinksMenuContext } from './context';

const App = () => {
  const [linksMenu, setLinksMenu] = useState([
    { to: "/", label: "", name: "Главная", id: "homePage" },
    { to: "/about-me", label: "", name: "Обо мне", id: "aboutMe" },
    { to: "/skills", label: "", name: "Навыки", id: "skills" },
    { to: "/experience", label: "", name: "Опыт работы", id: "experience" },
    { to: "/education", label: "", name: "Образование", id: "education" },
    { to: "/portfolio", label: "", name: "Портфолио", id: "portfolio" },
    { to: "/contact", label: "", name: "Контакты", id: "contact" },
    { to: "/downloadResume", label: "", name: "Мое резюме PDF", id: "downloadResume" }
  ]);

  return (
    <div className="App">
      <LinksMenuContext.Provider value={{ linksMenu }}>
        <BrowserRouter>
          <div className="MainPageCV">
            <button className="MenuBurger">
              {" "}
              <SVGiconsSelector id="menuBurger" />{" "}
            </button>
          </div>

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/about-me" element={<AboutMePage />} />
            </Route>
          </Routes>

        </BrowserRouter>
      </LinksMenuContext.Provider>
    </div>
  );
}

export default App;