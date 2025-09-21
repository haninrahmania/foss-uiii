import * as migration_20250921_050913_add_collections from './20250921_050913_add_collections';

export const migrations = [
  {
    up: migration_20250921_050913_add_collections.up,
    down: migration_20250921_050913_add_collections.down,
    name: '20250921_050913_add_collections'
  },
];
