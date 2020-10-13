import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom'

import '../styles/pages/lading.css';
import logoImg from '../images/logo.svg';

function Landing(){
    return(
        <div id="page-lading">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy" />
  
          <main>
            <h1>Leve a felicidade para o munso</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
  
          <div className="location">
            <strong>Luanda</strong>
            <span>Bairro Prenda</span>
          </div>
  
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
          </Link>
        </div>
      </div>
    );
}

export default Landing;