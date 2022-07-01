import {useParams} from "react-router-dom";

const Add = () => {

    const {a, b} = useParams();

    return (
        <div>
            Result of a + b is {parseInt(a, 10) + parseInt(b, 10)}
        </div>
    )
}

export default Add;
