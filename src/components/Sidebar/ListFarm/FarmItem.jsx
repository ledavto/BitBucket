// import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';
import { Link, NavLink } from 'react-router-dom';

export const FarmItem = ({ isActive, title, _id }) => {
  return (
    <div className="sidebar-item">
      <Link className="nav-item nav-link" to={`farm/${_id}`}>
        {title}
      </Link>
      {/* <button
            className="nav-item nav-link"
            type="button"
            // onClick={() => dispatch()}
          >
            {title} 
          </button> */}
    </div>
  );
};
