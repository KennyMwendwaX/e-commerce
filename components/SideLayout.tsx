import { ReactNode } from "react";
import Sidebar from "./Sidebar";

type SideLayoutProps = {
  children: ReactNode;
};

export default function SideLayout({ children }: SideLayoutProps) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
