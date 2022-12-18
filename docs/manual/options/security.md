---
sidebar_position: 8
---
# Security and Permissions

The security settings for each application and/or permissions that each application may have for the files/directories created. Each application will come with predefined permissions but users may want to change certain setting depending on their usage or capabilities. Unless necessary users are advised to keep this section to defaults.

## Security and Permissions

- `Change PUID / UMASK values`: (Unchecked by default) By enabling this you override default set values.
- `Show Advanced Security Settings`: (Unchecked by default) Enables the following `Security Context` options that may or may not be enabled by the application.
  - `Privileged Mode`
  - `RunAsNonRoot`
  - `readonly Root Filesystem`
  - `Allow Privilege Escalation`
- `Capabilities` : Any specific `Add` or `Drop` capabilities for the application are included here but users may add their own.
- Pod Security Context
  - `runAsUser`: The UserID of the user running the application, may vary based on the application.
  - `runAsGroup` : The groupID this App of the user running the application, may vary based on the application.
  - `fsGroup` : The group that should own ALL storage, generally `568` but some apps may have specific owners (i.e Nextcloud)
- `When should we take ownership?`: OnRootMismatch (default) or Always.
- `Supplemental Groups`: Add any Supplemental Groups as necessary
