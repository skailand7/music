import React from "react";
import { useEffect } from "react";

const Main = ({ setSelected }) => {
  const [musicArray, setMusicArray] = React.useState([]);
  const [search, setSearch] = React.useState("chart/0/tracks");
  const ref = React.useRef("");
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/${search}`
      );
      const data = await response.json();
      const item = data.data;
      setMusicArray(item);
      setSelected(musicArray[0]);
      console.log(musicArray);
    }
    fetchData();
    // fetch(
    //   "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"
    // )
    //   .then((response) => response.json())
    //   .then((data) => setMusicArray(data.data));
    // const mainArtistArray = musicArray[0];
    // console.log(musicArray);
    // setSelected(mainArtistArray);
  }, [search]);
  const newSearch = () => {
    setSearch("search?q=" + ref.current.value);
    console.log(search);
  };

  return (
    <div className="w-full px-[70px] h-full">
      <div className="flex items-center justify-between mt-[30px] h-[40px] p-[2px]">
        <div className="flex rounded-full border w-[524px] text-[#828282] py-2 px-4 justify-between">
          <input className="" ref={ref} type="text" placeholder="Buscar" />
          <div onClick={newSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[14px] w-[13px] text-[#E86060] inline-block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <p className="inline-block text-[#4F4F4F]">Miguel Q.</p>
        </div>
      </div>
      <div className="flex flex-col text-white">
        <div className="flex">
          <img
            src={musicArray.length > 0 ? musicArray[0].album.cover_medium : ""}
            //src="https://e-cdns-images.dzcdn.net/images/artist/7a7830dd8239dbdb014b04db4751c52d/250x250-000000-80-0-0.jpg"
            alt=""
            className="w-[250px] h-[250px]"
          />
          <div className="h-[250px] w-full relative">
            <div className="h-full w-full absolute -z-10 bg-red-700">
              <img
                src={
                  musicArray.length > 0 ? musicArray[0].artist.picture_xl : ""
                }
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <p>`{musicArray.length > 0 ? musicArray[0].artist.name : ""}`</p>
              <p>
                Lo mejor de{" "}
                {musicArray.length > 0 ? musicArray[0].artist.name : ""}
              </p>
              <p>Algo acerca de Karol G</p>
            </div>
            <div className="flex">
              <button className="rounded-full w-[117px] h-[31px] bg-[#E86060]">
                Reproducir
              </button>
              <button className="rounded-full w-[117px] h-[31px] border border-[#E86060] text-[#E86060]">
                Seguir
              </button>
            </div>
          </div>
        </div>
        <p>Resultados</p>
        <div className="grid grid-cols-5">
          {musicArray.map((item) => {
            return (
              <div className="w-[160px] h-auto text-red-900">
                <img
                  onClick={() => setSelected(item)}
                  className="w-full"
                  src={item.album.cover_medium}
                ></img>
                <p className="text-sm">{item.title}</p>
                <p className="text-[8px]">{item.artist.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Main };
