import { RotatingLines } from 'react-loader-spinner';
import { StyledLoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoaderWrap>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </StyledLoaderWrap>
  );
};
