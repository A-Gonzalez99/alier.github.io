import './buttonHeader.css'
import { useNavigate } from 'react-router-dom';

export default function ButtonHeader({ texto, url }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };

  return (
    <button className="button-header" onClick={handleClick}>
      {texto}
    </button>
  );
}