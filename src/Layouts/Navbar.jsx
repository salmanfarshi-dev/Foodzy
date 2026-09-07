import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { NavLink } from "react-router";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <Navbar
    isMenuOpen={isMenuOpen}  
      onMenuOpenChange={setIsMenuOpen}
    className="py-1 md:py-2 z-60 transition-colors duration-300 shadow "
      classNames={{
        wrapper: "w-full max-w-[1440px] mx-auto  px-4 md:px-8 lg:px-0 w-full",
      }}
    >
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand className="ml-[20%] md:ml-0">
         <img src="/logo.png" alt="" className="" />

        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-8" justify="center">
        <NavbarItem>
          <NavLink
            to="/" 
            className={({ isActive }) =>
              `md:text-[18px] lg:text-xl font-medium transition ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
            Home
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `md:text-[18px] lg:text-xl font-medium transition ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
            About Us
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to="/productlist"
            className={({ isActive }) =>
              `md:text-[18px] lg:text-xl font-medium transition ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
           Products
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `md:text-[18px] lg:text-xl font-medium transition ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
            Blog
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `md:text-[18px] lg:text-xl font-medium transition ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
            Contact
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex items-center gap-x-2 ">
            <Button className="bg-primary text-white font-[16px] md:text-[18px] lg:text-xl md:py-6 md:px-6">Contact Us</Button>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-black text-white z-50 mt-2">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <NavLink
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-lg ${isActive ? "text-primary" : "text-white"}`
              }
            >
              {item.name}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default App;