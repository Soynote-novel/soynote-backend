"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const model = require('../model');
class Test {
    static register() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = 'jioo0224@naver.com';
                const password = 'registertest';
                const nickname = '볕뉘';
                const userInfo = { email, password, nickname };
                const result = yield model.User.register(userInfo);
                console.log(result);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
Test.register();
