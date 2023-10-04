import {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const HomeIcon: FC<Props> = ({width = 40, height = 40, color = '#F8F8F8'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      <Path
        d="M20 9.48333L28.3333 16.9833V30H25V20H15V30H11.6666V16.9833L20 9.48333ZM20 5L3.33331 20H8.33331V33.3333H18.3333V23.3333H21.6666V33.3333H31.6666V20H36.6666L20 5Z"
        fill={color}
      />
    </Svg>
  );
};

export default HomeIcon;
