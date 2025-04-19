import JSXRules from "./JSXRules.jsx";
import Greetings from "./Greetings.jsx";
import ProductInfo from "./ProductInfo.jsx";
import ProductList from "./ProductList.jsx";
import UserList from "./UserList.jsx";
import PersonProps from "./PersonProps.jsx";
import ProductProps from "./ProductsProps.jsx";
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
   </main>
  )
}

export default MainComponent;