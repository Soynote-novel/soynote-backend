"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../api");
exports.default = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    if (!req.headers && !req.headers.authorization) {
        const payload = { valid: false, status: 'Please log in' };
        res.status(400);
        res.json(payload);
        res.end();
        return;
    }
    let header = req.headers.authorization.split(' ');
    let token = header[1];
    let result;
    try {
        result = yield api_1.JWT.verifyToken(token);
        req.token = result;
        next();
    }
    catch (error) {
        const payload = { valid: false, status: 'Token has expired' };
        res.status(404);
        res.json(payload);
        res.end();
    }
});
