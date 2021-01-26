import {findAllByTitle} from '@testing-library/react'
import React from 'react'
import Button from './Button'

 const Item=({title,desc,backgroundImg,leftBtnTxt,leftBtnLink,rightBtnTxt,rightBtnLink,twoButtons,first})=> {
    return (
        <div className="item" style={{

        }}>
            <div className="item_container">
                <div className="item_text">
                    <p>{title}</p>
                    <div className="item_textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item_lowerThird">
                    <div className="item_buttons">
                        <Button imp='primary' text={leftBtnTxt} link={leftBtnLink}/>
                        {twoButtons &&(
                            <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink}/>
                        )}

                    </div>
                </div>
            </div> 

        </div>
    )
}

export default Item
