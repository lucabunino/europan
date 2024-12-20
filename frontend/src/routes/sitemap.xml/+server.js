// import { getWorks } from '$lib/utils/sanity';
// import { urlFor } from '$lib/utils/image';

// export async function GET() {
//   // Fetch works from the sanity utility
//   const works = await getWorks();

//   // Create XML for individual work pages with their corresponding images
//   const worksSlugsXML = works.map(work => {
//     return `
//       <url>
//         <loc>https://www.lucabunino.com/work/${work.slug.current}</loc>
//         <lastmod>${work.year}</lastmod>
//         <priority>0.80</priority>
//         <image:image>
//           <image:loc>${urlFor(work.thumbnail).url()}</image:loc>
//         </image:image>
//       </url>`;
//   }).join('');

//   // Build the complete sitemap
//   return new Response(
//     `
//     <?xml version="1.0" encoding="UTF-8" ?>
//     <urlset
//       xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
//       xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
//     >
//       <url>
//         <loc>https://www.lucabunino.com/</loc>
//         <lastmod>${new Date().toISOString()}</lastmod>
//         <priority>1.00</priority>
//       </url>
//       <url>
//         <loc>https://www.lucabunino.com/about</loc>
//         <lastmod>${new Date().toISOString()}</lastmod>
//         <priority>0.80</priority>
//       </url>
//       <url>
//         <loc>https://www.lucabunino.com/work</loc>
//         <lastmod>${new Date().toISOString()}</lastmod>
//         <priority>0.80</priority>
//       </url>
//       ${worksSlugsXML}
//     </urlset>`.trim(),
//     {
//       headers: {
//         'Content-Type': 'application/xml'
//       }
//     }
//   );
// }
