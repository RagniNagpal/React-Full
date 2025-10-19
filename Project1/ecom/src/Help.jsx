// // AllCards.jsx
// export default function AllCards({ data }) {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-4 w-full max-w-6xl">
//             {data[0] && (
//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-4">
//                     <img
//                         src={data[0].thumbnail}
//                         alt={data[0].title}
//                         className="w-full h-56 object-cover rounded-xl"
//                     />
//                     <h2 className="text-xl font-semibold mt-3">
//                         {data[0].title}
//                     </h2>
//                     <p className="text-gray-600 text-sm mt-2">
//                         {data[0].description.slice(0, 60)}...
//                     </p>
//                     <div className="flex justify-between items-center mt-3">
//                         <span className="font-bold text-green-600">
//                             ₹{data[0].price}
//                         </span>
//                         <span className="text-yellow-500">
//                             ⭐{data[0].rating}
//                         </span>
//                     </div>
//                 </div>
//             )}

//             {data[1] && (
//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-4">
//                     <img
//                         src={data[1].thumbnail}
//                         alt={data[1].title}
//                         className="w-full h-56 object-cover rounded-xl"
//                     />
//                     <h2 className="text-xl font-semibold mt-3">
//                         {data[1].title}
//                     </h2>
//                     <p className="text-gray-600 text-sm mt-2">
//                         {data[1].description.slice(0, 60)}...
//                     </p>
//                     <div className="flex justify-between items-center mt-3">
//                         <span className="font-bold text-green-600">
//                             ₹{data[1].price}
//                         </span>
//                         <span className="text-yellow-500">
//                             ⭐{data[1].rating}
//                         </span>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }


// // AllCards.jsx
// export default function AllCards({ data }) {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-4 w-full max-w-6xl">
//             {data.map((item) => (
//                 <div
//                     key={item.id}
//                     className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 hover:scale-105 transition-transform"
//                 >
//                     <img
//                         src={item.thumbnail}
//                         alt={item.title}
//                         className="w-full h-56 object-cover rounded-xl"
//                     />
//                     <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
//                     <p className="text-gray-600 text-sm mt-2">
//                         {item.description.slice(0, 60)}...
//                     </p>
//                     <div className="flex justify-between items-center mt-3">
//                         <span className="font-bold text-green-600">
//                             ₹{item.price}
//                         </span>
//                         <span className="text-yellow-500">⭐{item.rating}</span>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }
