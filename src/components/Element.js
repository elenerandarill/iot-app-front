const Element = ({title, stats, content}) => {
    return(
        <div className="element">
            <h4 className="">{title}</h4>
            {content && <span className="edit-icon">edit</span>}
            {stats && <h2 className="element-stats">{stats}</h2>}
            {content && <p className="element-content">{content}</p>}
        </div>
    )
}

export default Element;