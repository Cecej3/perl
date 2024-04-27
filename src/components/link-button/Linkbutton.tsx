import { Link } from "react-router-dom";

interface LinkbuttonProps {
    href: string
    icon: any
    title: string
    className: string
}
const Linkbutton = (props: LinkbuttonProps) => {
    const { className, title, icon, href } = props;
  return (
      <Link to={href} className={className}>
          {title} {icon}
    </Link>
  );
};

export default Linkbutton;
