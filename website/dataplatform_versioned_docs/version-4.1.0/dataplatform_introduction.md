---
id: dataplatform_Introduction
title: DataPlatform Introduction
sidebar_label: Introduction
---

DataPlatform is the basic facility for managing data. DataPlatform is mainly about publishing open data in a structured way, with the right metadata, aimed at the external users.

<!-- The portal is the website for data-consumers, where they can find datasets (contained in CKAN), themes, showcases and stories. The portal is a user friendly interface for presenting, searching and providing data that is stored in CKAN. -->

## CKAN

> CKAN is the tool to manage the data. It allows you to change, add, and delete data. However, in order to manipulate data, you must possess valid login credentials (contact your system administrator for this).

DataPlatform uses the open source software CKAN. This is the most widely used software for open data environments worldwide.

CKAN stands for "Comprehensive Knowledge Archive Network," which is a <a href="https://en.wikipedia.org/wiki/Web_application" target="_blank">web-based</a>, <a href="https://en.wikipedia.org/wiki/Open-source_software" target="_blank">open-source</a> management system for the storage and distribution of <a href="https://en.wikipedia.org/wiki/Open_data" target="_blank">open data</a>.

Civity's DataPlatform uses a CKAN instance as our web-based tool for dataset, resource, and metadata maintenance.

<!-- You may find our CKAN instance at <a href="https://ckan.dataplatform.nl/" target="_blank">ckan.dataplatform.nl</a>. -->

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

Datasets can be marked as public or private. Public datasets are visible to everyone. Private datasets can only be seen by logged-in users who are members of the dataset’s organization. Private datasets are not shown in dataset searches unless the logged in user (or when the user is identified via an API key) has permission to access them.

#### Organizations

DataPlatform defines organizations to organize datasets. Metadata records can belong to a single organization, and each organization controls access to its datasets via user roles.

#### Themes

Themes are based on required items from the DCAT-standard. Clicking on a theme acts a filter to show the relevant datasets. The number shown at each theme, refers to the number of datasets.

<!-- ### Other options and settings

Differs depending on the customer. -->

#### Language selection

> The language selector is found in the footer.

CKAN supports many European languages. Presently, CKAN DataPlatform is available in Dutch, English, and Swedish.
