import React from 'react'

export default function AssideNav(props) {
    return (
        <div className='mt-5 mb-2 mx-7'>
            <span className={props.navClassName}>{props.nav1}</span>
        </div>
    )
}
