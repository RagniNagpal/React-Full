// Importing the main stylesheet for our app
import './App.css'
import Product from './components/Product';
// ----------------------------
// ✅ Component 1: Product (uses props directly)
// ----------------------------
// This component takes 'props' and displays the title inside <h1>
function Product(props) {
  // console.log(props) // (optional) You can uncomment this to check props in console
  return (
    <>
      <h1>{props.title}</h1>
      <h3>Shoes description</h3>
    </>
  )
}

// ----------------------------
// ✅ Component 2: Product1 (uses destructuring)
// ----------------------------
// Here we destructure the props directly in the function parameter
// So instead of props.title, we can directly write {title}
// function Product1({ title, price, description }) {
//   return (
//     <div className="product-card">
//       <h2>{title}</h2>
//       <p>{description}</p>
//       <strong>Price: ₹{price}</strong>
//     </div>
//   );
// }
// ----------------------------
// ✅ Shoe Data Array (Static Data)
// ----------------------------
// This array contains details of each shoe product.
// We'll later use it to display all the products dynamically.
let shoeData = [
  { id:1,title: "Nike Shoes", price: "599", description: "Lightweight running shoes with breathable mesh and soft cushioning." },
  { title: "Adidas Sneakers", price: "749", description: "Stylish everyday sneakers with durable rubber sole and comfort fit." },
  { title: "Puma Sports Shoes", price: "699", description: "Perfect for gym and outdoor activities with superior grip." },
  { title: "Reebok Trainers", price: "849", description: "High-performance trainers built for agility and speed." },
];

// ----------------------------
// ✅ Main Component: App()
// ----------------------------
function App({showData}) {

  // Simple JS logic inside App component
  let a = 5;
  let b = 5;
  let c = a + b;
  console.log("Sum:", c); // Just to show JS logic works inside component

  return (
    <>
      {/* Greeting text */}
      Hello sir

      {/* Using Product component (props version) */}
      {/* <Product title="Nike shoes" price="599" /> */}
      {/* <Product /> */}

      {/* Heading for the product list */}
      <div>
        <h1>All Shoe Products (Manual Rendering)</h1>

        {/* //not allowed */}
        {/* for(let i=0;i<shoeData.length;i++){
          const element=array[i];
        } */}

        {/* ✅ Rendering multiple products manually */}
        {/* Each Product1 represents one shoe item */}
        <Product1
          title={shoeData[0].title}
          price={shoeData[0].price}
          description={shoeData[0].description}
        />

        <Product1
          title={shoeData[1].title}
          price={shoeData[1].price}
          description={shoeData[1].description}
        />

        <Product1
          title={shoeData[2].title}
          price={shoeData[2].price}
          description={shoeData[2].description}
        />

        <Product1
          title={shoeData[3].title}
          price={shoeData[3].price}
          description={shoeData[3].description}
        />
      </div>

      {/* ----------------------------
          ✅ Dynamic rendering using map()
          Recommended approach for real apps.
      ---------------------------- */}
      {shoeData.map((shoe, index) => (
        <Product1
          key={index} // React needs a unique key for each list item
          title={shoe.title}
          price={shoe.price}
          description={shoe.description}
        />
      ))}

    </>
  );
}

 //  return <div>Hello sir</div>
 //  return React.createElement('div',{},"hello sir ji");

// ----------------------------
// ✅ Exporting App Component
// ----------------------------
export default App;



//DummyJson