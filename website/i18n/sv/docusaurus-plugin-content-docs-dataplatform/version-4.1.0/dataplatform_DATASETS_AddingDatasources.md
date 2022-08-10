---
id: datasets_AddingDatasources
title: Adding Resources
sidebar_label: Adding Resources
---

> All resources are stored within a dataset.

Sources may be added to datasets, only after the dataset has been added and configured.

## Manual Upload

> **CSV**, **DGN**, **GeoJSON**, **GPKG**, **Shape file/ZIP**, **XLS**, and **XLSX** filetypes are accessible by Dataplatform’s API. Other datatypes are saved and provided as a download link.

A source can be an kind of file that is machine-readable; this includes, but is not limited to: **CSV**, **JSON**, **PDF**, and **JPG** file types. Additionally, sources may also be a link.

For more information regarding resources, see <a href="#link-to-source">Link To Resource</a>

### Additional Details

This field allows you to add any kind of additional information.

Typical additional information includes:

- Name: _This will be the filename, ensure it is descriptive_
- Description: _Provide an explanation of the contents of the file_
- Format: _The format in which the source is provided (CSV, XLS, JSON, PDF, etc)._

If you have additional sources to add, choose "Save & Add Another." If you only have one, choose "End."

> CKAN will now save the file and create a dataset. The resulting entry is viewable within 30 minutes. If the visibility is set to **_Public_**, the dataset will become viewable on <a href="https://www.dataplatform.nl" target="_blank" rel="noreferrer noopener">dataplatform</a>. **_Private_** datasets are not visible on Dataplatform.

## Link To Resource

All sources are stored in datasets. Only when a dataset is setup, may a source be added.

### Source as a Link

> Linked data is not available as a callable API

When data is stored in a different location, you may added as a linked source. Any kind of link may be utilized: _URL_, _URI_, or an _API_.

#### Additional Details

See <a href="#additional-details">Additional Details</a>

## Real-time Data

> Real-time data may be added as a source, however setup and configuration must be handled by Civity.

A connection must be configured between the API and Dataplatform. Fiware components are used to configure fields provided by the API, which are then translated into useful open data.

#### Additional Details

See <a href="#additional-details">Additional Details</a>
