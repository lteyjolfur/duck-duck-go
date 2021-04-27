import React from 'react'
import {HamburgerPanel} from './hamburger-panel'
import {Dropdown} from './dropdown'
import { FaBullhorn } from "react-icons/fa"; 

const Header = () => {
    const a123 = 0
    return (
        <div className="header">
            <Dropdown><FaBullhorn/></Dropdown>
            <HamburgerPanel></HamburgerPanel>
        </div>
    )

}

export {Header}
