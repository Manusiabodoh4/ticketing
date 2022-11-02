import React from "react";

export default function ResponsiveXl({children}){
  return(
    <>
      <div className="hidden xl:block">
        {children[0]}
      </div>
      <div className="block xl:hidden">
        {children[1]}
      </div>
    </>
  )
}