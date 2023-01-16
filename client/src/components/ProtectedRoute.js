import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [cookies] = useContext(UserContext)


    useEffect(() => {
        if (!cookies.data) {
            setIsLoggedIn(false)
            navigate('/')
        } else {
            setIsLoggedIn(true)
        }
    }, [cookies.data, navigate])

    return (
        <div>
            {isLoggedIn && children}
        </div>
    )
}

export default ProtectedRoute
