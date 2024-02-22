import "./Paragraph.css"

const Paragraph = (props) => {
    const {description} = props;
    return (
        <p className="paragraph"> {description} </p>
    )
 }

 export default Paragraph