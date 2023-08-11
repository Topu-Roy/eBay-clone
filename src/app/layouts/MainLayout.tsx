"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div
      id="MainLayout"
      className="min-w-[1050px] max-w-[1300px] mx-auto border-b-2"
    >
      {children}
    </div>
  );
}

export default MainLayout;
