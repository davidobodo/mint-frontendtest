import React from 'react';
import styled from 'styled-components';
import smallChart from '../../assets/img/smallChart.svg';

import { BodyContainer } from './bodyStyles';

import Payments from '../payments/payments';
import Pagination from '../pagination/pagination';

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

const Body = () => {
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
                        <div>1 Jan - 1 Jun</div>
                        <div>arrow section</div>
                    </div>
                </div>
                <div className='todays-transaction__details'>
                    <div className='top'>Hello</div>
                    <div className='bottom'>World</div>
                </div>
            </section>

            <Payments />
            <Pagination />

        </BodyContainer>
    )
}

export default Body;