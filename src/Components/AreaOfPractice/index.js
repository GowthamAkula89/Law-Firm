import "./areaOfPractice.css";
const AreaOfPractice=()=>{
    return(
        <div className="area-of-practice">
            <p className="area-field-text">Area of Practices</p>
            <div className="img-area-field">
                <div className='bussiness-area'>
                    <div className="bussiness-type" style={{width: "75%"}}>
                        <img src='bussiness.png' alt='' className="bussiness-img" />
                        <p className="bussiness-text-1">BUSSINESS LAW</p>
                    </div>
                    <div className="bussiness-type"  style={{width: "25%"}}>
                        <img src='partnership.png' alt='' className="bussiness-img"/>
                        <p className="bussiness-text-2">PARTNERSHIP LAW</p>
                    </div>
                    
                </div>
                <div className='bussiness-area'>
                    <div className="bussiness-type"  style={{width: "25%"}}>
                        <img src='realestate.png' alt='' className="bussiness-img"/>
                        <p className="bussiness-text-2">REAL ESTATE LAW</p>
                    </div> 
                    <div className="bussiness-type" style={{width: "75%"}}>
                        <img src='bussinesslaw2.png' alt='' className="bussiness-img"/>
                        <p className="bussiness-text-1">BUSSINESS LAW</p>
                    </div>
                    
                </div>
                <div className='bussiness-area'>
                    <div className="bussiness-type" style={{width: "75%"}}>
                        <img src='landlord.png' alt='' className="bussiness-img"/>
                        <p className="bussiness-text-1">LANDLORD DISPUTES</p>
                    </div>
                    <div className="bussiness-type"  style={{width: "25%"}}>
                        <img src='elderabuse.png' alt='' className="bussiness-img"/>
                        <p className="bussiness-text-2">ELDER ABUSE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AreaOfPractice;