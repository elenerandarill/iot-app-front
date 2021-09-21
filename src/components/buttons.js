import {Link} from "react-router-dom";

export const ButtonLink = ({ text, add, link = "#", onClick }) => {
    return (
        <Link to={link}>
            <div className="btn btn-color" onClick={(e) => { if(onClick) onClick(e) }}>
                {add && <i className="fas fa-plus mrg-r5"/>}
                {text}
            </div>
        </Link>
    )
}

export const ButtonFunc = ({ text, add, onClick }) => {
    return (
            <div className="btn btn-color" onClick={(e) => { if(onClick) onClick(e) }}>
                {add && <i className="fas fa-plus mrg-r5"/>}
                {text}
            </div>
    )
}