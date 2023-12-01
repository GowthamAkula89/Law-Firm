import AccordianComponent from '../AccordianComponent';
import "./faq.css";
const FAQ=()=>{
    return(
        <div className="faq">
            <div className="faq-heading">
                <p className='faq-heading-text'>FAQ</p>
                <p className='faq-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>
            <div className="accordians">
                <AccordianComponent 
                question={"Do I need a personal injury report?"}
                answer={"Amet minim mollit non deserunt ullamco est sitaliqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."}
                />
                <AccordianComponent 
                question={"How much is my case worth?"}
                answer={"Amet minim mollit non deserunt ullamco est sitaliqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."}
                />
                <AccordianComponent 
                question={"What should I do right after car accidect"}
                answer={"Amet minim mollit non deserunt ullamco est sitaliqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."}
                />
                <AccordianComponent 
                question={"How much is my case worth?"}
                answer={"Amet minim mollit non deserunt ullamco est sitaliqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."}
                />
            </div>
        </div>
    )
}
export default FAQ;