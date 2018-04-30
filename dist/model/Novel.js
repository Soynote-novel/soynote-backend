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
class Novel {
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { id }
            };
            const novel = yield table.Novel.findOne(payload);
            return (!!novel) && novel.dataValues;
        });
    }
    static findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                wehre: { name }
            };
            const novel = yield table.Novel.findAll(payload);
            return (!!novel) && novel.dataValues;
        });
    }
    static findByWriter(writer) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { writer }
            };
            const novel = yield table.Novel.findAll(payload);
            return (!!novel) && novel.dataValues;
        });
    }
    static createNovel({ writer, name, bio }) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = { writer, name, bio };
            yield table.Novel.create(payload);
            return SUCCESS;
        });
    }
    static deleteNovel({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: {
                    id
                }
            };
            yield table.Novel.destroy(payload);
            return SUCCESS;
        });
    }
    static editNovel({ id, bio }) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { id }
            };
            const editInformation = { bio };
            yield table.Novel.update(editInformation, payload);
            return SUCCESS;
        });
    }
}
module.exports = Novel;
