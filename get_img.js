const https = require('https');
https.get('https://www.justicanossotrabalho.com.br/nova-diretoria-do-coleprecor-apresenta-diretrizes-e-defende-a-competencia-da-justica-do-trabalho-em-reuniao-com-o-ministro-edson-fachin/', res => {
    let data = '';
    res.on('data', d => data += d);
    res.on('end', () => console.log(data.match(/<meta property="og:image" content="(.*?)"/)[1]));
});
