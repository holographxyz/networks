import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { Environment } from '@holographxyz/environment';
import { Network } from '../types';
export declare function getSupportedNetworks(environment?: Environment): string[];
export declare const supportedNetworks: string[];
export declare function getNetworkByKey(key: string): Network;
export declare function getNetworkByShortKey(shortKey: string): Network;
export declare function getNetworkByChainId(chainId: BigNumberish | BigNumber | string | number): Network;
export declare function getNetworkByHolographId(holographId: BigNumberish | BigNumber | string | number): Network;
export declare function getNetworkByLzId(lzId: BigNumberish | BigNumber | string | number): Network;
//# sourceMappingURL=utils.d.ts.map
