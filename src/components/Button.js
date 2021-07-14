import React from 'react'

const Button = ({status}) => {
    return (
        <button className={'wLgButton '+ status}>
            {status}
        </button>
    )
}

export default Button
