'use strict';

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
const { ensureAdmin } = require("../middleware/auth");
const Product = require("../models/product");

const productNewSchema = require("../schemas/productNew.json");
const productUpdateSchema = require("../schemas/productUpdate.json");
const productSearchSchema = require("../schemas/productSearch.json");

const router = new express.Router();