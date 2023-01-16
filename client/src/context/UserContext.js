import {createContext} from 'react'
import {useCookies} from 'react-cookie'

export const UserContext = createContext()

export const UserAuthProvider = ({children}) => {
    const [cookies, setCookie] = useCookies(['data'])
    
    return (
        <UserContext.Provider value={[cookies, setCookie]}>
            {children}
        </UserContext.Provider>
    )
}