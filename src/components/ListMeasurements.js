const ListMeasurements = (sensorObj) => {
    // console.log("przekazano: ", sensorObj)

    return (
        <div className="txt-violet txt-semibold object-container">
            {Object.entries(sensorObj.sensorObj.measurements).map(([key, value]) =>
                <div key={key.toString()} className="mrg-tb mrg-lr">
                    <div className="txt-water">
                        {key === "temperature" && "temperatura | °C"}
                        {key === "humidity" && "wilg. powietrza | %RH"}
                        {key === "moisture" && "wild. podłoża | %RH"}
                        {key === "pressure" && "ciśnienie | kPa"}
                        {key === "illumination" && "oświetlenie | lux"}
                        {key === "CO2" && <span>CO<sub>2</sub> |ppm</span>}
                        {key === "EC" && "EC-przew. elektrolitów | µs/cm"}
                        {key === "tVOC" && "tVOC (LZO) | ppb"}
                        {key === "activity" && "aktywność"}
                        {key === "distance" && "dystans | mm"}
                        {key === "water_level" && "poziom wody | cm"}
                        {key === "water_leak" && "wyciek"}
                        {key === "door" && "drzwi"}

                    </div>
                    <h1>{value}</h1>
                </div>
            )}
        </div>)
}

export default ListMeasurements;