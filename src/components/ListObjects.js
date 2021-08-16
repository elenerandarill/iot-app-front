import { Link } from "react-router-dom";


const ListObjects = ({object, list, linkTo}) => {
    // console.log("wlasciwy obiekt jest pod key=object, ", object.object)

    const objLookupList = [];

    linkTo === "group" ? objLookupList.push(object.groups) : objLookupList.push(object.sensors)

    const lookupList = objLookupList[0];

    let result = [];

    const findObjectInList = (key_id, list) => {
        for (let j = 0; j < list.length; j++) {
            if (key_id === list[j].id) {
                return list[j]
            }
        }}

    for (let i = 0; i < lookupList.length; i++) {
        result.push(findObjectInList(lookupList[i], list))
    }

    console.log("results: ", result)

    return (
        result.map(obj =>
            <Link
                key={obj.id}
                to={`/${linkTo === "group"? "sensor-groups" : "sensors"}/${obj.id}`}
            >
                <div className="object shadow">
                    {obj.name}
                </div>
            </Link>)
    )
}

export default ListObjects;