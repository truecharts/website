---
sidebar_position: 9
---
# Resources and Devices

Resources limits that have been defined by each application are in this section. Most will have a specific default that some users may want to change based on their specific hardware or needs. Also contains the section to mount USB devices and/or GPUs as necessary.

## `Resources and Devices`

- `Resources Limits/Advanced Limit Resource Consumption`: Enables changing the allocation of resources such as CPU and RAM to the application. See [Input Validation](/docs/manual/SCALE/validation.md) for more information.
  - `CPU` : Default is `4000m` for maximum and `10m` for minimum.
  - `RAM` : Default is `8 Gi` for maximum and `50 Mi` for minimum.
- `Mount USB Devices`: Clicking `Add` enables the options below
  - `Enable the Storage`: Checked (default). Enables the USB device storage
  - `readOnly`: Unchecked (default). Readonly Access.
  - `Host Device Path`: Path to the device on the host system
  - `Container Device Path`: Path inside the container the device is mounted

- `GPU Configuration`: Assign available GPU(s) to the application
