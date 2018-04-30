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
const table_1 = require("../table");
const getUnique = (str) => {
    return str.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
};
class Hashtag {
    static findByNovel(novel) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { novel }
            };
            const hashtag = yield table_1.default.Hashtag.findAll(payload);
            return (!!hashtag) && hashtag.dataValues;
        });
    }
    static findByTag(tag) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { tag }
            };
            const hashtag = yield table_1.default.Hashtag.findAll(payload);
            return (!!hashtag) && hashtag.dataValues;
        });
    }
    static createTags(tags) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {};
        });
    }
}
module.exports = Hashtag;
