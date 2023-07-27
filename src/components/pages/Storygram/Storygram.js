import React from "react";
// import { Fragment } from "react";
import "./Storygram.css";
import NavbarBlack from "../NavbarBlack";
import FooterBlack from "../FooterBlack";
import Pagination from "./Pagination";

export default function Storygram() {
  return (
    <>
      <div className='dark-wrapper'>
        <NavbarBlack />
        <h1 className='sg-heading text-white m-5'>Storygram</h1>
        <Pagination />

        <FooterBlack />
      </div>
    </>
  );
}
