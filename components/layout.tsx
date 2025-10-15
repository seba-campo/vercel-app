import { ReactElement } from "react";

export default function Layout({children}){
    return (
    <div>
      <div>Header</div>
      <main>{children}</main>
      <div>Footer</div>
    </div>
    )
}