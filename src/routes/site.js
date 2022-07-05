const express = require('express')
const router = express.Router()
const siteController = require("../controllers/SiteControllers")
var middlewares = require('../middlewares/authent')

// chú ý tuyến đường đi từ trên xuống
router.get('/detail/:slug', siteController.detail)
router.get('/login', siteController.login)
router.post('/login', siteController.postLogin)
router.get('/logout', siteController.logout)
router.get('/register', siteController.register)
router.post('/register', siteController.postRegister)
router.get('/rank', siteController.rankCompanies)
router.get('/home/companies', siteController.homeCompanies)
router.get('/', siteController.home)

module.exports = router