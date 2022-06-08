"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    console.log('PRODUCTS IS WORKING');
    res.status(201).json({
        msg: 'Get ok'
    });
});
exports.default = router;
//# sourceMappingURL=products.js.map