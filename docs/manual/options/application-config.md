---
sidebar_position: 4
---
# Application Configuration

Every application has different values that may be required to run or have multiple options that the user may choose to enable or disable to change the behavior of the application. Most options should have a Tooltip (Circled Question Mark) to further describe said option.

## `Application Configuration`

- May vary depending on the application being used, examples include default `username`, `password` or anything that may be required by the application.

:::caution Required Fields
Anything labeled required will need to be filled out in order to continue with the installation.

:::

### `Expert Configuration`

This section is hidden (unchecked) by default but may be enabled as needed to enable additional features.

- `Enable TTY`: Enable to print the name of the terminal in shell.
- `Enable STDIN`: Enable to display `STDIN` or Standard Input.
- `Termination settings`: Grace Period Seconds (default is 10)
- `Pod Labels`: Add any pod labels as necessary
- `Pod Annotations`: Add any pod annotations as necessary
