import Element from "../Element";
import Table from "../Table";
import plus from "../../media/plus.svg";

const Homepage = () => {
    return(
        <div className="main">

            <div className="main-func-buttons">
                <button className="btn btn-purple btn-func insert-button">
                    <img src={plus} className="icon-plus" alt="dodaj wartość"/>
                    <p>wartość</p>
                </button>
                <button className="btn btn-purple btn-func insert-button">
                    <img src={plus} className="icon-plus" alt="dodaj tabelę"/>
                    <p>tabela</p>
                </button>
                <button className="btn btn-purple btn-func insert-button">
                    <img src={plus} className="icon-plus" alt="dodaj wykres"/>
                    <p>wykres</p>
                </button>
                <button className="btn btn-purple btn-func insert-button">
                    <img src={plus} className="icon-plus" alt="dodaj mapę"/>
                    <p>mapa</p>
                </button>
            </div>

            <div className="main-content">
                <Element
                    title="czujnik 121"
                    content="Tu bedzie jakis wykres"
                />
                <Table
                    title="mój sad"
                    stats="śr.temp 17*C, wilg 62%"
                    content="Tu bedzie tabela"
                />
                <Element
                    title="czujniki jabłonie"
                    stats="śr.temp 17*C, wilg 62%"
                    content="Tu bedzie tabela"
                />
                <Element
                    title="czujniki jabłonie"
                    stats="śr.temp 17*C, wilg 62%"
                    content="Tu bedzie tabela"
                />

                <Table
                    title="szklarnia"
                    stats="śr.temp 17*C, wilg 62%"
                    content="Tu bedzie tabela"
                />
            </div>
        </div>
    )
}

export default Homepage;