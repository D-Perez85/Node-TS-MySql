"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = void 0;
const products_1 = __importDefault(require("../models/products"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield products_1.default.findAll();
    res.status(200).json({ products });
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield products_1.default.findByPk(id);
    if (product) {
        res.status(200).json({ product });
    }
    else {
        res.status(404).json({
            msg: `Controle el  id ingresado (${id}) -  no existe en base de datos`,
        });
    }
});
exports.getProduct = getProduct;
//# sourceMappingURL=products.js.map