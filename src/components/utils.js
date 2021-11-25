/**
 * list1 = old list, list2 = new list
 * @param list1
 * @param list2
 * @return {[any[], any[]]}
 */
export const findDifferenceInLists = (list1, list2) => {
    // console.log("old list: ", list1)
    // console.log("new list: ", list2)
    const addedList = list2.filter(oId => !list1.includes(oId))
    // console.log("was added: ", addedList)
    const removedList = list1.filter(oId => !list2.includes(oId))
    // console.log("was removed: ", removedList)

    return [addedList, removedList]
}

/**
 * Removes element from list
 * @param list {any[]}
 * @param elem {any}
 * @return {any[]}
 */
export const removeFromList = (list, elem) => {
    return list.filter(l => l !== elem)
}