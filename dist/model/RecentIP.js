"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const table = require('../table');
const SUCCESS = true;
class RecentIP {
    static log(info) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user, ip } = info;
            const payload = {
                user,
                ip
            };
            yield table.RecentIP.create(payload);
            return SUCCESS;
        });
    }
}
module.exports = RecentIP;
