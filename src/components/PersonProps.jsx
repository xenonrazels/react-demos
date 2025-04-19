
const PersonProps = (props) => {
  return (
    <div>PersonProps
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <p>{props.email}</p>
    </div>
  )
}

export default PersonProps;