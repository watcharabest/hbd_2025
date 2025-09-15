export default function AboutPage() {
    return (
      <main>
        <h1>About This Project</h1>
        <p>This is a special birthday project!</p>
      </main>
    );
}
// // 1. Define the types for your API response.
// // You only need to define the properties you actually use.
// type Article = {
//     uuid: string;
//     title: string;
//     description: string;
//     image_url: string;
//     url: string;
//     source: string;
//   };
  
//   type StockApiResponse = {
//     meta: {
//       found: number;
//       returned: number;
//       limit: number;
//       page: number;
//     };
//     data: Article[]; // The 'data' property is an array of 'Article' types
//   };
  
  
//   // This is the component for the /about route
//   export default async function AboutPage() {
//       const stockResponse = await fetch("http://localhost:3000/api/stock");
  
//       // 2. Tell TypeScript what type of data to expect from .json()
//       const stockData = await stockResponse.json() as StockApiResponse;
  
//       return (
//         <main className="p-8">
//           <h1 className="text-4xl font-bold mb-6">Stock Market News</h1>
//           <div className="flex flex-col gap-8">
            
//             {/* 3. Now, TypeScript knows 'article' is of type 'Article'! */}
//             {stockData.data.map((article) => (
//               <div key={article.uuid} className="border rounded-lg p-4 shadow-md">
//                 <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
//                 <img 
//                   src={article.image_url} 
//                   alt={article.title}
//                   className="w-full h-64 object-cover rounded-md mb-4"
//                 />
//                 <p className="text-gray-700">{article.description}</p>
//                 <a 
//                   href={article.url} 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline mt-4 inline-block"
//                 >
//                   Read more on {article.source}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </main>
//       );
//   }