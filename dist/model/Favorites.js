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
const SUCCESS = true;
class Favorites {
    static findByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { userId }
            };
            const favorites = yield table_1.default.Favorites.findAll(payload);
            return (!!favorites) && favorites.dataValues;
        });
    }
    static findByNovel(novelId) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { novelId }
            };
            const favorites = yield table_1.default.Favorites.findAll(payload);
            return (!!favorites) && favorites.dataValues;
        });
    }
    static create(info) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = info;
            yield table_1.default.Favorites.create(payload);
            return SUCCESS;
        });
    }
    static delete(info) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, novelId } = info;
            const payload = {
                where: { userId, novelId }
            };
            yield table_1.default.Favorites.destroy(payload);
            return SUCCESS;
        });
    }
}
module.exports = Favorites;
