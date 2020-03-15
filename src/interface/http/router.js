
const { Router } = require('express');
const { adaptController } = require('../adapters/expressAdapter');
const { getHealth } = require('../controllers');

const router = Router();

router.get('/health', adaptController(getHealth));

module.exports = router;
