const router = require('express').Router();
const signale = require('signale');
const user = require('../controllers/user-controller.js');
const Scholarship = require('../models/Scholarship.js')

//sessionChecker middlewares
let sessionChecker = (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/user/login')
  } else {
    next()
  }
}

// check for url tampering
let validateURL = (req, res, next) => {
  if (req.params.username != req.session.user.name) {
    req.session.destroy(err => {
      if (err) {
        return next(err)
      }
      return res.redirect('/user/login')
    })
  }
  next()
}

//check if already logged in.
let loggedIn = (req, res, next) => {
  if (req.session.user) {
    return res.redirect(`/user/${req.session.user.name}/register`)
  }
  return next()

}

//check if already registered for Scholarship
let ifRegistered = (req, res, next) => {
  Scholarship.findOne({
    "personalDetails.rollno": req.session.user.name
  }, (err, student) => {
    if (err) {
      signale.error(err)
      return res.redirect('/')
    }
    if (student) {
      return res.redirect(`/user/${req.session.user.name}/status`)
    }
    return next()
  });
}

// register
router.get('/:username/register', sessionChecker, validateURL, ifRegistered, user.renderRegisterForm)
router.post('/:username/register', sessionChecker, validateURL, user.registerUser)

// login
router.get('/login', loggedIn, user.renderLoginForm)
router.post('/login', user.validateLogin)

//status page
router.get('/:username/status', sessionChecker, validateURL, user.renderStatus)

module.exports = router