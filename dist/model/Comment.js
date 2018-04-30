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
const sequelize = require('sequelize');
const SUCCESS = true;
const FAILURE = false;
class Comment {
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { id }
            };
            const comment = yield table_1.default.Comment.findOne(payload);
            return (!!comment) && comment.dataValues;
        });
    }
    static averageByEpisode(episode) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                attributes: [[sequelize.fn('AVG', sequelize.col('score'))]],
                where: { episode }
            };
            const comment = yield table_1.default.Comment.findOne(payload);
            return (!!comment) && comment.dataValues;
        });
    }
    static averageByNovel(novel) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                attributes: [[sequelize.fn('AVG', sequelize.col('score'))]],
                where: { novel }
            };
            const comment = yield table_1.default.Comment.findOne(payload);
            return (!!comment) && comment.dataValues;
        });
    }
    static newComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            const { writer, novel, episode, content, score } = comment;
            if (!(score >= 0 && score <= 5)) {
                return FAILURE;
            }
            else {
                const payload = { writer, novel, episode, content, score };
                yield table_1.default.Comment.create(payload);
                return SUCCESS;
            }
        });
    }
    static editComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, content, score } = comment;
            if (!(score >= 0 && score <= 5)) {
                return FAILURE;
            }
            else {
                const payload = {
                    where: { id }
                };
                const editInformation = {
                    content, score
                };
                yield table_1.default.Episode.update(payload, editInformation);
                return SUCCESS;
            }
        });
    }
}
exports.default = Comment;
