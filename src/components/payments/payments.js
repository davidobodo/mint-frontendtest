import React, { useState } from 'react';
import search from '../../assets/img/search.svg';

import { allPayments } from './constants';
import { PaymentsContainer } from './paymentsStyles';

const Payments = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentOption, setCurrentOption] = useState('All')

    const handleShowDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const handleSelectOption = (e) => {
        setCurrentOption(e.target.innerHTML)
    }

    return (
        <PaymentsContainer showDropdown={showDropdown}>
            <h1>Payments</h1>
            <div className='payments-nav'>
                <h3>
                    Showing
                    <span className='payment-numbers'> 20 </span>
                    out of 500 payments
                </h3>
                <div className='search-field'>
                    <img src={search} alt='search' />
                    <input type='text' placeholder='Search payments' />
                </div>
                <h3 className='options-section'>
                    Show
                    <div className='options-section__dropdown' onClick={handleShowDropdown}>
                        {currentOption}
                        <ul className='options-section__dropdown__options' onClick={handleSelectOption}>
                            <li>All</li>
                            <li>Reconciled</li>
                            <li>Un-reconciled</li>
                            <li>Settled</li>
                            <li>Unsettled</li>
                        </ul>
                    </div>

                </h3>
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
                            <td>
                                <div className='status'>
                                    <span className='bullet-point'></span>
                                    {status}
                                </div>
                            </td>
                            <td>
                                <span className='dropdown'></span>
                            </td>
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