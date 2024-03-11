// import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';
import { Link, NavLink } from 'react-router-dom';
import { FarmWrapper, TitleWrapper } from './ListFarm.styled';

export const FarmItem = ({ isActive, title, _id }) => {
  return (
    <FarmWrapper $isActive={isActive}>
      <TitleWrapper $isActive={isActive}>
        <div>
          <NavLink className="nav-item nav-link" to={`farm/${_id}`}>
            {title}
          </NavLink>
        </div>
      </TitleWrapper>
    </FarmWrapper>
  );
};
