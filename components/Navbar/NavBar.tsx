import { ReactElement } from "react";
import { MobileNavbar } from "./MobileNavbar/MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar/DesktopNavbar";

const NavBar = (): ReactElement => {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
};

export default NavBar; 
