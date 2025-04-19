import React from 'react'

const UserList = () => {
    const User=[
        {id:1, name:"John Doe", email:"hello@gmail.com", age:25},
        {id:2, name:"Jane Doe", email:"jane@gmail.com", age:30},
        {id:3, name:"Sam Smith", email:"sam@gamil.com", age:28},

    ]
  return (
    <div>
        <h1>Learning About List Rendering on react jsx.</h1>
        <h1>User List</h1>
        {User.map(({id,name,email,age}) => (
            <div key={id}>
                <h2>{name}</h2>
                <p>Email: {email}</p>
                <p>Age: {age}</p>
            </div>
        ))}
    </div>
  )
}

export default UserList