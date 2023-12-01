import TeamCard from '../TeamCard';
import "./teamDetails.css";
const TeamDetails=()=>{
    return (
        <div className="team-details">
            <p className="details-heading">Our Team</p>
            <div className="team-cards">
            <TeamCard name={"Danial Def"} count={"301 Cases"} image={"team_img1.png"}/>
            <TeamCard name={"Sanfole"} count={"850 Cases"} image={"team_img2.png"}/>
            <TeamCard name={"Cesforila"} count={"470 Cases"} image={"team_img3.png"}/>
            <TeamCard name={"Colleen"} count={"180 Cases"} image={"team_img4.png"}/>
            <TeamCard name={"Haldone"} count={"212 Cases"} image={"team_img5.png"}/>
            <TeamCard name={"Nik Jeo"} count={"350 Cases"} image={"team_img6.png"}/>
            </div>
        </div>
    )
}
export default TeamDetails