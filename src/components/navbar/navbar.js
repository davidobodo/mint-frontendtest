import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: ${props => props.theme.leftPadding};
    padding-right: ${props => props.theme.rightPadding};

    .right-column{
        display:flex;
        list-style: none;
    }
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <div className='left-column'>
                <h1 className='brand'>TransMonitor</h1>
                <div className='search-field'>

                </div>
            </div>
            <ul className='right-column'>
                <li>Support</li>
                <li>FAQ</li>
                <li>bell</li>
                <li>picture</li>
            </ul>
        </NavbarContainer>
    )
}

export default Navbar;