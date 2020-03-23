import React from 'react';
import styled from 'styled-components';
import search from '../../assets/img/search.svg';
import bell from '../../assets/img/bell.svg';

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${props => props.theme.leftPadding};
    padding-right: ${props => props.theme.rightPadding};
    border-bottom: 1px solid black;
    height: 50px;
    background-color: #ffffff;

    .left-column{
        display: flex;
        align-items: center;

        .brand{
            color: #1875F0;
            margin-right: 130px;
        }

        .search-field{
            display: flex;
            align-items: center;

            img{
                margin-right: 15px;
            }

            input{
                border: none;
                font-size: 12px;
                outline: none;

                ::placeholder{
                    color: #979797;
                }
            }
        }
    }

    .right-column{
        display:flex;
        align-items: center;
        list-style: none;
        font-size: 14px;
        color: #647787;

        li{
            margin-right: 50px;
            position: relative;

            .notifications{
                background-color: #1860EC;
                border-radius: 50%;
                color: #ffffff;
                position: absolute;
                right: -5px;
                top: -7px;
                width: 15px;
                height: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 10px;
            }
        }

        .user{
            display: flex;

            &__name{
                margin-right: 15px;

                h6{
                    text-align: right;
                }

            }

            &__picture{

                img{
                    width: 30px;
                    height: 30px;
                    object-fit: cover;
                    border-radius: 50%;
                    border: 1px solid #07f288;
                }

            }
        }
    }
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <div className='left-column'>
                <h1 className='brand'>TransMonitor</h1>
                <div className='search-field'>
                    <img src={search} alt='search' />
                    <input type='text' placeholder='Search...' />
                </div>
            </div>
            <ul className='right-column'>
                <li>Support</li>
                <li>FAQ</li>
                <li>
                    <img src={bell} alt='search' />
                    <span className='notifications'>8</span>
                </li>
                <li className='user'>
                    <div className='user__name'>
                        <h6>Hello</h6>
                        <h4>Oluwaleke Ojo</h4>
                    </div>
                    <div className='user__picture'>
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img" />
                    </div>
                </li>
            </ul>
        </NavbarContainer>
    )
}

export default Navbar;