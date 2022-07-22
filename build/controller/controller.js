"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESModules
const db_json_1 = __importDefault(require("../database/db.json"));
const router = express_1.default.Router();
router.get('/all', (_req, res) => {
    let result = db_json_1.default;
    res.json(result);
    console.log(result);
});
exports.default = router;
