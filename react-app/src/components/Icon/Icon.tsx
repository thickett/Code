import * as BSIcons from "react-icons/bs";
import * as BIIcons from "react-icons/bi";

const AllIcons = {
  ...BSIcons,
  ...BIIcons,
};

interface Props {
  name: string;
  size?: number;
  color?: string;
}

const Icon = ({ name, size, color }: Props) => {
  const IconComponent =
    AllIcons[name as keyof typeof AllIcons] || AllIcons.BiError;

  return <IconComponent size={size} color={color}></IconComponent>;
};

export default Icon;
