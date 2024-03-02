import Axios from "npm:axios";
import React from 'https://dev.jspm.io/react@17.0.2';
import Button from "../components/Button.tsx";

type tipofrase = {
  data: string;
};
type Character = {
  image: string;
};

export default async function Home() {
  const random: number = Math.floor(Math.random() * 60) + 1;
  const fetch = await Axios.get<tipofrase>(`https://filmquotes.deno.dev/${random}`);
  const fetch2 = await Axios.get<Character>(`https://rickandmortyapi.com/api/character/${random}`);
  const characters = fetch2.data;

  const backgroundImageStyle = {
    backgroundImage: `url(${characters.image})`,
  };

  function playAudio() {
    const audio = new Audio('cancion.mp3');
    audio.play();
  }

  return (
    <div className="flex-column background-container" style={backgroundImageStyle}>
      <div class="page">
        <div class="marge"></div>
        <span class="title">FRASES DE PELIS</span>
        <p>{fetch.data} </p>
      </div>
      <div className="button-container">
        <a href="https://www.youtube.com/watch?v=E6TUs69Cw94&ab_channel=ClamJammah">
          <Button variant="primary" >VIDEO YOUTUBE</Button>
        </a>
        <a>
          <Button variant="secondary" >NO ME TOQUES</Button>
        </a>
        <a>
          <button onClick="history.go(0);">CAMBIAR FRASE</button>
        </a>
      </div>
      <div class="image-container">
        <img class="moving-image" src="/homer.gif" alt="Moving Image"></img>
       </div>
    </div>
  );
}
