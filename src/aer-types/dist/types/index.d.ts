export * from './data'
export * from './expeditions'
export * from './market'
export * from './turnOrder'
export declare type Seed = {
  seed: string
  state?: Object
}
export declare type Entity =
  | {
      id: string
    }
  | string
export declare type SeededEntityGetter = <E extends Entity>(
  entities: Array<E>,
  ...args: any
) => {
  entity: E
  seed: Seed
}
export declare type Migration = {
  version: number
  transformer: Function
  force?: boolean
}
//# sourceMappingURL=index.d.ts.map
