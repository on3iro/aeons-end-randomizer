# API

## Configuration

To see a detailed configuration, have a look at our [example](./Example.md).

### Properties

#### name

##### Definition

type: `string`

The name of the expedition which will be used by default upon import of the configuration.

##### Example

```json
{
  "name": "My awesome expedition"
}
```

#### seedConfig **(optional)**

##### Definition

type: `string`

The default seed value, which will be used upon import of the configuration

##### Example

```json
{
  "seedConfig": "MySeed"
}
```

#### bigPocketVariantConfig

##### Definition

type: `boolean` (true/false)

Determines if the expedition will use big pocket rules (meaning that supply cards will alwasy be added and no banishing is nescessary).

##### Example

```json
{
  "bigPocketVariantConfig": true
}
```

#### initialBarracksConfig **(optional)**

##### Definition

type [`Barracks`](./Types#Barracks)

If specified, the provided ids will be used to generate the inital content on import of the configuration.
You can omit single lists (`mageIds`, `supplyIds`, `treasureIds`), and their content will be generated regularily (e.g. using the provided supply setup from the settings snapshot).
For specified lists no further content will be rolled.

##### Example

```json
{
  "mageIds": ["Adelheim"]
}
```

#### initialUBNCardsConfig **(optional)**

##### Definition

type: `string[]`

Allows you to provide a list of ids from upgraded basic nemesis cards. These cards will then be added to the imported expedition immediately.

##### Example

```json
{
  "initialUBNCardsConfig": ["Wreck"]
}
```

#### settingsSnapshotConfig **(optional)**

##### Definition

type: [`SettingsSnapshotConfig`](./Types#SettingsSnapshotConfig)

Defines the content which will be used for all random rolls inside the expedition. This makes each expedition completely independent from the settings users have selected.

> If no [`settingsSnapshotConfig`](./Types#SettingsSnapshotConfig) is configured, a new one will be created with the users current settings.
> To create an empty [`settingsSnapshotConfig`](./Types#SettingsSnapshotConfig) you have to set the [`settingsSnapshotConfig`](./Types#SettingsSnapshotConfig) with empty lists!

##### Example

See [`SettingsSnapshotConfig`](./Types#SettingsSnapshotConfig) for details!

```json
{
  "settingsSnapshotConfig": { ... }
}
```

#### sequenceConfig

##### Definition

type: [`SequenceConfig`](./Types.md#SequenceConfig)

The sequenceConfig determines which `Branch`es the players will run through, how each `Branch` is configured and how the branches are interconnected with one another. This is where narrative sections, battles and special reward sections are configured.

##### Example

For further details see [`SequenceConfig`](./Types#SequenceConfig)

```json
{
  "sequenceConfig": { ... }
}
```
