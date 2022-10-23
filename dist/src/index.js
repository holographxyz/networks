'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.supportedShortNetworks =
  exports.supportedNetworks =
  exports.getNetworkByLzId =
  exports.getNetworkByHolographId =
  exports.getNetworkByChainId =
  exports.getNetworkByShortKey =
  exports.getNetworkByKey =
  exports.getSupportedNetworks =
  exports.networks =
  exports.NetworkType =
    void 0;
const network_type_1 = require('./network-type');
Object.defineProperty(exports, 'NetworkType', {
  enumerable: true,
  get: function () {
    return network_type_1.NetworkType;
  },
});
const networks_1 = require('./networks');
Object.defineProperty(exports, 'networks', {
  enumerable: true,
  get: function () {
    return networks_1.networks;
  },
});
const utils_1 = require('./utils');
Object.defineProperty(exports, 'getSupportedNetworks', {
  enumerable: true,
  get: function () {
    return utils_1.getSupportedNetworks;
  },
});
Object.defineProperty(exports, 'getNetworkByKey', {
  enumerable: true,
  get: function () {
    return utils_1.getNetworkByKey;
  },
});
Object.defineProperty(exports, 'getNetworkByShortKey', {
  enumerable: true,
  get: function () {
    return utils_1.getNetworkByShortKey;
  },
});
Object.defineProperty(exports, 'getNetworkByChainId', {
  enumerable: true,
  get: function () {
    return utils_1.getNetworkByChainId;
  },
});
Object.defineProperty(exports, 'getNetworkByHolographId', {
  enumerable: true,
  get: function () {
    return utils_1.getNetworkByHolographId;
  },
});
Object.defineProperty(exports, 'getNetworkByLzId', {
  enumerable: true,
  get: function () {
    return utils_1.getNetworkByLzId;
  },
});
Object.defineProperty(exports, 'supportedNetworks', {
  enumerable: true,
  get: function () {
    return utils_1.supportedNetworks;
  },
});
Object.defineProperty(exports, 'supportedShortNetworks', {
  enumerable: true,
  get: function () {
    return utils_1.supportedShortNetworks;
  },
});
//# sourceMappingURL=index.js.map
