import React from "react";
import Logo from "../../images/foxbel-music.png";

const SideMenu = () => {
  return (
    <aside className="h-full w-[330px] bg-[#662323] text-white">
      <div className="pt-[50px] px-[40px]">
        <img src={Logo}></img>
      </div>
      <div className="flex flex-col items-start mt-[30px] ml-[40px]">
        <h2 className="text-[22px]">Mi Libreria</h2>
        <h4 className="text-[#E86060] text-[16px]">Recientes</h4>
        <ul className="space-y-[8px]">
          <li>Artistas</li>
          <li>Albums</li>
          <li>Canciones</li>
          <li>Estaciones</li>
        </ul>
        <h2 className="text-[22px] mt-[50px]">Playlist</h2>
        <ul className="space-y-[8px]">
          <li>Metal</li>
          <li>Para bailar</li>
          <li>Rock 90s</li>
          <li>Baladas</li>
        </ul>
      </div>
    </aside>
  );
};

export { SideMenu };
