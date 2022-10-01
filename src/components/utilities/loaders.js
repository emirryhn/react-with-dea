import { Spinner } from "react-bootstrap"

const Loader = () => {
    return (
        <div>
            <Spinner animation="border" role="status" variant="primary"></Spinner>
        </div>
    )
}

export default Loader;