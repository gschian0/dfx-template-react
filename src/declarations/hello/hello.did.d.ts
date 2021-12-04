import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'get' : () => Promise<bigint>,
  'getCounter' : () => Promise<bigint>,
  'getPrincipal' : () => Promise<Principal>,
  'getTime' : () => Promise<bigint>,
  'increment' : () => Promise<bigint>,
  'set' : (arg_0: bigint) => Promise<undefined>,
}
