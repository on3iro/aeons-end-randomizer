export * from './data'
export * from './expeditions'
export * from './market'
export * from './turnOrder'

export type Seed = {
  seed: string
  state?: Object
}

export type Entity = { id: string } | string

export type SeededEntityGetter = <E extends Entity>(
  entities: Array<E>,
  ...args: any
) => { entity: E; seed: Seed }

export type Migration = {
  // Number like: 2020030101 where the first 8 digits are the respective date and the last two the counter of this dates migration
  version: number
  transformer: Function
  force?: boolean // force even if version would skip
}
