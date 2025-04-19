import React from 'react'

const UserStatus = (props) => {
  return (
    <div>
        <h1>UserStatus</h1>
        { props.isLoggedIn && props.isAdmin && <h1>Welcome Admin</h1>}
        {props.isLoggedIn && !props.isAdmin &&<h1>Welcome User</h1>}
    </div>
  )
}

export default UserStatus