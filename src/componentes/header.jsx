import './header.css';
import ButtonHeader from './buttonHeader';
import { useNavigate } from 'react-router-dom';
import { FaItchIo } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";

export default function Header() {
  const navigate = useNavigate();
  const logoClick = () => {
    navigate('/');
  };

  return (
    <div className="header-background">
      <img className="header-logo" onClick={logoClick} src="/imgs/logoB.png" alt="Logo" />
      <div className="header-buttons">
        <ButtonHeader texto="Inicio" url="/" />
        <ButtonHeader texto="Proyectos" url="/proyectos" />
        <ButtonHeader texto="Curriculum" url="/curriculum" />
        <ButtonHeader texto="Contacto" url="/contacto" />
        <a href='https://alier-developer.itch.io/' target="_blank" className='header-iconos'><FaItchIo/></a>
        <a href='https://github.com/A-Gonzalez99' target="_blank" className='header-iconos'><FaGithubAlt/></a>
      </div>
    </div>
  );
}