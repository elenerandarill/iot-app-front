import ListObjects from "./listObjects";


const ListAssignedObjects = ({assigned, list, linkTo}) => {
    const results = list.filter(elem => assigned.includes(elem.id));

    return(
     <ListObjects list={results} type={linkTo}/>
    )
}

export default ListAssignedObjects;