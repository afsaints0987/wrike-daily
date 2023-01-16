import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return (
        <div className="spinner">
            <Spinner animation="border" variant="success" role="status" />
        </div>
    )
}

export default Loading
