import React from 'react';
import {FiChevronDown} from 'react-icons/fi'

const Dropdown = ({children})=>{
    return(
        <span className="dropdown-icon">{children}<FiChevronDown/></span>
    )
}

export {Dropdown}