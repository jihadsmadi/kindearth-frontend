"use client"
import Cookies from "js-cookie";
export default function Home() {
  function onClickHandler(){
    console.log("button clicked")
    const csrf = Cookies.get("csrf-cookie")
  
    console.log(csrf);
  }
  return <>
  <button onClick={()=>onClickHandler()}>
    click
  </button>
  </>
}
