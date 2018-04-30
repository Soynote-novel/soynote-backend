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
class Episode {
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { id }
            };
            const episode = yield table_1.default.Episode.findOne(payload);
            return (!!episode) && episode.dataValues;
        });
    }
    static findByNovel(novel) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { novel }
            };
            const episode = yield table_1.default.Episode.findAll(payload);
            return (!!episode) && episode.dataValues;
        });
    }
    static newNovel(novelInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = novelInfo;
            yield table_1.default.Episode.create(payload);
            return SUCCESS;
        });
    }
    static editNovel(novelInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, isAdult, content, poster } = novelInfo;
            const payload = {
                where: { id }
            };
            const editInformation = {
                name, isAdult, content, poster
            };
            yield table_1.default.Episode.update(payload, editInformation);
            return SUCCESS;
        });
    }
}
exports.default = Episode;
