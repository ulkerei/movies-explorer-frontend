import React from 'react'
import Popcorn from '../../Popcorn/Popcorn';
import './Preloader.css'

const Preloader = (props) => {
    return (
        <div className={props.isLoading ? 'preloader' : 'preloader preloader_hidden'}>
            <Popcorn />
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
