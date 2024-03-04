// import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';
import { FarmWrapper, TitleWrapper } from './ListFarm.styled';

const FarmItem = ({ isActive, title, icon }) => {
  return (
    <FarmWrapper $isActive={isActive}>
      <TitleWrapper $isActive={isActive}>
        <p>{title}</p>
      </TitleWrapper>
    </FarmWrapper>
  );
};

export default FarmItem;
