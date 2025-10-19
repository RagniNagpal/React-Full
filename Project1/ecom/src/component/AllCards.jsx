// const sampleProducts = [
//   {
//     id: 1,
//     title: "Essence Mascara Lash Princess",
//     description:
//       "Volumizing and lengthening mascara. Long-lasting and cruelty-free.",
//     price: 9.99,
//     thumbnail:
//       "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
//   },
//   {
//     id: 2,
//     title: "Eyeshadow Palette with Mirror",
//     description:
//       "Versatile eyeshadow shades with a built-in mirror — great for travel.",
//     price: 19.99,
//     thumbnail:
//       "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
//   },
//   {
//     id: 6,
//     title: "Calvin Klein CK One",
//     description: "Classic unisex fragrance, fresh and clean.",
//     price: 49.99,
//     thumbnail:
//       "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
//   },
// ];

// function AllCards() {
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>All Cards (Without map)</h1>

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//           justifyContent: "center",
//         }}
//       >
//         <div style={{ backgroundColor: "green", width: "250px", color: "white", borderRadius: "10px", padding: "10px" }}>
//           <img src={sampleProducts[0].thumbnail} alt={sampleProducts[0].title} style={{ width: "100%", borderRadius: "10px" }} />
//           <h2>{sampleProducts[0].title}</h2>
//           <p>${sampleProducts[0].price}</p>
//           <p>{sampleProducts[0].description}</p>
//         </div>

//         <div style={{ backgroundColor: "green", width: "250px", color: "white", borderRadius: "10px", padding: "10px" }}>
//           <img src={sampleProducts[1].thumbnail} alt={sampleProducts[1].title} style={{ width: "100%", borderRadius: "10px" }} />
//           <h2>{sampleProducts[1].title}</h2>
//           <p>${sampleProducts[1].price}</p>
//           <p>{sampleProducts[1].description}</p>
//         </div>

//         <div style={{ backgroundColor: "green", width: "250px", color: "white", borderRadius: "10px", padding: "10px" }}>
//           <img src={sampleProducts[2].thumbnail} alt={sampleProducts[2].title} style={{ width: "100%", borderRadius: "10px" }} />
//           <h2>{sampleProducts[2].title}</h2>
//           <p>${sampleProducts[2].price}</p>
//           <p>{sampleProducts[2].description}</p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AllCards;


//with map

// const sampleProducts = [
//   {
//     id: 1,
//     title: "Essence Mascara Lash Princess",
//     description:
//       "Volumizing and lengthening mascara. Long-lasting and cruelty-free.",
//     price: 9.99,
//     thumbnail:
//       "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
//   },
//   {
//     id: 2,
//     title: "Eyeshadow Palette with Mirror",
//     description:
//       "Versatile eyeshadow shades with a built-in mirror — great for travel.",
//     price: 19.99,
//     thumbnail:
//       "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
//   },
//   {
//     id: 6,
//     title: "Calvin Klein CK One",
//     description: "Classic unisex fragrance, fresh and clean.",
//     price: 49.99,
//     thumbnail:
//       "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
//   },
// ];

// function AllCards() {
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>All Cards (With map)</h1>

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//           justifyContent: "center",
//         }}
//       >
//         {sampleProducts.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               backgroundColor: "green",
//               width: "250px",
//               color: "white",
//               borderRadius: "10px",
//               padding: "10px",
//             }}
//           >
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               style={{ width: "100%", borderRadius: "10px" }}
//             />
//             <h2>{product.title}</h2>
//             <p>${product.price}</p>
//             <p>{product.description}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default AllCards;

function AllCards({ data }) {
    return (
        <div className="mt-10 flex flex-wrap justify-around w-[80%] gap-10 mb-10">
            {data.map((singleItem) => (
                <div
                    key={singleItem.id}
                    className="bg-red-400 w-[25%] max-h-[500px] p-4 rounded-xl shadow-xl"
                >
                    <img
                        src={singleItem.thumbnail}
                        className="aspect-square w-[100%] object-cover h-[70%] rounded-xl shadow-xl"
                    />
                    <div className="flex items-center justify-between">
                        <h2 className="text-left my-5 text-xl line-clamp-1">
                            {" "}
                            {singleItem.title}
                        </h2>
                        <p className="text-4xl">${singleItem.price}</p>
                    </div>

                    <p className="text-left line-clamp-1 lg:line-clamp-2">{singleItem.description}</p>
                </div>
            ))}
        </div>
    );
}

export default AllCards;