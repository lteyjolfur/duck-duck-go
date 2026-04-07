import {FiChevronDown} from 'react-icons/fi'

const Dropdown = ({children}: React.PropsWithChildren)=>{
    return(
        <span className="dropdown-icon">{children}<FiChevronDown/></span>
    )
}

export {Dropdown}