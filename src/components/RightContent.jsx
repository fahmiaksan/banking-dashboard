import React from 'react';
import { ic1, ic2, ic3, ic4, ic5, notif, user_ic, visa } from '../assets';

export default function RightContent() {
    const transactionList = [
        { name: "WIncome: Salary Oct", success: false, icon: ic5, price: "- $480", color: false, bg: `bg-red-500` },
        { name: "Electric Bill", success: true, icon: ic2, price: "+S1200", bg: `bg-blue-600`, color: true },
        { name: "Income : Jane transfers", bg: `bg-yellow-500`, success: false, icon: ic3, price: "+ $500", color: true },
        { name: "Internet Bill", success: true, icon: ic4, bg: `bg-emerald-500`, price: "- $100", color: false },
    ]
    return (
        <>
            <div className='pt-12 flex justify-end space-x-9 items-center'>
                <img src={notif} className='w-5 h-5 ' />
                <img src={user_ic} className='w-5 h-5' />
                <img src='https://images.pexels.com/photos/15529124/pexels-photo-15529124/free-photo-of-hitam-dan-putih-mode-pria-model.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-9 h-9 rounded-full object-cover' />
            </div>
            <div>
                <div className='card mt-12'>
                    <div className='relative p-5 text-white'>
                        <div className='text-2xl'>John Smith</div>
                        <div className='mt-8'>
                            <div className='mb-2'>Amazon Platinium</div>
                            <div className='mb-1 gap-2'>4756 <span className='text-xl'>... ... ... </span> 9018</div>
                            <div className='flex justify-between'>
                                <div className='text-xl'>$3.469.52</div>
                                <img src={visa} className='w-11 h-11 object-contain' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="py-3 w-full text-center mt-11 border-2 rounded-lg border-dashed border-spacing-5" style={{ borderColor: "#A8A3D7", color: "#A8A3D7", }}>
                Add New Card
            </button>

            <div>
                <div className='mt-11'>Today</div>
                <div className='flex flex-row space-x-3 w-full items-center py-3 border-b border-gray-300'>
                    <div className='p-5 rounded-2xl' style={{ background: "#3629B7" }}>
                        <img src={ic1} className='w-5 h-5 object-contain' />
                    </div>
                    <div className='flex justify-between flex-col w-full'>
                        <div className='flex justify-between'>
                            <div>Water Bill</div>
                            <div className='text-red-500'>-$280</div>
                        </div>
                        <div className='text-base text-gray-500'>Unsuccessfully</div>
                    </div>

                </div>
                <div className='mt-11'>Yesterday</div>
                {transactionList.map((val, key) => {
                    return (
                        <div key={key}>
                            <div className="flex flex-row space-x-3 w-full items-center py-3 border-b border-gray-300" >
                                <div className={`p-5 rounded-2xl ${val.bg}`} >
                                    <img src={val.icon} className='w-5 h-5 object-contain' />
                                </div>
                                <div className='flex justify-between flex-col w-full'>
                                    <div className='flex justify-between'>
                                        <div>{val.name}</div>
                                        <div className={`${val.color === true ? "text-blue-800" : "text-red-500"}`}>{val.price}</div>
                                    </div>
                                    <div className='text-base text-gray-500'>{val.success === false ? "Unsuccessfully" : "Successfully"}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
