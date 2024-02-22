import { Title, SubTitle, Image, Paragraph } from "./components";
import './App.css'

const App = () => {
  return (
    <div className="wrapper">
      <Title name="Pikachu"/>
      <SubTitle day="Saturday"/>
      <Image image_url="https://preview.redd.it/4sy2oxe13pc91.jpg?auto=webp&s=07655cb05e63213d34d79abaaa4b1d016a0ce8da"/>
      <Paragraph description="Pikachu is a fictional species of Pokémon created for the Pokémon franchise. Developed by Game Freak and published by Nintendo, the series began in Japan in 1996 with the release of the video games Pokémon Red and Blue for the Game Boy."/>
    </div>
  );
};

export default App;
