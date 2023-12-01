import "./clientCard.css";
const ClientCard=(
    {name,image}
)=>{
    return(
        <div className="client-card">
            <div className="client-card-details">
                <img className="client-img" src={image} alt=""/>
                <div>
                    <p className="client-name">{name}</p>
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