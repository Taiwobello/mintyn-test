import React, { useState } from 'react';
import styles from './SideBar.module.scss';

const sideBar = [
    {
        title: 'Main',
        children: [
            {
                title: 'Overview',
                icon_src: 'overview.svg'
            }
        ]
    },
    {
        title: 'Payments',
        children: [
            {
                title: 'All Payments',
                icon_src: 'all-payment.svg'
            },
            {
                title: 'Reconcilled Payments',
                icon_src: 'reconcile-payment.svg'
            },
            {
                title: 'Un - Reconcilled Payments',
                icon_src: 'un-reconcile-payment.svg'
            },
            {
                title: 'Manual Settlement',
                icon_src: 'manual-settlement.svg'
            }
        ]
    },
    {
        title: 'All Orders',
        children: [
            {
                title: 'All Orders',
                icon_src: 'order.svg'
            },
            {
                title: 'Pending Orders',
                icon_src: 'pending-order.svg'
            },
            {
                title: 'Reconcilled Orders',
                icon_src: 'reconciled-order.svg'
            }
        ]
    },
    {
        title: 'Merchant Profile',
        icon_src: 'single.svg'
    }
];

function SIdeBar() {
    const [active, setActive] = useState('Overview');
    return (
        <nav className={styles.side_bar}>
            <p className={styles.gen_invoice}  >GENERATE INVOICE</p>
            <ul className={styles.side_bar_list}>
                {sideBar.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className="my-4 px-5">
                                {item.icon_src && <img src={`icons/${item.icon_src}`} alt={item.title} className="mr-3" />}
                                <span className={`${styles.nav_title}`}>{item.title}</span>
                            </div>

                            <ul>
                                {item.children &&
                                    item.children.map((child, index) => {
                                        return (
                                            <li
                                                className={`${styles.nav_children} ${active === child.title ? 'active' : ''}`}
                                                key={index}
                                                onClick={() => setActive(child.title)}>
                                                <img src={`icons/${child.icon_src}`} alt={child.title} className="mr-3" />
                                                <span className={styles.nav_title}>{child.title}</span>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
export default SIdeBar;
