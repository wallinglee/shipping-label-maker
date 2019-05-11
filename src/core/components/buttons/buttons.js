import React from 'react';

/**
 * Buttons component
 */
const Buttons = (props) => {
  return (
    <div className="button-row">
        {props.currStep > 1 &&
            <button className="btn btn-primary" type="button" onClick={()=>{props.onAction('prev')}}>Back</button>
        }
        {props.currStep < 5 &&
            <button className="btn btn-primary" type="button" onClick={()=>{props.onAction('next')}}>Next</button>
        }
        {props.currStep === 5 &&
            <button className="btn btn-primary" type="button" onClick={()=>{props.onAction('end')}}>End</button>
        }

        {/*
        <button onClick={()=>{
            values > 0 ? onAction('next') : alert('Please enter a weight')
        }}>Next</button>
        */}
    </div>
  )
};

export default Buttons;
