---
id: dataplatform_Introduction
title: Dataplatform Introduction
sidebar_label: Introduction
---

DataPlatform är den grundläggande funktionen för att hantera data. Dataplattform handlar främst om att publicera öppen data på ett strukturerat sätt, med rätt metadata, riktat till de externa användarna.

DataPlatform består av två lösningar, **Portalen** och **CKAN**.

Portalen är webbplatsen för datakonsumenter, där de kan hitta dataset (finns i CKAN), teman, showcases och berättelser. Portalen är ett användarvänligt gränssnitt för att presentera, söka och tillhandahålla data som lagras i CKAN.endly interface for presenting, searching and providing data that is stored in CKAN.

## CKAN

> CKAN is the tool to manage the data. It allows you to change, add, and delete data. However, in order to manipulate data, you must possess valid login credentials (contact your system administrator for this).

DataPlatform uses the open source software CKAN. This is the most widely used software for open data environments worldwide.

CKAN stands for "Comprehensive Knowledge Archive Network," which is a <a href="https://en.wikipedia.org/wiki/Web_application" target="_blank">web-based</a>, <a href="https://en.wikipedia.org/wiki/Open-source_software" target="_blank">open-source</a> management system for the storage and distribution of <a href="https://en.wikipedia.org/wiki/Open_data" target="_blank">open data</a>.

Civity's DataPlatform uses a CKAN instance as our web-based tool for dataset, resource, and metadata maintenance.

You may find our CKAN instance at <a href="https://ckan.dataplatform.nl/" target="_blank">ckan.dataplatform.nl</a>.

The CKAN environment of DataPlatform has been expanded with additional extensions such as the DataStore (API), Data Dictionary (Data dictionary) and GeoServer.

## DataPlatform base configuration

The DataPlatform environment basically consists of a Welcome page, Datasets, Organizations and Themes.

### Welcome page

> The Welcome page can only be customized by system administrators. Civity is the system administrator for DataPlatform.

DataPlatform has a welcome page with a short introductory text and, among other things, a search bar to search directly for data.

### Datasets

DataPlatform uses 'datasets' to organize data (which are called _packages_ in CKAN). A dataset is a packet of data, for example 'the crime figures in the city' or 'the humidity readings of a weather station'. When the user searches for data, the results are visible in the individual datasets.

Datasets comprise of two main aspects:

- A collection of one or more datasources (which are called _resources_ in CKAN)
- Metadata

#### Public and private datasets

Datasets can be marked as public or private. Public datasets are visible to everyone. Private datasets can only be seen by logged-in users who are members of the dataset’s organization. Private datasets are not shown in dataset searches unless the logged in user (or the user identified via an API key) has permission to access them

#### Organizations

DataPlatform defines organizations to organize datasets. Metadata records can belong to a single organization, and each organization controls access to its datasets via user roles.

#### Themes

### Other options and settings

#### Language selection

> The language selector is found in the footer.

CKAN supports many European languages. Presently, CKAN DataPlatform is available in Dutch (Nederlands), English, and Swedish.
