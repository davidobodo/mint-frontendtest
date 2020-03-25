import React from 'react';

import overview from '../../assets/img/overview.svg';

import aPay from '../../assets/img/payments/all.svg';
import recPay from '../../assets/img/payments/rec.svg';
import unRecPay from '../../assets/img/payments/unrec.svg';
import manual from '../../assets/img/payments/manual.svg';

import aOrder from '../../assets/img/orders/all.svg';
import pOrder from '../../assets/img/orders/pending.svg';
import recOrder from '../../assets/img/orders/rec.svg';

import profile from '../../assets/img/profile.svg';

import { SidebarContainer } from './sidebarStyles';


const sidebarLinks = [
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




const Sidebar = () => {
    return (
        <SidebarContainer>
            <button className="btn-invoice">Generate Invoice</button>
            <section >
                <h5>Main</h5>
                <ul>
                    <li className='active-link'><img src={overview} alt={overview} />Overview</li>
                </ul>
            </section>
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