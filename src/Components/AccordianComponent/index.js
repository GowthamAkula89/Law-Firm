import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import "./accordianComponent.css";
const ExpandMoreIcon=()=>{
    return(
        <div className='expand-icon'>
            <img className='expand-img' src='expand_icon1.png' alt=''/>
            <p className='expand-plus'>+</p>
        </div>
    )
}
const AccordianComponent=({question,answer})=>{
    return(
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='accordian-heading'
        >
          <Typography className='heading-text'>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails  className='accordian-text-container'>
          <Typography className='accordian-text'>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      /*{ <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='accordian-heading'
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails  className='accordian-text-container'>
          <Typography className='accordian-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='accordian-heading'
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails  className='accordian-text-container'>
          <Typography className='accordian-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='accordian-heading'
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails  className='accordian-text-container'>
          <Typography className='accordian-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> }*/
    )
}
export default AccordianComponent;