import React from "react";
import Home from "../Home/Home";

import "./accueil.css";
import ScrollUpBtn from "./Reusable/ScrollUpBtn";

const Accueil = () => {
  return (
    <div className="accueil">
      <div className="accueil-banner" >
        <div className="accueil-navbar"id="accueil">
          <Home />
        </div>
        <h3>Développeur Web Full Stack</h3>
        <h4>React | Angular | Node.js | Express | mySQL</h4>
        <a href="#skills">
          <div href="#skills" className="accueil-banner-button"></div>
        </a>
      </div>
      <div id="skills" className="accueil-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt
          consequatur sequi exercitationem eaque in fugiat aut, eligendi,
          cupiditate quas molestiae possimus impedit necessitatibus repudiandae
          optio voluptatibus. Nobis, ipsa? Ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt
          consequatur sequi exercitationem eaque in fugiat aut, eligendi,
          cupiditate quas molestiae possimus impedit necessitatibus repudiandae
          optio voluptatibus. Nobis, ipsa? Ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt
          consequatur sequi exercitationem eaque in fugiat aut, eligendi,
          cupiditate quas molestiae possimus impedit necessitatibus repudiandae
          optio voluptatibus. Nobis, ipsa? Ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt
          consequatur sequi exercitationem eaque in fugiat aut, eligendi,
          cupiditate quas molestiae possimus impedit necessitatibus repudiandae
          optio voluptatibus. Nobis, ipsa? Ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt
          consequatur sequi exercitationem eaque in fugiat aut, eligendi,
          cupiditate quas molestiae possimus impedit necessitatibus repudiandae
          optio voluptatibus. Nobis, ipsa? Ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt
          consequatur sequi exercitationem eaque in fugiat aut, eligendi,
          cupiditate quas molestiae possimus impedit necessitatibus repudiandae
          optio voluptatibus. Nobis, ipsa? Ut.
        </p>
      </div>
      <ScrollUpBtn/>
    </div>
  );
};

export default Accueil;
