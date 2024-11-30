import { NextPage } from "next";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (<footer className="bg-black text-gray-400 text-center py-6">
    <p>© 2024 Pineleaf Care. All rights reserved.</p>
  </footer>);
};

export default Footer;
