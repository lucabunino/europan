export async function GET() {
	return new Response(
		`
		User-agent: *
		Disallow: 
		Disallow: /cgi-bin/
		Sitemap: https://lucabunino.com/sitemap.xml
		`.trim(),
	);
}