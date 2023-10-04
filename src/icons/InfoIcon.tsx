import {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const InfoIcon: FC<Props> = ({width = 40, height = 40, color = '#F8F8F8'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      <Path
        d="M18.3333 15H21.6667V11.6667H18.3333M20 33.3333C12.65 33.3333 6.66668 27.35 6.66668 20C6.66668 12.65 12.65 6.66668 20 6.66668C27.35 6.66668 33.3333 12.65 33.3333 20C33.3333 27.35 27.35 33.3333 20 33.3333ZM20 3.33334C17.8113 3.33334 15.644 3.76444 13.622 4.60202C11.5999 5.4396 9.76254 6.66725 8.2149 8.2149C5.08929 11.3405 3.33334 15.5797 3.33334 20C3.33334 24.4203 5.08929 28.6595 8.2149 31.7851C9.76254 33.3328 11.5999 34.5604 13.622 35.398C15.644 36.2356 17.8113 36.6667 20 36.6667C24.4203 36.6667 28.6595 34.9107 31.7851 31.7851C34.9107 28.6595 36.6667 24.4203 36.6667 20C36.6667 17.8113 36.2356 15.644 35.398 13.622C34.5604 11.5999 33.3328 9.76254 31.7851 8.2149C30.2375 6.66725 28.4002 5.4396 26.3781 4.60202C24.356 3.76444 22.1887 3.33334 20 3.33334ZM18.3333 28.3333H21.6667V18.3333H18.3333V28.3333Z"
        fill={color}
      />
    </Svg>
  );
};

export default InfoIcon;