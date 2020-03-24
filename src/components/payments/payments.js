import React from 'react';
import styled from 'styled-components';
import search from '../../assets/img/search.svg';

import { allPayments } from './constants';

const PaymentsContainer = styled.div`
    margin-bottom: 50px;
    
    h1{
        font-size: 36px;
        font-weight: 400;
        color: #262626;
        margin-bottom: 22px;
    }

    .payments-nav{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;

        h3{
            font-size: 13px;
            color: #262626;
            flex: 1;
        }

        .search-field{
            flex: 1;
            display: flex;
            align-items: center;
            border-bottom: 0.5px solid #787878;

            img{
                margin-right: 15px;
            }

            input{
                border: none;
                font-size: 12px;
                outline: none;
                background-color: transparent;

                ::placeholder{
                    color: #979797;
                }
            }
        }
    }

    table{
        width: 100%;
        border-spacing: 0;

        .table-heading{
            background-color: #EAEEF0;
            color: #7F8FA4;

            th{
                font-size: 14px;
                font-weight: 300;
                text-align: left;
                padding-top: 10px;
                padding-bottom: 10px;

                &:first-child{
                    padding-left: 26px;
                }
            }
        }

        .table-row{
            background-color: #ffffff;

            td{
                padding-top: 15px;
                padding-bottom: 15px;
                color: #7F8FA4;

                &:first-child{
                    color: #414042;
                    padding-left: 26px;
                }
            }

            .acronym{
                color: #ffffff;
                background-color: #7F8FA4;
                border-radius: 50%;
                height: 36px;
                width: 36px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                margin-right: 26px;
            }
        }

        .border-bottom{
            height: 1px;

            td{
                background-color: #CCCFD4;
            }
        }
    }
`;



const Payments = () => {
    return (
        <PaymentsContainer>
            <h1>Payments</h1>
            <div className='payments-nav'>
                <h3>Showing 20 out of 500 employees</h3>
                <div className='search-field'>
                    <img src={search} alt='search' />
                    <input type='text' placeholder='Search payments' />
                </div>
                <h3>Show alllll</h3>
            </div>
            <table>
                <tr className='table-heading'>
                    <th>Item Type</th>
                    <th>Price</th>
                    <th>Transaction No</th>
                    <th>Time</th>
                    <th></th>
                    <th></th>
                </tr>
                {allPayments.map(payment => {
                    const { itemType, price, transNo, time, status } = payment;
                    return (<>
                        <tr className='table-row'>
                            <td><span className='acronym'>VW</span>{itemType}</td>
                            <td>{price}</td>
                            <td>{transNo}</td>
                            <td>{time}</td>
                            <td>{status}</td>
                            <td></td>
                        </tr>
                        <tr className='border-bottom'>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </>
                    )
                })}
            </table>
        </PaymentsContainer>
    )
}

export default Payments;