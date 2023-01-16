const { http } = require('../config/api')

const getTasks = async (req, res) => {
    const { date } = req.body
    const id = req.cookies.id
    res.send(`Contact ID has been retrieve ${id}`)

    try {
        const response = await http.get(`/tasks?responsibles=[${id}]`, {
            params: {
                status: 'Active',
                scheduledDate: new Date()
            }
        })

        const data = response.data.data

        res.status(200).json({
            message: 'Get Tasks Successful',
            data: data
        })
    } catch (error) {
        if (error.response) {
            // console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

        res.status(400).json({
            message: "Get Tasks Failed"
        })
    }
}

module.exports = {
    getTasks,
}