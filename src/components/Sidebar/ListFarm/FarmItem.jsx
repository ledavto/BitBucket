// import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';
import { Link } from 'react-router-dom';
import { FarmWrapper, TitleWrapper } from './ListFarm.styled';

export const FarmItem = ({ isActive, title, id }) => {
  return (
    <FarmWrapper $isActive={isActive}>
      <TitleWrapper $isActive={isActive}>
        <div>
          <Link className="nav-item nav-link" to={id}>
            {title}
          </Link>
        </div>
      </TitleWrapper>
    </FarmWrapper>
  );
};
