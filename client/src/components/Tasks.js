import { useState, useEffect } from 'react'
import axios from 'axios'

const Tasks = ({ accessToken, contactId }) => {
    const [tasks, setTasks] = useState()

    const date = new Intl.DateTimeFormat("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(Date.now())

    useEffect(() => {
        const getTasks = async () => {
            if (accessToken) {

                const response = await axios.get(`https://www.wrike.com/api/v4/tasks?responsibles=['${contactId}']&scheduledDate=${date}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })

                const taskData = response.data.data[0]
                setTasks(taskData)
            }
        }
        getTasks();
    }, [contactId, accessToken, date])

    return (
        <>
            {!tasks ? <h4>No New Task Available</h4> : <div className="card px-4 py-2 shadow-sm">
                <h4>{tasks.title}</h4>
                <a href={tasks.permalink} rel="noopener noreferrer" target="_blank">See full details &rarr;</a>
            </div>}
        </>
    )
}

export default Tasks
