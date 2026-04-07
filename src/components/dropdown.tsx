import {FiChevronDown} from 'react-icons/fi'

const Dropdown = ({children}: React.PropsWithChildren) => {
    return (
        <button className="dropdown-icon" aria-haspopup="true" aria-label="More options" title="More options">
            {children}
            <FiChevronDown aria-hidden="true" />
        </button>
    );
}

export {Dropdown}