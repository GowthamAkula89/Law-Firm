import "./herosection.css";
const Herosection=()=>{
    return(
        <div className="hero-section">
            <div className="hero-text">
                <div className="hero-text-1">
                    <p>You don’t have to</p>
                    <p>Fight them Alone.</p>
                </div>
                <p className="hero-text-2">Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                
                <div className="email-field">
                    
                    <div className="mail-logo">
                        <img className="mail-img" src="mail.png" alt="mail"></img>
                    </div>
                    <input className="email-text" type="email" placeholder="Enter your email address"></input>
                    
                    <button className="submit-btn">Let's Talk</button>
                </div>
            </div>
            <img className="hero-img" src="header_img.png" alt="hero-img"/> 
        </div>
    )
}
export default Herosection;