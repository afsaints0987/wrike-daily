const axios = require('axios')
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const redirectUri = 'https://wrike-daily.vercel.app/api/callback';

const Login = (req, res) => {
    const authorizationUrl = `https://login.wrike.com/oauth2/authorize/v4?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;
    res.redirect(authorizationUrl)
}

const Callback = async (req, res) => {

    const { code } = req.query

    try {
        const response = await axios.post('https://login.wrike.com/oauth2/token', {}, {
            params: {
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: 'authorization_code',
                code,
                redirect_uri: redirectUri
            }
        })

        const data = response.data
        const accessToken = response.data.access_token
        const expires_in = response.data.expires_in
        const refreshToken = response.data.refresh_token


        res.cookie('data', {
            isLoggedIn: true,
            accessToken,
            expires_in,
            refreshToken
        })

        res.redirect('https://wrike-daily.vercel.app/dashboard')

    } catch (error) {
        console.log(error)

        res.status(400).json({
            message: 'Authorization failed'
        })
    }
}

const Refresh = async (req, res) => {
    try {
        const response = await axios.post('http://login.wrike.com/oauth2/token', {}, {
            params: {
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: refresh_token,
                redirect_uri: redirectUri
            }
        })

        const accessToken = response.data.access_token
        const expires_in = response.data.expires_in
        res.json({
            access_token,
            expires_in
        })
    } catch (error) {
        console.log(error)

        res.status(400).json({
            message: 'Refresh token failed'
        })
    }
}

const Logout = async (req, res) => {
    res.clearCookie()
    res.redirect('https://wrike-daily.vercel.app/')
}

module.exports = {
    Login,
    Refresh,
    Callback,
    Logout
}