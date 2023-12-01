import SuccessCard from "../SuccessCard";
import "./successstories.css";
const SuccessStories=()=>{
    return(
        <div className="success-stories">
            <h1 className="stories-heading">
                Why Choose us?
            </h1>
            <div className="stories">
                <SuccessCard percentage={98}/>
                <SuccessCard percentage={100}/>
                <SuccessCard percentage={100}/>
            </div>
        </div>
    )
}
export default SuccessStories;