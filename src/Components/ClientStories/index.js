import ClientCard from '../ClientCard';
import "./clientStories.css"
const ClientStories=()=>{
    return(
        <div className="client-stories">
            <div className="client-stories-header">
                <p className="client-stories-title">
                What says our happy Clients
                </p>
                <div className='prev-next-btns'>
                    <div className="icon">
                        <img className="ellipse-img" src="ellipse.png" alt="img"/>
                        <img className="arrow" src="prev_btn.png" alt="img"/>
                    </div>
                    <div className="icon">
                        <img className="ellipse-img" src="ellipse_yellow.png" alt="img"/>
                        <img className="arrow" src="next_btn.png" alt="img"/>
                    </div>
                </div>
            </div>
            <div className="clients-cards">
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
            </div>
            
        </div>
    )
}
export default ClientStories;