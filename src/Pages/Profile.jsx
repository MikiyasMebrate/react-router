import {  Outlet, NavLink } from "react-router-dom"

const Profile = ()=>{
    let profiles = [1,2,3,4,5]
    const style = 'd-block'
    return(
        <div>
            <h1>Profile</h1>
            <ul>
            {profiles.map((profile) => (
          <NavLink className={(({isActive}) =>{
            return isActive ? `text-dark ${style}` : `${style}`
          } )} key={profile} to={`/profile/${profile}`}>{profile}</NavLink>
        ))}
            </ul>
            <Outlet />
        </div>
    )
}


export default Profile