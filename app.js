const http = require('http');

 var options = {
        host: 'api.forismatic.com',
        path: '/api/1.0/?method=getQuote&lang=en&format=json',
        method: 'GET',
        headers: {'user-agent': 'node.js'}
    };

http.get(options, function (response) {
  response.setEncoding('utf8')
  response.on('data', (quoteData) => {
    const quote = JSON.parse(quoteData);
    const quoteText = quote.quoteText;
    const quoteAuthor = quote.quoteAuthor
    console.log(quoteText + "- " + quoteAuthor);
  });
}).on('error', console.error)
  