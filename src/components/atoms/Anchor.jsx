import { Link } from "react-router-dom";

function Anchor({link, text, msn}) {
    return ( 
        <div>{msn}
            <Link to={link}>{text}</Link>
        </div>
    );
}

export default Anchor;