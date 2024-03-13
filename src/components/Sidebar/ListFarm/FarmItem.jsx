// import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';
import { Link } from 'react-router-dom';

export const FarmItem = ({ isActive, title, _id }) => {
  return (
    <nav className="sidebar-item">
      <Link className="nav-item nav-link" to={`/farm/${_id}`}>
        {title}
      </Link>
    </nav>
  );
};
