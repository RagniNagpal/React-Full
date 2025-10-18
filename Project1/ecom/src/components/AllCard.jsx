const sampleProducts = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "Volumizing and lengthening mascara. Long-lasting and cruelty-free.",
    price: 9.99,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description:
      "Versatile eyeshadow shades with a built-in mirror — great for travel.",
    price: 19.99,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    description: "Classic unisex fragrance, fresh and clean.",
    price: 49.99,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
  },
];

function AllCards({products = sampleProducts}){
  return (
    <>
      <h1>All Cards</h1>
      <div style={{display:"flex" , flexWrap:"wrap"}}>
      <div style={{backgroundColor:"green", width:"400px"}}>
        <img src="" alt="" />
        <h2>Name</h2>
        <p>500</p>
        <p>description</p>
      </div>
      <div style={{backgroundColor:"green", width:"400px"}}>
        <img src="" alt="" />
        <h2>Name</h2>
        <p>500</p>
        <p>description</p>
      </div>
      <div style={{backgroundColor:"green", width:"400px"}}>
        <img src="" alt="" />
        <h2>Name</h2>
        <p>500</p>
        <p>description</p>
      </div>
      <div style={{backgroundColor:"green", width:"400px"}}>
        <img src="" alt="" />
        <h2>Name</h2>
        <p>500</p>
        <p>description</p>
      </div>
      <div style={{backgroundColor:"green", width:"400px"}}>
        <img src="" alt="" />
        <h2>Name</h2>
        <p>500</p>
        <p>description</p>
      </div>
      </div>
    </>
  )
}

export default AllCards;
