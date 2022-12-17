---
sidebar_position: 9
---
# Resources and Devices

Resources limits that have been defined by each application are in this section. Most will have a specific default that some users may want to change based on their specific hardware or needs. Also contains the section to mount USB devices and/or GPUs as necessary.

## `Resources and Devices`

- `Set Custom Resources Limits/Requests`: (Unchecked by default) Enables advanced uses to change the allocation of resources such as CPU and RAM to the application. See the [validation page](https://truecharts.org/docs/manual/SCALE%20Apps/validation) for more info.
  - `CPU` : Default is `4000m` for maximum and `10m` for minimum.
  - `RAM` : Default is `8 GiB` for maximum and `50 Mi` for minimum.
- `Mount USB Devices`: Clicking `Add` enables the options below
  - `Enable the Storage`: (Default) Enables the USB device storage
  - `readOnly`: Unchchecked by default by may be enabled.
  - `Host Device Path`: Path to the device on the host system
  - `Container Device Path`: Path inside the container the device is mounted

- `GPU Configuration`: Assign available GPU(s) to the application
