const e = require('express');
const app =  e();

app.get('/', (req, res) => res.send ("PrimerDeploy"))

app.listen(3000);
console.log("Server on port",3000);