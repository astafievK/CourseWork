import './Mark.css'
import {data} from "../../data.js";

function Mark() {
    if (data[0].role === 'Студент') {
        return (
            <button className="markBtn passed" data-value="1" data-user="2" data-work="7" data-passed="1">1</button>
        );
    }
    return (
        <button className="mark passed">1</button>
    );
}

export default Mark;