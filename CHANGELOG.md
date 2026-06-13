# @crxn307/api-sports

## 1.2.0

### Minor Changes

- Added typed parameters field to ApiResponse - parameters now reflects the exact keys passed per endpoint

## 1.1.6

### Patch Changes

- fix: added support for fixture half statistics

## 1.1.5

### Patch Changes

- fix: type FootballRound

## 1.1.4

### Patch Changes

- fix: correct FootballPlayersResponse statistics field to FootballPlayerStatistics[]

## 1.1.3

### Patch Changes

- removed country from venue in FootballTeamResponse

## 1.1.2

### Patch Changes

- correct type mismatches and expand missing fields in football types

## 1.1.1

### Patch Changes

- fix: correct FootballTeam founded field type to number

## 1.1.0

### Minor Changes

- Restructure football types into a dedicated `types/` directory.

  All football endpoint types are now exported from `@crxn307/api-sports` directly and follow a consistent naming pattern (`FootballXxxResponse`, `GetFootballXxxParams`). Added JSDoc with examples to all football endpoint functions and core client modules.

## 1.0.4

### Patch Changes

- fix: re-export endpoint param/response types from the package entry point so consumers can import them

## 1.0.3

### Patch Changes

- fix: seasons field in FootballLeaguesRespone typed as array

## 1.0.2

### Patch Changes

- 6426881: Refactored internal module structure: flattened endpoint modules from folder-based to single files, consolidated types into a single `types.ts`, and restructured entry points. Fixed missing imports and player function names in the football module.
