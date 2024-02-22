import "./SubTitle.css"

const SubTitle = (props) => {
    const { day } = props;
    return (
        <h2 className="subtitle"> I feel great because today is {day}!</h2>
    );
};

export default SubTitle