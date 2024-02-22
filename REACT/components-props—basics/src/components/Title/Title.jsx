import "./Title.css"

const Title = (props) => {
  const { name } = props;
  return (
    <h1 className="title">Welcome to my Poke Ball, {name}!</h1>  
  );
};
export default Title