// import Element from "../element";
// import Table from "../table";
import {Link} from "react-router-dom";
import {ButtonLink} from "../buttons";

const Homepage = () => {
    return(
        <div className="main">

            <div className="buttons-container">
                <ButtonLink
                    text="wartość"
                    add={true}
                    link={"/team/new"}
                />
                <ButtonLink
                    text="tabela"
                    add={true}
                    link={"/team/new"}
                />
                <ButtonLink
                    text="wykres"
                    add={true}
                    link={"/team/new"}
                />
                <ButtonLink
                    text="mapa"
                    add={true}
                    link={"/team/new"}
                />
            </div>

            <div className="head-txt">Tu będzie pulpit.</div>

            {/*<div className="main-content">*/}
            {/*    <Element*/}
            {/*        title="czujnik 121"*/}
            {/*        content="Tu bedzie jakis wykres"*/}
            {/*    />*/}
            {/*    <Table*/}
            {/*        title="mój sad"*/}
            {/*        stats="śr.temp 17*C, wilg 62%"*/}
            {/*        content="Tu bedzie tabela"*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    )
}

export default Homepage;