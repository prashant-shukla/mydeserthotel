import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium hover:text-amber-500 transition-colors"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden gap-2 lg:flex">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
        </div>
        
        <Typography className="text-center text-2xl" variant="h6" color={isScrolling ? "blue-gray" : "white"}>
          My Desert<div className="text-xs text-center uppercase">Hotel</div>
        </Typography>

        {open ? (
          <div></div>        
        ) : (
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <button
              class="button button--winona p-0 bg-none hover:bg-white hover:text-amber-600 relative block focus:outline-none border border-solid text-sm text-center uppercase tracking-widest align-middle overflow-hidden" 
              data-text="Book Now"
            >
              <span className="align-middle block">
                Book Now
              </span>
            </button>
          </a>
        )}
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <div className="container mx-auto mt-4 flex items-center justify-between uppercase">
        <div></div>
        <ul
            className={`gap-6 lg:flex ${
              isScrolling ? "text-gray-900" : "text-white"
            }`}
          >
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Experiance</NavItem>
          <NavItem>Rooms & Suits</NavItem>
          <NavItem>Dining</NavItem>
          <NavItem>Gallary</NavItem>
          <NavItem>Contact</NavItem>
        </ul>
        <div></div>
      </div>
      
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Experiance</NavItem>
            <NavItem>Rooms & Suits</NavItem>
            <NavItem>Dining</NavItem>
            <NavItem>Gallary</NavItem>
            <NavItem>Contact</NavItem>
          </ul>
          <div className="mt-4 flex gap-2">
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray" size="sm" className="ml-auto">
                Blocks
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
