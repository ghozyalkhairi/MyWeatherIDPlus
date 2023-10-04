import {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const CityIcon: FC<Props> = ({width = 40, height = 40, color = '#FED059'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 11V5L12 2L9 5V7H3V21H21V11H15ZM7 19H5V17H7V19ZM7 15H5V13H7V15ZM7 11H5V9H7V11ZM13 19H11V17H13V19ZM13 15H11V13H13V15ZM13 11H11V9H13V11ZM13 7H11V5H13V7ZM19 19H17V17H19V19ZM19 15H17V13H19V15Z"
        fill={color}
      />
    </Svg>
  );
};

export default CityIcon;
