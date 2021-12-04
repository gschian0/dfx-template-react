export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'get' : IDL.Func([], [IDL.Nat], ['query']),
    'getCounter' : IDL.Func([], [IDL.Nat], []),
    'getPrincipal' : IDL.Func([], [IDL.Principal], []),
    'getTime' : IDL.Func([], [IDL.Int], []),
    'increment' : IDL.Func([], [IDL.Nat], []),
    'set' : IDL.Func([IDL.Nat], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
