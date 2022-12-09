import { NetworkType } from './src/network-type';
export interface Network {
  key: string;
  shortKey: string;
  type: NetworkType;
  chain: number;
  rpc: string;
  holographId: number;
  tokenName: string;
  tokenSymbol: string;
  explorer: string | undefined;
  lzEndpoint: string;
  lzId: number;
  active: boolean;
}
export interface Networks {
  [key: string]: Network;
}
declare type NetworkKeys = keyof Networks;
export interface NetworkHelper {
  byKey: Networks;
  byShortKey: Networks;
  byChainId: Networks;
  byHolographId: Networks;
  byLzId: Networks;
}
export { NetworkType, NetworkKeys };
//# sourceMappingURL=types.d.ts.map
