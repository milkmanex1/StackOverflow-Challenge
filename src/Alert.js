import React, {useEffect} from 'react'

const Alert = ({ msg, removeAlert}) => {
    useEffect(() => {
        const timeout = setTimeout(removeAlert, 3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <div className='alert'>
            {msg}
        </div>
    )
}

export default Alert
