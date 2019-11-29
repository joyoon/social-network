const express = require('express');
const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

app.get('/get', (req, res) => {
	res.send({ success: true });
});