import gear from "../media/gear.svg";

const Element = ({title, stats, content}) => {
    return(
        <div className="element">
            <div className="element-head">
                <h4 className="element-type">grupa</h4>
                <h4 className="element-title">{title}</h4>
                {content && <img src={gear} className="gear" alt="edit"/>}
            </div>
            {stats && <h2 className="element-stats stats-simple">{stats}</h2>}
            {content && <p className="element-content">{content}</p>}
        </div>
    )
};

export default Element;