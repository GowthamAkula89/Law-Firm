import "./clientCard.css";
const ClientCard=()=>{
    return(
        <div className="client-card">
            <div className="client-card-details">
                <img className="client-img" src="client_img1.png" alt=""/>
                <div>
                    <p className="client-name">Jane Cooper</p>
                    <p className="client-positon"> Ceo of Hunt</p>
                </div>
                <p className="card-text">Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia.</p>
            </div>
        </div>
    )
}
export default ClientCard;