import "./subscribe.css";
const Subscribe=()=>{
    return(
    <div className="subscribe-field">
        <p className="subscribe-heading">Subscribe Our Newsletter</p>
        <div className="subscribe-input-fields">
            <input className="user-name" type="text" placeholder="Name:"/>
            <input className="email" type="email" placeholder="Email: "/>
            <button id="submit-btn">Send</button>
        </div>
    </div>
    )
}
export default Subscribe;