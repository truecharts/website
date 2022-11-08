---
sidebar_position: 3
---
# Container Configuration

Every application has different values that may be required to run or have multiple options that the user may choose to enable/disable to change the behavior of the application. Most options should have a Tooltip (Circled Question Mark) to further describe said option.

Some applications need configuration options set at the container level and some are specific to the application itself, therefore some apps may have both menus and some may have one or the other.

## `Expert Configuration`

This section is hidden (unchecked) by default but may be enabled as needed to enable additional features.

- `Enable TTY`: Enable to print the name of the terminal in shell.
- `Enable STDIN`: Enable to display `STDIN` or Standard Input.
- `Termination settings`: Grace Period Seconds (default is 10)
- `Pod Labels`: Add any pod labels as necessary
- `Pod Annotations`: Add any pod annotations as necessary
