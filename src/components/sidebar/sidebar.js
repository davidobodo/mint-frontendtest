import React from 'react';
import styled from 'styled-components';

import overview from '../../assets/img/overview.svg';

import aPay from '../../assets/img/payments/all.svg';
import recPay from '../../assets/img/payments/rec.svg';
import unRecPay from '../../assets/img/payments/unrec.svg';
import manual from '../../assets/img/payments/manual.svg';

import aOrder from '../../assets/img/orders/all.svg';
import pOrder from '../../assets/img/orders/pending.svg';
import recOrder from '../../assets/img/orders/rec.svg';

import profile from '../../assets/img/profile.svg';


const sidebarLinks = [
    {
        title: 'Main',
        links: [
            { title: 'overview', icon: overview }
        ]
    },
    {
        title: 'Payments',
        links: [
            { title: 'All Payments', icon: aPay },
            { title: 'Reconciled Payments', icon: recPay },
            { title: 'Un - reconciled Payments', icon: unRecPay },
            { title: 'Manual Settlement', icon: manual },
        ]
    },
    {
        title: 'Orders',
        links: [
            { title: 'All Orders', icon: aOrder },
            { title: 'Pending Orders', icon: pOrder },
            { title: 'Reconciled Orders', icon: recOrder },
        ]
    },
    {
        title: null,
        links: [{ title: 'Merchant Profile', icon: profile }]
    }
]



const SidebarContainer = styled.div`
    color: #647787;
    padding-left: ${props => props.theme.leftPadding};
    padding-top: 33px;
    background-color: #ffffff;
    width: 260px;
    min-height: 100vh;
    border-right: 1px solid black;

    .btn-invoice{
        text-transform: uppercase;
        color: #ffffff;
        background-color: #27AE60;
        border-radius: 30px;
        font-size: 12px;
        padding: 10px 30px;
        border: none;
        margin-bottom: 32px;
    }

    section{
        margin-bottom: 32px;

        h5{
            margin-bottom: 15px;
        }

        li{
            display: flex;
            align-items:center;
            font-size: 11px;
            font-weight: 300;
            list-style: none;
            margin-bottom: 15px;

            img{
                width: 19px;
                margin-right: 15px;
            }
        }
    }

`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <button className="btn-invoice">Generate Invoice</button>
            {sidebarLinks.map(category => {
                const { title, links } = category;
                return (
                    <section key={title}>
                        <h5>{title}</h5>
                        <ul>
                            {links.map(link => {
                                const { title, icon } = link
                                return <li key={title}><img src={icon} alt={icon} />{title}</li>
                            })}
                        </ul>
                    </section>
                )
            })}
        </SidebarContainer>

    )
}

export default Sidebar;