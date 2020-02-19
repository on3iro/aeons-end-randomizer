export * from './turnOrder'
export * from './data'
export * from './market'
export * from './expeditions'

export type Seed = {
  seed: string
  state?: Object
}

export type Entity = { id: string } | string

export type SeededEntityGetter = <E extends Entity>(
  entities: Array<E>,
  ...args: any
) => { entity: E; seed: Seed }
