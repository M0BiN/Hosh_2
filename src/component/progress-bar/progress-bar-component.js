import React from 'react';
import './progress-bar-styles.css';



const ProgressBar = ({ precent, label }) => {

    return (
        <div className='progress-container'>
        <span className='className'>
            {label}
        </span>
        <div class="progress-bar">
        {precent}%
            <span class="bar">
                <span class="progress" style={{ width: `${precent}%`, opacity:(precent < 1) ? '0' : '1'}}></span>
                
            </span>
        </div>
        
        </div>
    )
}


export default ProgressBar;