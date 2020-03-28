import React, { useContext } from 'react';
import { NavContext } from '../contexts/NavContext';

function MobileNav(props) {
    const {open, setOpen} = useContext(NavContext);

    return (
        <div className="mbl-header">
            <p id='logo'
                onClick={() => {
                setOpen(false)
                props.history.push("/");
                }}
            >
                redemption<span style={{fontWeight: 'bold'}}>Calculator</span>
            </p>
            <span class="material-icons"
                onClick={() => setOpen(!open)}
            >
                menu
            </span>
        </div>

    );
}

export default MobileNav;