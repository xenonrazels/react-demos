import JSXRules from "./JSXRules.jsx";
import Greetings from "./Greetings.jsx";
import ProductInfo from "./ProductInfo.jsx";
import ProductList from "./ProductList.jsx";
import UserList from "./UserList.jsx";
import PersonProps from "./PersonProps.jsx";
import ProductProps from "./ProductsProps.jsx";
import Weather from "./Weather.jsx";
import UserStatus from "./UserStatus.jsx";
import GreetRendering from "./GreetRendering.jsx";
const MainComponent = () => {
  return (
   <main>
    <h1>Main Context</h1>
    <JSXRules></JSXRules>
    <Greetings></Greetings>
    <ProductInfo></ProductInfo>
    <ProductList></ProductList>
    <UserList></UserList>
    <div>
    <h1><b>Learning About how to use Props inside React</b></h1>
    <PersonProps name="John Doe" age={25} email="john@gmail.com" />
    <ProductProps name="Laptop" price={999.99} description="A high-performance laptop for all your computing needs." inStock={true} />

    </div>
    <div>
      It's Time for conditional rendering in react.
      <h1>Conditional Rendering</h1>
      <h2>Weather Temperature at 25</h2>
      <Weather temperature={25} />
      <h2>Weather temperature at 15</h2>
      <Weather temperature={15} />
      <h2>Checking UserStaus and Returing greeting the User or Admin</h2>
      <h3>User Status isadmin True</h3>
      <UserStatus isLoggedIn={true} isAdmin={true} />
      <p>User Status isadmin False</p>
      <UserStatus isLoggedIn={true} isAdmin={false} />
      <h2>Checking GreetRendering at various time </h2>
      <h3>Morning</h3>
      <GreetRendering time="Morning" />
      <h3>Afternoon</h3>
      <GreetRendering time="Afternoon" />
      <h3>Evening</h3>
      <GreetRendering time="Evening" />
    </div>
   </main>
  )
}

export default MainComponent;