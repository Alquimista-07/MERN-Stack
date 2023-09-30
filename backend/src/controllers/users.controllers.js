const userCtrl = {};

userCtrl.getUsers = (req, res) => res.json({
    message: []
});

userCtrl.createUser = (req, res) => res.json({
    message: 'Usuario guardada'
});

userCtrl.deleteUser = (req, res) => res.json({
    message: 'Usuario borrada'
});

module.exports = userCtrl;