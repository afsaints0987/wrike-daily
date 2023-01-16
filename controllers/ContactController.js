const http = require('../config/api')

const Contact = async (req, res) => {
    // const accessToken = req.cookies.data.access_token;
    // console.log(req.cookies)
    // if(!accessToken) return res.redirect('/login')
    try {
        const response = await http.get('https://www.wrike.com/api/v4/contacts?me')

        const contact = await response.data.data[0];

        // res.status(200).json({
        //     message: 'Contact retrieve successfully',
        //     data: contact
        // })
        
        res.status(200).json({
            message: "Contact Retrieve Successful",
            data: contact
        })

    } catch(error){
        console.log(error.response.status)
        console.log(error)

        res.status(400).json({
            message: "Unable to retrieve your profile"
        })
    }

}

module.exports = {
    Contact
}