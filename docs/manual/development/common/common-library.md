# Common library

All of our Apps' Helm charts consume our Common library Helm chart.

!!! note
    The Common library chart is not meant to be installed directly, application
    charts use the Common library as a dependency.

## Background

In Helm 3, their team introduced the concept of a
[Library chart](https://helm.sh/docs/topics/library_charts/).

> A library chart is a type of Helm chart that defines chart primitives or
  definitions which can be shared by Helm templates in other charts. This
  allows users to share snippets of code that can be re-used across charts,
  avoiding repetition and keeping charts DRY.

The idea behind a common library was originally created brought up by the former k8s-at-home project,
because many charts require only a number of select configuration options in their Helm charts.

!!! note
    Take one of the many charts like `sonarr` or `nzbget`. Each of these
    charts only require setting `service`, `port`, `persistence`, `ingress`
    and `image` since state and app configuration is handled by the application
    itself.

In order to stay somewhat DRY (Don't Repeat Yourself) usage for a Library chart, 
we've complete writhen a new k8s-at-home inspired a common "library"chart from scratch. 
This means each one of these App charts has a dependency on what we call the `common` library.


## Source code

The source code for our library chart can be found
[here](https://github.com/truecharts/library-charts).
