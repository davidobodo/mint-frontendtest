import React from 'react';
import styled from 'styled-components';
import smallChart from '../../assets/img/smallChart.svg';

import { BodyContainer } from './bodyStyles';

import Payments from '../payments/payments';
import Pagination from '../pagination/pagination';

import gradient from '../../assets/img/gradient.svg';

const transactions = [
    {
        title: 'Daily Transaction Volume',
        amount: '2,342',
        chart: smallChart,
    },
    {
        title: 'Daily Transaction Value',
        amount: '#4,000,000',
        chart: smallChart,
    },
    {
        title: 'Total Transaction Volume',
        amount: '452,000',
        chart: smallChart,
    },
    {
        title: 'Total Transaction Value',
        amount: '#4,000,000',
        chart: smallChart,
    }
]

const ordersAndPayments = [
    {
        title: 'Orders',
        first: ['Pending Orders', 20],
        second: ['Reconciled Orders', 80],
        third: ['Total Orders', 100],
    },
    {
        title: 'Payments',
        first: ['Un - reconciled Payments', 20],
        second: ['Reconciled Payments', 80],
        third: ['Total Payments', 100],
    }
]

const Body = () => {

    const renderProgressBar = (progress) => {
        const done = Math.floor(progress / 20);
        [1, 2, 3, 4, 5].map(i => {
            return done >= i ? <span className='green'></span> : <span className='yellow'></span>
        })
    }

    return (
        <BodyContainer>
            <section className='transaction-summary'>
                {transactions.map(o => {
                    const { title, amount, chart } = o;
                    return (
                        <div className='transaction' key={title}>
                            <div className='transaction__details'>
                                <h4>{title}</h4>
                                <h2>{amount}</h2>
                            </div>
                            <div className='transaction__chart'>
                                <img src={chart} alt={chart} />
                            </div>
                        </div>
                    )
                })}
            </section>

            <section className='todays-transaction'>
                <div className='todays-transaction__graph'>
                    <div className='header'>
                        <h2>Today: 5, Aug 2018</h2>
                        <div className='date-range'>1 Jan - 1 Jun</div>
                        <div className='directions'>
                            <div className='directions__wrapper'>
                                <span className='left-direction'></span>
                            </div>
                            <div className='directions__wrapper'>
                                <span className='right-direction'></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='month-wrapper'>
                            <div className='month'>Jan</div>
                            <div className='month'>Feb</div>
                            <div className='month'>Mar</div>
                            <div className='month'>Apr</div>
                            <div className='month'>May</div>
                            <div className='month'>Jun</div>
                        </div>
                        <img className='gradient-img' src={gradient} alt={gradient} />
                    </div>
                </div>
                <div className='todays-transaction__details'>
                    {ordersAndPayments.map(section => {
                        const { title, first, second, third } = section;
                        return (
                            <div className='top'>
                                <h3 className='title'>{title}</h3>
                                <div className='progress-bar'>
                                    {[1, 2, 3, 4, 5].map(i => {
                                        return Math.floor(second[1] / 20) >= i ? <span className='green'></span> : <span className='yellow'></span>
                                    })}
                                </div>
                                <h3>{first[0]}: <span className='yellow'>{first[1]}</span></h3>
                                <h3>{second[0]}: <span className='green'>{second[1]}</span></h3>
                                <h3>{third[0]}: <span className='blue'>{third[1]}</span></h3>
                            </div>
                        )
                    })}
                </div>
            </section>

            <Payments />
            <Pagination />

        </BodyContainer>
    )
}

export default Body;