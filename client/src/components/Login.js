import Button from 'react-bootstrap/Button'
import logo from '../assets/Wrike_logo_2020.png'
import Loading from '../components/Loading'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'

function Login(img) {
    const [isLoading, setIsLoading] = useState(false)
    const [cookies] = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = () => {
        setIsLoading(true)
        
        window.location.replace('https://wrike-daily-api.vercel.app/login')

        if(cookies.data){
            navigate('/dashboard')
        }
    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="d-flex flex-column justify-content-center" id="login">
            <img src={logo} alt="logo" width="200px" className="mx-auto" />
            <Button variant="success" onClick={handleLogin}>Login to Wrike</Button>
        </div>
    )
}

export default Login
