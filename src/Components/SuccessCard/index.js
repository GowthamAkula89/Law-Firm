import "./successCard.css";
const SuccessCard=({percentage})=>{
    return(
        <div className="success-card">
            <div className="card-details">
                <div className="icon">
                    <img className="ellipse-img" src="ellipse.png" alt="img"/>
                    <img className="gift-icon-img" src="GiftIcon.png" alt="img"/>
                </div>
                <p className="card-title">{percentage}% Success Rate</p>
                <p className="card-text">Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
                <button className="card-btn">Read More</button>
            </div>
        </div>
    )
}
export default SuccessCard;