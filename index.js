const express = require('express');
const app = express();

app.use(express.static('dist',{extensions:['html']}));

app.listen(3000, () => console.log('fva app listening on port '+ 3000));
//app.listen(process.env.PORT || 3000, () => console.log('fva app listening on port '+ process.env.PORT || 3000));
