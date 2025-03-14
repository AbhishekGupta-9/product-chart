const express = require('express');
const app = express();
const port = 8081;
const cors = require('cors');
app.use(cors());

const primaryProducts = [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17];
const secondaryProducts = [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16];

app.get('/get-products', (req, res) => {
    const response = {
        success: 200,
        message: 'Data Fetched Successfully.',
        data: {primaryProducts, secondaryProducts}
    };
    res.json(response);
});

app.listen(port, () => {
    console.log(`app started on port ${port}`);
});