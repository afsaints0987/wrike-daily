import Button from 'react-bootstrap/Button'
import logo from '../assets/Wrike_logo_2020.png'
import Loading from '../components/Loading'
import { useState } from 'react'

function Login(img) {
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = () => {
        setIsLoading(true)
        
        window.location.replace('http://localhost:3001/login')
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
