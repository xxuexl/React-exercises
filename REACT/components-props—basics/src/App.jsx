import { Title, SubTitle, Image, } from "./components";
import './App.css'

const App = () => {
  return (
    <div className="wrapper">
      <Title className="title" name="Pikachu"/>
      <SubTitle className="subtitle" day="Saturday"/>
      <Image className="image" image_url="https://preview.redd.it/4sy2oxe13pc91.jpg?auto=webp&s=07655cb05e63213d34d79abaaa4b1d016a0ce8da"/>
    </div>
  );
};

export default App;
