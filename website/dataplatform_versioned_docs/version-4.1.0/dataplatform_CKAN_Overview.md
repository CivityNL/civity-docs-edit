---
id: ckan_Overview
title: Overview
sidebar_label: Overview
---

Here you will find an overview of what CKAN is, in addition to what you can accomplish with CKAN.

## CKAN 

DataPlatform uses the open source software CKAN. This is the most widely used software for open data environments worldwide.

CKAN stands for "Comprehensive Knowledge Archive Network," which is a <a href="https://en.wikipedia.org/wiki/Web_application" target="_blank">web-based</a>, <a href="https://en.wikipedia.org/wiki/Open-source_software" target="_blank">open-source</a> management system for the storage and distribution of <a href="https://en.wikipedia.org/wiki/Open_data" target="_blank">open data</a>. 

Civity's DataPlatform uses a CKAN instance as our web-based tool for dataset, resource, and metadata maintenance.  

You may find our CKAN instance at <a href="https://ckan.dataplatform.nl/" target="_blank">ckan.dataplatform.nl</a>.

The CKAN environment of DataPlatform has been expanded with additional extensions such as the DataStore (API), Data Dictionary (Data dictionary) and GeoServer.

## Language selection 
>The language selector is found in the footer. 

CKAN supports many European languages. Presently, CKAN DataPlatform is available in Dutch (Nederlands), English, and Swedish. 
 
## Datasets  
> datasets are managed at `https://ckan-{organisation-name}-dataplattform-se.dataplattform.se` and presented at `https://{organisation-name}.dataplattform.se`

CKAN uses 'datasets' to organize data (which are called *packages* in CKAN). A dataset is a packet of data, for example 'the crime figures in the city' or 'the humidity readings of a weather station'. When the user searches for data, the results are visible in the individual datasets.

Datasets comprise of two main aspects: 
* A collection of one or more datasources (which are called *resources* in CKAN) 
* Metadata 

## Dataset Metadata 
The metadata contains information about the collection of datasources in the dataset. The metadata should give information about: 
* Who owns the dataset 
* Descriptive information about the content 
* Access rights 

## Datasources 
A dataset is comprised of a collection of resources; these are the actual files or links that provide data. Your dataset may be comprised of a single source, or many sources, any file format, and must contain explicit metadata. 

## Metadata 
> Metadata is simply data about data 

Every dataset contains metadata. For open data we follow the guidelines set in the DCAT-Standard. 

Metadata is information that provides data about other data. Typically this means a description and context about existing data. 

For a comprehensive example, see [Metadata](metadata_Metadata#metadata-example)