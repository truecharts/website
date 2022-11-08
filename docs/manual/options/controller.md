---
sidebar_position: 2
---
# Controller

Contains advanced and expert settings that some application may need. Currently includes the Advanced Controller Settings, Expert Configuration Options and any Extra custom Arguments  to run on startup.

## `Advanced Controller Settings`:

- `Controller Type`: Deployment (default), Statefulset, Deamonset
- `Desired Replicas`: 1 (default), can changed as necessary.
- `Update Strategy` : Recreate (default), RollingUpdate, OnDelete (legacy)

### `Expert Configuration Options`:

- `Controller Labels`: Add any names and values as necessary
- `Controller Annotations`: Add any names and values as necessary

### `Extra Args`

- `Extra Args`: Add any extra arguments to be run on startup here, one per item.
