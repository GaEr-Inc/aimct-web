import React from "react";
import senafelogo from "../assets/sena_fe_logos.svg";
import NavButton from "./NavButton";
export function Header() {
  return (
      <nav className="flex items-center justify-evenly mx-auto h-20 w-screen">
        <div className="ml-20">
          <img
            src={senafelogo}
            style={{
              width: "181px",
            }}
          />
        </div>
        <div className="items-center mr-20">
          <NavButton>Planes</NavButton>
          <NavButton>Acerca de Nosotros</NavButton>
          <NavButton>Contactenos</NavButton>
          <NavButton>Clientes</NavButton>
        </div>
      </nav>
  );
}
