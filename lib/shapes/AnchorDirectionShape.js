"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _constants = require("../constants");
var _default = _propTypes["default"].oneOf([_constants.ANCHOR_LEFT, _constants.ANCHOR_RIGHT]);
exports["default"] = _default;