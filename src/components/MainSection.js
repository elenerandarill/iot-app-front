import Element from "./Element";
import ButtonFunc from "./ButtonFunc";
import Table from "./Table";

const MainSection = () => {
    // tu bedzie lista Elementow i one beda sie pokazywaly jako pierwsze

    return (
        <div className="main">
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
    )
};

export default MainSection;