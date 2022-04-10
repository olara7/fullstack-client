import { Link } from 'react-router-dom';
import { Route, Switch } from "react-router";
import { gql, useQuery } from "@apollo/client";

//styles
import './Navbar.css'

const GET_ME = gql`
    query GetMe {
    me {
        id
        name
    }
}
`

export default function Navbar() {

    const { data, error, loading } = useQuery(GET_ME)

    if(loading) return <div> Loading... </div>

    if(error) return <div> Error </div>

    const { me } = data

    //console.log(data)

    //const { me } = data

    const handleClick = () => {
        //remove token from local storage to log out user
        localStorage.removeItem('token')

        //refresh page
        window.location.reload(false)
    }


    return (
        <div className='navbar'>
            <nav>
                <Link to="/posts" className='brand'>
                    <h1> Blog App </h1>
                </Link>
                
                {me ? <Link to={`/profile/${me.id}`} className='nav-items'>
                    <h6> My Profile </h6>
                </Link>: null }
                {me ? <div onClick={handleClick} className="nav-items"> 
                    <h6> Logout </h6>  
                </div>: null }
                
                {!me ? <Link to="/signin" className='nav-items'>
                    <h6> Sign in</h6>
                </Link>: null}
                {!me ? <Link to="/signup" className='nav-items'>
                    <h6> Sign up</h6>
                </Link>: null}
            </nav>
        </div>
    )
}