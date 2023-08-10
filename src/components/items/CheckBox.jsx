import React from 'react'
import {BsCheck} from 'react-icons/bs'
import cn from 'classnames'

const CheckBox = ({isCompleted}) => {
  return (
    <div
        className={
            cn('w-6 h-6 rounded-md border-2 border-purple-500 flex justify-center items-center mr-3', {
                'bg-purple-500' : isCompleted
            })
        }
    >
        {isCompleted && <BsCheck
            className="text-black-400"/>}
    </div>
  )
}

export default CheckBox