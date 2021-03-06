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
exports.deleteProduct = exports.putProduct = exports.postProduct = exports.getProduct = exports.getProducts = void 0;
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
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existe = yield products_1.default.findOne({ where: { nombre: body.nombre } });
        if (existe) {
            return res.status(400).json({
                msg: "Ya existe un producto con el nombre " + body.nombre,
            });
        }
        const product = yield products_1.default.create(body);
        product.save();
        res.json(product);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postProduct = postProduct;
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const product = yield products_1.default.findByPk(id);
        if (!product) {
            return res.status(404).json({
                msg: "No existe un product con el id " + id,
            });
        }
        yield product.update(body);
        res.json(product);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putProduct = putProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield products_1.default.findByPk(id);
    if (!product) {
        return res.status(404).json({
            msg: "No existe un product con el id " + id,
        });
    }
    yield product.destroy();
    res.json(product);
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.js.map