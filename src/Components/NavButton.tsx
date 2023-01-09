import React from "react";

function NavButton({ children }: { children: React.ReactNode }) {
  return <button className="mx-4">{children}</button>;
}

export default NavButton;
