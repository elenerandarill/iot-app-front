const fakeMeasurements = [
    {
        id: "1",
        name: "temperatura",
    },
    {
        id: "2",
        name: "wilgotność powietrza",
    },
    {
        id: "3",
        name: "wilgotność podłoża",
    },
    {
        id: "4",
        name: "ciśnienie",
    },
    {
        id: "5",
        name: "stężenie CO2",
    },
    {
        id: "6",
        name: "stężenie EC",
    },
    {
        id: "7",
        name: "ilość tVOC",
    },
    {
        id: "8",
        name: "aktywność",
    },
    {
        id: "9",
        name: "dystans",
    },
    {
        id: "10",
        name: "poziom wody",
    },
].map(measurement => {
    measurement.getDisplayName = () => measurement.name
    return measurement
})

export default fakeMeasurements;