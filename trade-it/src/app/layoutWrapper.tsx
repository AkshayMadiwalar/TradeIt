"use client";
import NavBar from "@/components/NavBar";
import { NextUIProvider } from "@nextui-org/react";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {

  return (<>
    <NextUIProvider>
      <div className="dark">
        <NavBar></NavBar>
        {children}
        </div >
    </NextUIProvider>
 
       
    </>)
}