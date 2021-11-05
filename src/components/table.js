import gear from "../media/gear.svg";

const Element = ({title, stats}) => {
    const data = {

    }

    return(
        <div className="element table">
            <div className="element-head">
                <h4 className="element-type">grupa</h4>
                <h4 className="element-title">{title}</h4>
            </div>
            <span className="element-side-bgd"> </span>

            {title && <img src={gear} className="gear edit" alt="edit"/>}
            {stats &&
                <div className="element-stats stats-complex">
                    <div>ostatni pomiar</div>
                    <div>{stats}</div>
                </div>
            }
        </div>
    )
};

export default Element;