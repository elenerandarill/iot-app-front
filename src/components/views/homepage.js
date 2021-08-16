import Element from "../element";
import Table from "../table";
import ButtonFunc from "../buttonFunc";

const Homepage = () => {
    return(
        <div className="main">

            <div className="buttons-container">
                <ButtonFunc text={"wartość"} add="yes"/>
                <ButtonFunc text={"tabela"} add="yes"/>
                <ButtonFunc text={"wykres"} add="yes"/>
                <ButtonFunc text={"mapa"} add="yes"/>
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