var exports = module.exports = {}


exports.signup = function(req, res) {

    res.render('signup', { title: 'MYCRM - SIGNUP', js: 'logout' });

}

exports.signin = function(req, res) {

    res.render('signin', { title: 'MYCRM - SIGNIN', js: 'login' });

}

exports.dashboard = function(req, res) {

    res.render('dashboard', { title: 'MYCRM - DASHBOARD', js: 'dashboard' });

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {
        res.redirect('/');
    });

}