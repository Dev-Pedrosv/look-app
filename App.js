import React from "react";
import { Routes } from "./routes";
import ContextProvider from "./src/contexts/app";

export default function App() {
  return (
    <>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </>
  );
}
