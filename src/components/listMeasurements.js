/**
 * @param measurements {Measurement[]}
 * @return {JSX.Element}
 * @constructor
 */
const ListMeasurements = ({measurements}) => {
    console.log("ListMeasurements przekazano: ", measurements)
    // sprawdzic czy ostatni pomiar jest na koncu listy!;

    const getTypeHeader = (m) => {
        if (m.SDATYPE === "BATT"){return "naładowanie | %"}
        if (m.SDATYPE === "TEMP"){return "temperatura | °C"}
        if (m.SDATYPE === "RHUM"){return "wilg. powietrza | %RH"}
        if (m.SDATYPE === "PRES"){return "ciśnienie | hPa"}
        // {key === "moisture" && "wild. podłoża | %RH"}
        // {key === "illumination" && "oświetlenie | lux"}
        // {key === "CO2" && <span>CO<sub>2</sub> |ppm</span>}
        // {key === "EC" && "EC-przew. elektrolitów | µs/cm"}
        // {key === "tVOC" && "tVOC (LZO) | ppb"}
        // {key === "activity" && "aktywność"}
        // {key === "distance" && "dystans | mm"}
        // {key === "water_level" && "poziom wody | cm"}
        // {key === "water_leak" && "wyciek"}
        // {key === "door" && "drzwi"}
    }

    if(!measurements || measurements.length === 0) {
        return (
            <div>"BRAK DANYCH"</div>
        )
    }
    return (
        <div>
            <div className="centered head-light txt-blue txt-semibold">
                {measurements[0].SDATS}
            </div>

            <div className="txt-violet txt-semibold object-container">

                {measurements.map(m =>
                    <div key={m.SDATYPE.toString()} className="mrg-tb mrg-lr">
                        <div className="txt-water">
                            {getTypeHeader(m)}
                        </div>
                        <h1>{m.SDADATA}</h1>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ListMeasurements;