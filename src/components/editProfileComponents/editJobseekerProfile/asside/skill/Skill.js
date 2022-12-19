import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { TbPencil } from 'react-icons/tb';


export default function Skill(props) {

    

    return (
        <div className='grid grid-cols-3 gap-2 mx-7 mb-3'>
            {props.list.map((list, index) =>
                <div className='skillListClassName' key={index}>
                    <span>
                        {list}
                    </span>
                    <div className='flex'>
                        <TbPencil />
                        <FiTrash2 className="" />
                    </div>
                </div>
            )}
        </div>
    )
}
