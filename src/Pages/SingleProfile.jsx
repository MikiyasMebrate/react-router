import { useParams, } from "react-router"

const SingleProfile = () => {
    const params = useParams()
    return(
        <div>
       <div>
       <h1>User: {params.profileID}</h1>
       </div>
        </div>
        
    )
}

export default SingleProfile