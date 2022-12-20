'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getNetworkByLzId =
  exports.getNetworkByHolographId =
  exports.getNetworkByChainId =
  exports.getNetworkByShortKey =
  exports.getNetworkByKey =
  exports.supportedShortNetworks =
  exports.supportedNetworks =
  exports.getSupportedNetworks =
    void 0;
const bignumber_1 = require('@ethersproject/bignumber');
const environment_1 = require('@holographxyz/environment');
const types_1 = require('../types');
const networks_1 = require('./networks');
function getSupportedNetworks(environment) {
  if (environment === undefined) {
    environment = (0, environment_1.getEnvironment)();
  }
  const supportedNetworks = Object.keys(networks_1.networks).filter((networkKey) => {
    const network = networks_1.networks[networkKey];
    switch (environment) {
      case environment_1.Environment.localhost:
        if (network.type === types_1.NetworkType.local && network.active) {
          return true;
        }
        break;
      case environment_1.Environment.experimental:
        if (network.type === types_1.NetworkType.testnet && network.active) {
          return true;
        }
        break;
      case environment_1.Environment.develop:
        if (network.type === types_1.NetworkType.testnet && network.active) {
          return true;
        }
        break;
      case environment_1.Environment.testnet:
        if (network.type === types_1.NetworkType.testnet && network.active) {
          return true;
        }
        break;
      case environment_1.Environment.mainnet:
        if (network.type === types_1.NetworkType.mainnet && network.active) {
          return true;
        }
        break;
    }
    return false;
  });
  return supportedNetworks;
}
exports.getSupportedNetworks = getSupportedNetworks;
exports.supportedNetworks = getSupportedNetworks();
function networkHelperConstructor() {
  const helper = {
    byKey: {},
    byShortKey: {},
    byChainId: {},
    byHolographId: {},
    byLzId: {},
  };
  for (const networkName of exports.supportedNetworks) {
    const network = networks_1.networks[networkName];
    const key = network.key;
    const shortKey = network.shortKey;
    const chainId = network.chain;
    const holographId = network.holographId;
    const lzId = network.lzId;
    helper.byKey[key] = network;
    helper.byShortKey[shortKey] = network;
    helper.byChainId[chainId] = network;
    helper.byHolographId[holographId] = network;
    if (network.lzId > 0) {
      helper.byLzId[lzId] = network;
    }
  }
  return helper;
}
function createShortNetworkNames() {
  let shortNetworks = [];
  for (const key of exports.supportedNetworks) {
    shortNetworks.push(networks_1.networks[key].shortKey);
  }
  return shortNetworks;
}
exports.supportedShortNetworks = createShortNetworkNames();
const networkHelper = networkHelperConstructor();
function getNetworkByKey(key) {
  if (!(key in networkHelper.byKey)) {
    throw new Error('Key does not exist in Networks');
  }
  return networkHelper.byKey[key];
}
exports.getNetworkByKey = getNetworkByKey;
function getNetworkByShortKey(shortKey) {
  if (!(shortKey in networkHelper.byShortKey)) {
    throw new Error('ShortKey does not exist in Networks');
  }
  return networkHelper.byShortKey[shortKey];
}
exports.getNetworkByShortKey = getNetworkByShortKey;
function getNetworkByChainId(chainId) {
  const n = bignumber_1.BigNumber.from(chainId).toNumber();
  if (!(n in networkHelper.byChainId)) {
    throw new Error('ChainId does not exist in Networks');
  }
  return networkHelper.byChainId[n];
}
exports.getNetworkByChainId = getNetworkByChainId;
function getNetworkByHolographId(holographId) {
  const n = bignumber_1.BigNumber.from(holographId).toNumber();
  if (!(n in networkHelper.byHolographId)) {
    throw new Error('HolographId does not exist in Networks');
  }
  return networkHelper.byHolographId[n];
}
exports.getNetworkByHolographId = getNetworkByHolographId;
function getNetworkByLzId(lzId) {
  const n = bignumber_1.BigNumber.from(lzId).toNumber();
  if (!(n in networkHelper.byLzId)) {
    throw new Error('LzId does not exist in Networks');
  }
  return networkHelper.byLzId[n];
}
exports.getNetworkByLzId = getNetworkByLzId;
//# sourceMappingURL=utils.js.map
