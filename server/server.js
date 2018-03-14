let express = require('express');

let app = express();
// run server
const PORT = 5000;

app.use(express.static('server/public'))

app.listen(PORT, () => {
    console.log('app is running on port 5000')
})