import React from 'react';
import {FiChevronDown} from 'react-icons/fi'

const Dropdown = ({children})=>{
    const a123=0
    return(
        <>
        <span className="dropdown-icon">{children}<FiChevronDown/></span>
        </>
    )
}

export {Dropdown}