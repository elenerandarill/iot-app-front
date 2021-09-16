// import Element from "../element";
// import Table from "../table";
import {Link} from "react-router-dom";

const Homepage = () => {
    return(
        <div className="main">

            <div className="buttons-container">
                <Link to={"/team/add"}>
                    <div className="btn btn-color">
                        <i className="fas fa-plus mrg-r5"/>
                        wartość
                    </div>
                </Link>
                <Link to={"/team/add"}>
                    <div className="btn btn-color">
                        <i className="fas fa-plus mrg-r5"/>
                        tabela
                    </div>
                </Link>
                <Link to={"/team/add"}>
                    <div className="btn btn-color">
                        <i className="fas fa-plus mrg-r5"/>
                        wykres
                    </div>
                </Link>
                <Link to={"/team/add"}>
                    <div className="btn btn-color">
                        <i className="fas fa-plus mrg-r5"/>
                        mapa
                    </div>
                </Link>
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