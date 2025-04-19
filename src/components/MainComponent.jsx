import JSXRules from "./JSXRules.jsx";
import Greetings from "./Greetings.jsx";
import ProductInfo from "./ProductInfo.jsx";
import ProductList from "./ProductList.jsx";
import UserList from "./UserList.jsx";
const MainComponent = () => {
  return (
   <main>
    <h1>Main Context</h1>
    <JSXRules></JSXRules>
    <Greetings></Greetings>
    <ProductInfo></ProductInfo>
    <ProductList></ProductList>
    <UserList></UserList>
   </main>
  )
}

export default MainComponent;