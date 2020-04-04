const router = require('express').Router();
const getMessage = require('../localization');
const GeneralUtilities= require('../utils/GeneralUtilities');

router.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-Custom-Header, Content-Type, Accept,server-name, errorcode, errormessage');
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    res.header('Access-Control-Expose-Headers', "errorcode, errormessage");
    res.header('server-name', 'hotels');

    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
        return;
    }
    else {
        next();
    }
});

// split up route handling
router.use('/v1/inventory', require('./v1/Inventory'));

router.use((req, res, next) => {
    next(GeneralUtilities.customError("ERR0", 404));
});

router.use((error, req, res, next) => {
    error.message = getMessage((error.customCode ? error.customCode : "ERR1"), req.headers.language);
    res.status(error.status || 500).json({
        message:error.message
    });
});

module.exports=router;