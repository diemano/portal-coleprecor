const https = require('https');
const fs = require('fs');

const options = {
    hostname: 'www.justicanossotrabalho.com.br',
    path: '/category/noticias/',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
};

https.get(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const articles = [];
        const articleRegex = /<article.*?>(.*?)<\/article>/gs;
        let match;

        while ((match = articleRegex.exec(data)) !== null) {
            const content = match[1];

            const titleMatch = content.match(/<h\d.*?class="entry-title".*?><a.*?>(.*?)<\/a>/);
            const title = titleMatch ? titleMatch[1].trim().replace(/&#(?:x([\da-f]+)|(\d+));/ig, (m, h, d) => String.fromCharCode(h ? parseInt(h, 16) : parseInt(d, 10))) : "";

            const imgMatch = content.match(/<img.*?src="(.*?)".*?>/);
            let image = imgMatch ? imgMatch[1] : "";
            if (image.includes('data:image/svg+xml')) {
                const dataSrcMatch = content.match(/data-src="(.*?)"/);
                if (dataSrcMatch) image = dataSrcMatch[1];
            }

            const dateMatch = content.match(/<time.*?class="entry-date".*?>(.*?)<\/time>/);
            const date = dateMatch ? dateMatch[1].trim() : "20/02/2026";

            const excerptMatch = content.match(/<div class="entry-content">.*?<p>(.*?)<\/p>/s);
            let excerpt = excerptMatch ? excerptMatch[1].trim().replace(/<.*?>/g, '').replace(/&#(?:x([\da-f]+)|(\d+));/ig, (m, h, d) => String.fromCharCode(h ? parseInt(h, 16) : parseInt(d, 10))) : "";

            // only pick valid ones
            if (title && image) {
                articles.push({ id: articles.length + 1, titulo: title, imagem: image, data: date, resumo: excerpt.substring(0, 150) + '...', categoria: "Notícias" });
            }
            if (articles.length >= 8) break;
        }

        fs.writeFileSync('news.json', JSON.stringify(articles, null, 2));
        console.log("Success! Found " + articles.length + " articles.");
    });
}).on('error', (e) => {
    console.error(e);
});
