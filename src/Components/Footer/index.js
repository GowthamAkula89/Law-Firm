import "./footer.css";
const Footer=()=>{
    return(
        <div className="footer">
        <div className="sub-footer">
            <div className="logo">
                <img style={{width:"32px !important"}} src="vectorlogo1.png" alt="img"/>
                <img style={{width:"114px !important"}} src="studiologo.png" alt="img"/>
            </div>
            <div className="footer-items">
                <p className="footer-item-text">Home</p>
                <p className="footer-item-text">Attorneys</p>
                <p className="footer-item-text">Practice Areas</p>
                <p className="footer-item-text">Abous Us</p>
            </div>
            <div className="connect">
                <img className="socialmedia-img" src="icon_insta.png" alt=""/>
                <img className="socialmedia-img" src="icon_fb.png" alt=""/>
                <img className="socialmedia-img" src="icon_twitter.png" alt=""/>
                <img className="socialmedia-img" src="icon_pinterest.png" alt=""/>
            </div>
        </div>
        <div className="copy-rights">
            <p className="copy-rights-text">© 2020 Acme. All right reserved.</p>
            <p className="copy-rights-text">Privacy Policy</p>
            <p className="copy-rights-text">Terms of Service</p>
        </div>
        </div>
    )
}
export default Footer;