const express = require('express');
const router = express.Router();

router.get('*', (req, res) => {
    res.send({
        error: 'The page you are looking for does not exist.'
    });
});