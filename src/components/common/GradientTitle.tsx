import { NextPage } from "next";

interface Props {
  text: string;
}

const GradientTitle: NextPage<Props> = ({ text }: Props) => {
  return <p className="text-3xl font-extrabold bg-gradient-to-r from-[#ABABAB] via-white to-[#ABABAB] inline-block text-transparent bg-clip-text">{text}</p>
};

export default GradientTitle;
