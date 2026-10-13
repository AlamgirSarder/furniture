import Container from "./Container";
import logo from "../assets/Logo.png";
import Navitem from "./ui/Navitem";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Header = () => {
  const NavItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About US",
      href: "#",
    },
    {
      name: "Products",
      href: "#",
    },
    {
      name: "FAQ’S",
      href: "#",
    },
    {
      name: "Contact Us",
      href: "#",
    },
  ];
  return (
    <header className="m-5">
      <nav>
        <Container>
          <div className="flex items-center justify-between">
            <img src={logo} alt="logo" />
            <ul className="flex gap-10">
              {NavItems.map((item) => (
                <Navitem
                  className="nav_item"
                  item={item}
                />
              ))}
            </ul>

            <div className="flex gap-10">
              <FaSearch />
              <div className=" relative after:content:[] after:absolute after:-top-2 after:-right-2 after:bg-red-500 after:w-2 after:h-2 after:rounded-full">
                <MdDelete />
              </div>
              <FaUser />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
