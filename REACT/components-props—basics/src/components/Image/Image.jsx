/* Componente Image ⇒ Crea un componente que retorne un <image> y 
en su interior podéis seleccionar cualquier imagen de ReactJS.*/

const Image = (props) => {
    const { image_url } = props;
    return (
        <img src={image_url}  alt="Imagen de React"/>
    )
}

export default Image