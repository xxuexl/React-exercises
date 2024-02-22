import "./Image.css"

const Image = (props) => {
    const { image_url } = props;
    return (
        <img src={image_url}  alt="Imagen de React"/>
    )
}

export default Image