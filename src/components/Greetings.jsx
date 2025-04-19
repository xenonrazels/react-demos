

const Greetings = () => {
let greeting = "Hello, World!";
const date = new Date();
  return (
    <div>
        <h1>Hey from {greeting}</h1>
        <p>{date.getDate()}</p>
    </div>
  )
}

export default Greetings;