import { Link } from "react-router-dom"


const NotFound = () => (
    <div className="text-center">
        <h1>404 Page Not Found.</h1>
        <Link className="btn btn-primary" to={"/"}>Home</Link>
    </div>
)


export default NotFound