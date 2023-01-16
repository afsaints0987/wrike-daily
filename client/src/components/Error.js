import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const [cookies] = useContext(UserContext)
    const navigate = useNavigate()
    const handleError = () => {
        if (!cookies.data) {
            navigate('/')
        } else {
            navigate('/dashboard')
        }
    }

    return (
        <div className="container" id="error_page">
            <h3>Seems the page you're looking for is not existing</h3>
            <button className="btn btn-transparent" onClick={handleError}>Go back &rarr;</button>
        </div>
    )
}

export default Error
