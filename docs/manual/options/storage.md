---
sidebar_position: 6
---
# Storage and Persistence

Many applications will have certain options for storage to be configurable by the user, the main two being PVC and hostpath but may include other types. This storage is called Persistence since it is not deleted upon restart or upgrade of an application.

## `Storage and Persistence`

- Any data that needs to be retained upon restarts or upgrades will include `Integrated Persistent Storage` in this section
  - Examples include `App Config Storage`, `App Data Storage`, etc.
- Type of Storage:
  - `PVC (simple)` <- Default. See this [link](https://truecharts.org/manual/FAQ#why-pvc-is-recommended-over-hostpath).
  - `Host Path (simple)`
  - `emptyDir`
  - `PVC`
  - `Host Path`
  - `NFS Share`

- Additional App Storage
  - Any additional storage can be added to the application in this section, one per `Mount Path` in the application, with the same types as above, however the `default` for this section is `hostPath (simple)`.
