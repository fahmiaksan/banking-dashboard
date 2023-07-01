import React from 'react'
import { calculator, group, home, logo, payment, settings } from '../assets'

export default function Sidebar() {
    const menus = [
        {
            name: "Home",
            icon: home
        },
        {
            name: "Account",
            icon: group
        },
        {
            name: "Cards",
            icon: payment
        }, {
            name: "Contact",
            icon: group
        }, {
            name: "Loan Calculator",
            icon: calculator
        }, {
            name: "Settings",
            icon: settings
        }
    ];

    const scheduledPayments = ["Monthly Rent", "Food Payment", "Utility Bills"];

    return (
        <>
            <div className='h-[990px]] w-60 bg-white border-r border-gray-200 px-9 py-12'>
                <div className='flex gap-1 items-center pb-20'>
                    <img src={logo} className='w-9 h-9' />
                    <div className=''>Olith Banking</div>
                </div>
                <div className='text-blue-700'>Menu</div>
                {menus.map((val, key) => {
                    return (
                        <li className='flex mb-7 flex-row mt-4' key={key}>
                            <img src={val.icon} className='w-5 mr-4 object-contain' />
                            <div>{val.name}</div>
                        </li>
                    )
                })
                }
                <div className='space-y-9'>
                    <div className='pt-20' style={{ color: "#3629B7" }}>Scheduled Payments</div>
                    <div className='space-y-6'>
                        {scheduledPayments.map((val, key) => {
                            return (
                                <div className='flex gap-4 flex-row'>
                                    <div className='border border-blue-700 rounded-full w-7 h-7'></div>
                                    <div>{val}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
