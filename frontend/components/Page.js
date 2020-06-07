import React from "react";
import Header from "./Header";
import Meta from "./Meta";

export default function Page({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <h1>Global Style</h1>
      <div>{children}</div>
    </>
  );
}
