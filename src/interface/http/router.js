
const { Router } = require('express');
const { getHealth } = require('../controllers');

const router = Router();

router.get('/health', getHealth);

module.exports = router;
