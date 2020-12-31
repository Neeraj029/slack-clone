import React from 'react';
import './Slidebar.css';
import {FiberManualRecord} from '@material-ui/icons'

function Slidebar() {
    return (
        <div className = 'sidebar'>
            <div className="sidebar_header">
                <h2>Neeraj Samshette</h2>
                <h3>
                    <FiberManualRecord/>
                </h3>
            </div>
        </div>
    )
}

export default Slidebar
