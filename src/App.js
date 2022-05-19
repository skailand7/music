import { SideMenu } from "./components/sideMenu/SideMenu";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import React from "react";
import "./App.css";

function App() {
  const [selected, setSelected] = React.useState();
  return (
    <div className="w-screen h-screen relative">
      <div className="flex h-full">
        <SideMenu />
        <Main setSelected={setSelected} />
      </div>
      <Footer selected={selected} />
    </div>
  );
}

export default App;
