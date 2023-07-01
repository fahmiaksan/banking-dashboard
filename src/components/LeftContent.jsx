import React from 'react';
import { bank, cn, donut, edit, prof, search, trash } from '../assets';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    Type,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';


export default function LeftContent() {
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={() => console.info('swipe action triggered')}
            >
                <div className='flex items-center px-4'>
                    <img src={trash} className='w-5 h-5' />
                </div>
            </SwipeAction>
            <SwipeAction
                destructive={true}
                onClick={() => console.info('swipe action triggered')}
            >
                <div className='flex items-center px-4'>
                    <img src={edit} className='w-5 h-5' />
                </div>
            </SwipeAction>
        </TrailingActions>
    );
    return (
        <section className='px-14 flex-1 pt-14'>
            <div className='border border-gray-300 rounded-lg w-full flex items-center py-3 px-3 space-x-3'>
                <img src={search} className='w-4' />
                <input type={"text"} className='w-full ' placeholder='Search' />
            </div>
            <div className='text-2xl text-indigo-700 my-8'>Welcome back Ming!</div>
            <div className='flex space-x-8 w-full'>
                <Card
                    bgColor={"bg-green-500"}
                    color={"text-green-500"}
                    icon={<img src={cn} className='w-8 object-contain h-8 mb-6' />}
                    label={<span>
                        Transfer via
                        <br />
                        card number
                    </span>}
                />
                <Card
                    bgColor={"bg-blue-800"}
                    icon={<img src={donut} className='w-8 object-contain h-8 mb-6' />}
                    color={"text-blue-800"}
                    label={<span>
                        Transfer via
                        <br />
                        card number
                    </span>}
                />
                <Card
                    bgColor={"bg-amber-700"}
                    icon={<img src={prof} className='w-8 object-contain h-8 mb-6' />}
                    color={"text-amber-500"}
                    label={<span >
                        Transfer via
                        <br />
                        card number
                    </span>}
                />
                <Card
                    bgColor={"bg-sky-800"}
                    icon={<img src={bank} className='w-8 object-contain h-8 mb-6 ' />}
                    color={'text-sky-800'}
                    label={<span>
                        Transfer via
                        <br />
                        card number
                    </span>}
                />
            </div>
            <div className='mt-20 drop-shadow-md'>
                {Array.from(Array(4)).map((_, key) => {
                    return (
                        <div className='rounded-2xl bg-indigo-700 mb-8' key={key}>
                            <SwipeableList threshold={0.9} type={Type.IOS} >
                                <SwipeableListItem
                                    trailingActions={trailingActions()}
                                >
                                    <div className='bg-white px-6 pt-3 pb-5 rounded-xl border border-gray-200 w-full flex  items-center'>
                                        <img src={"https://images.pexels.com/photos/17052896/pexels-photo-17052896/free-photo-of-berambut-pirang-wajah-mantel-rambut-panjang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className='w-12 h-12 object-cover rounded-full mr-3' />
                                        <div>
                                            <div className='text-lg'>Push</div>
                                            <div className='text-sm text-gray-500'>1481346194</div>
                                        </div>
                                    </div>
                                </SwipeableListItem>
                            </SwipeableList>
                        </div>
                    )
                })}
            </div>
        </section >
    )
}

function Card(props) {
    return (
        <div className={`${props.bgColor} w-40 px-6 py-7 bg-opacity-10 rounded-xl ${props.color}`}>
            {props.icon}
            {props.label}
        </div>
    )
}

