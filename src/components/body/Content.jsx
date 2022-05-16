import React from 'react'
import styles from './Content.module.scss'

const statsData = [
    {
        title: 'Daily Transaction Volume',
        value: '2,342',
    },
    {
        title: 'Daily Transaction Volume',
        value: '$2,342',
    },
    {
        title: 'Total Transaction Volume',
        value: '454,000',
    },
    {
        title: 'Total Transaction Volume',
        value: '$400,000',
    },
]

function Body() {
    return (
        <div className={styles.content}>
            <div className={`${styles.stats_container}`}>
                {
                    statsData.map((data, index) => {
                        return (
                            <div key={index} className={`${styles.stats} flex`}>
                                <div className='mr-3'>
                                    <p className='text-small'>{data.title}</p>
                                    <p className='text-medium'>{data.value}</p>
                                </div>
                                <img src='./icons/small-chart.svg' />
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.full_stats}>
                <div className='flex'>
                    <div className={styles.stats_data}>
                        <div className='flex'>
                            <p className='text-medium'>Today: 5, Aug 2018</p>
                            <div className={styles.navigation_btn}>
                                <img src='./icons/left-button.svg' alt='left arrow' className='mr-1' />
                                <img src='./icons/right-button.svg' alt='right arrow' />
                            </div>
                        </div>
                        <img className={styles.full_stats_img} src='./icons/full-stat.svg' />
                    </div>
                    <div>
                        <ul className='px-5'>
                            <li className={`${styles.stats_detail} mb-5`}>
                                <p className="text-medium bold mb-2">Orders</p>
                                <img src='./icons/stats-line.svg' />
                                <p className='text-medium  mb-2'>Pending Orders: <span style={{ color: "#FDC203" }} className='bold'>20</span></p>
                                <p className='text-medium mb-2'>Reconcilled Orders: <span style={{ color: "#27AE60" }} className='bold'>80</span></p>
                                <p className='text-medium mb-2'>Total Orders: <span style={{ color: "#1875F0" }} className='bold'>100</span></p>
                            </li>
                            <li className={styles.stats_detail}>
                                <p className="text-medium bold mb-2">Payments</p>
                                <img src='./icons/stats-line.svg' />
                                <p className='text-medium  mb-2'>Pending Payments: <span style={{ color: "#FDC203" }} className='bold'>20</span></p>
                                <p className='text-medium mb-2'>Reconcilled Payments: <span style={{ color: "#27AE60" }} className='bold'>80</span></p>
                                <p className='text-medium mb-2'>Total Payments: <span style={{ color: "#1875F0" }} className='bold'>100</span></p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body


function Stats() {
    return (
        <div>Stats</div>
    )
}
