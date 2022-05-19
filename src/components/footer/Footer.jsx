import React from "react";

const Footer = ({ selected }) => {
  const audioPlay = () => {
    document.querySelector("#player").src = selected.preview;
    document.getElementById("player").play();
  };
  const volume = (ev) => {
    document.querySelector("#player").volume = ev.currentTarget.value / 100;
  };
  return (
    <footer className="flex absolute bottom-0 h-[100px] w-full bg-[#EB5757] justify-center pr-[32px]">
      <div className="flex relative w-full">
        <div className="flex absolute left-0">
          <img
            src={selected ? selected.album.cover : ""}
            // src="https://e-cdns-images.dzcdn.net/images/artist/7a7830dd8239dbdb014b04db4751c52d/250x250-000000-80-0-0.jpg"
            alt=""
            className="h-[100px] w-[100px]"
          />
          <div className="flex flex-col justify-center">
            <p>{selected ? selected.title : "Titulo"}</p>
            <p>
              {selected ? selected.artist.name : "Artista"}-
              {selected ? selected.album.title : "Album"}
            </p>
          </div>
        </div>
        <div className="flex items-center absolute top-[25%] left-[50%]">
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
              d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
            />
          </svg>
          <div
            onClick={audioPlay}
            className="flex justify-center items-center bg-[#FF7676] rounded-full text-white w-[60px] h-[60px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[21px] w-[21px] "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

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
              d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center absolute top-[25%] right-0">
          <input
            id="volume"
            onChange={(e) => volume(e)}
            type="range"
            className="bg-blue-800 text-red-700"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[42px] w-[18px]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <audio id="player">
          <source
            src={selected ? selected.preview : ""}
            //src="https://cdns-preview-d.dzcdn.net/stream/c-d31a650f9703e564e70bce698209c63c-4.mp3"
            type="audio/mp3"
          />
        </audio>
      </div>
    </footer>
  );
};

export { Footer };
