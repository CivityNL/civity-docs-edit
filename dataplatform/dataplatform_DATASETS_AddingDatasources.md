---
id: datasets_AddingDatasources
title: Adding Resources
sidebar_label: Adding Resources
---

> All data sources/appendices are part of a dataset.

Resources can only be added to datasets after the (mandatory) metadata of a dataset has been entered.

## Upload manually

### Adding resources

After the dataset metadata has been filled in, data can be added. Click the 'Next: Add data' button.

On this page one or more files ("resources") can be added to the dataset. There are two ways to add a file:

- By uploading a file
- By linking to a file via a URL (location)

If a CSV, DGN, GeoJSON, GPKG, Shapefile/ZIP, XLS or XLSX is added (both uploading and linking), the file is stored in the DataStore of the DataPlatform and accessible through the DataStore API. Other file formats are saved as a file and are available for download.

Mandatory metadata must also be filled in for a resource:

1. Title: Give the file a distinctive name.
2. Description : explain the contents of the file.
3. Format – The format in which the resource is provided, for example CSV, XLS, JSON, PDF, etc. This field can be left blank. CKAN determines the format itself based on the extension.

If you want to add multiple resources (upload or links) to the dataset, choose "save and add another". If you only add one file to the dataset, choose 'finish'

CKAN saves the file and publishes the dataset. The result is displayed immediately. If the dataset is publicly accessible, the result can also be displayed on the Open Data Portal. Datasets that are private will not visible on the Open Data Portal.

## Real-time / IoT data

> Real-time data can be added as a source, but installation and configuration must be handled by Civity.

A connection must be configured between the API and DataPlatform. Fiware components are used to configure fields of the API, which are then translated into useful open data.
