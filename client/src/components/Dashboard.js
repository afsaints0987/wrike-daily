import axios from 'axios'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import Tasks from './Tasks'
import { UserContext } from '../context/UserContext';

function Dashboard() {
    const navigate = useNavigate()
    const [contact, setContact] = useState();
    const [cookies, setCookie] = useContext(UserContext)

    const accessToken = cookies.data.accessToken
    
    const handleLogout = () => {
        setCookie('data', '')
        navigate('/')
        axios.get('https://wrike-daily-api.vercel.app/logout')
    }

    useEffect(() => {

        const getContact = async () => {
            const response = await axios.get('https://www.wrike.com/api/v4/contacts?me', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            const contactData = response.data.data[0]

            setContact(contactData)
        }
        getContact()
    }, [accessToken])

    if (!contact) {
        return
    }

    return (
        <div>
            <nav className="navbar nav-expand-lg bg-success px-4">
                <div id="profile">
                    <img src={contact.avatarUrl} alt="avatar" width="50px" className="rounded-5" />
                    <p className="mt-3">{contact.firstName} {contact.lastName}</p>
                </div>
                <button className="btn btn-transparent text-light border-none" onClick={handleLogout}>Logout</button>
            </nav>
            <div className="container mt-4">
                <p style={{ fontWeight: "600" }}>Welcome {contact.firstName}!</p>
                <Tasks accessToken={accessToken} contactId={contact.id} />
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
