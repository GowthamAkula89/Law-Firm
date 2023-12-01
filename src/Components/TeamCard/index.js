import "./teamCard.css";
const TeamCard=({name,count,image})=>{
    return(
        <div className="team-card">
            <div className="team-member">
                <img src={image} alt=""/>
                <div className="member-details">
                    <p className="member-name">{name}</p>
                    <p className="member-count">{count}</p>
                </div>
            </div>
        </div>
    )
}
export default TeamCard;