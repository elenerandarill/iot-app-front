import ListObjects from "./listObjects";


const ListAssignedObjects = ({assigned, list, objectRenderer}) => {
    const results = list.filter(elem => assigned.includes(elem.id));

    return(
        <ListObjects list={results} objectRenderer={objectRenderer}/>
    )
}

export default ListAssignedObjects;