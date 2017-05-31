'use strict';


const { Router } = require('express')
const router = Router()

router.use(require('./student'));
router.use(require('./teacher'));
router.use(require('./parents'));
router.use(require('./messages'));
router.use(require('./class'))
router.use(require('./academics'))
router.use(require('./family'))


router.get('/', function(req, res) {
  res.json({
    'students': 'root/api/v1/students',
    'teachers': 'root/api/v1/teachers',
    'parents': 'root/api/v1/parents',
    'messages': 'root/api/v1/messages',
    'class': 'root/api/v1/class',
    'academics': 'root/api/v1/academic',
    'family': 'root/api/v1/family'
  });
});

module.exports = router
