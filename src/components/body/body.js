import React from 'react';
import styled from 'styled-components';
import smallChart from '../../assets/img/smallChart.svg';

const BodyContainer = styled.div`
    padding-top: 30px;
    padding-left: 30px;
    padding-right: ${props => props.theme.rightPadding};
    flex: 1;

    .transaction-summary{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 35px;

        .transaction{
            background-color: #ffffff;
            border: 1px solid #EEF8FD;
            border-radius: 2px;
            display: flex;
            padding: 20px;

            &__details{
                margin-right: 20px;

                h4{
                    color: #787C90;
                    line-height: 16px;
                }

                h2{
                    color: #262626;
                    line-height: 24px;
                }
            }
        }
    }
`;

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


        </BodyContainer>
    )
}

export default Body;