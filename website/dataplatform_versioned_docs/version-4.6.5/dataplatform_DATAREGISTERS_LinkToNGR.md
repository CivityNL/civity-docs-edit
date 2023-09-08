---
id: dataregisters_LinkToNGR
title: Link to Other Services
sidebar_label: Link to Other Services
---

# Dutch Nationaal Georegister

> DataPlatform has a link with the Dutch Nationaal Georegister (NGR).
> Nationaal Georegister uses a GeoNetwork instance.

At the dataset level, you can indicate via the 'Publish NGR' metadata field whether you want to forward the data to the Nationaal Georegister (NGR).

:::caution Attention!

The link with NGR can only take place if the data has also been transferred to GeoServer. The metadata field `Publish GeoServer` must therefore also be filled in with `yes`.

:::

Data is also automatically made available on data.overheid.nl via NGR. The metadata field Publish DONL (not via NGR) must therefore be filled in with 'No' to prevent data from being transferred to DONL twice.

When metadata fields are not filled in or a value is entered that does not correspond to what NGR expects, a default value will be given. This means that the metadata that can be found on NGR may be different from what can be seen on DataPlatform for the dataset in question.
