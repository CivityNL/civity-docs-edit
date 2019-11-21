---
id: harvesting_Harvesting
title: Harvesting
sidebar_label: Harvesting
---

## What is Harvesting?

> Harvesters import ("harvest") datasets from remote sources into a CKAN instance by mapping the data from this remote source into CKAN fields. 

The harvesting extension ([ckanext-harvest](https://github.com/ckan/ckanext-harvest)) provides an interface for building custom harvesters. The interface has three stages:

1. The **gather** stage compiles all the resource identifiers that need to be fetched in the next stage.
2. The **fetch** stage gets the contents of the remote objects and stores them in the database.
3. The **import** stage performs any necessary actions on the fetched resource.
---

**<a href="https://github.com/ckan/ckanext-harvest" target="_blank">Go to CKAN documentation on the Remote harvesting extension</a>**

## Types of Harvesters

Dataplatform provides the following options to harvest data:
* CKAN Harvester
* JSON DCAT Harvester
* Generic DCAT RDF Harvester

#### CKAN Harvester
The CKAN Harvester is an example of a custom harvester. 

This harvester lets you import data from a remote CKAN instance to your own CKAN instance

#### JSON DCAT Harvester
    
The JSON DCAT Harvester is a plugin that is part of the DCAT-extension  <a href="https://github.com/ckan/ckanext-dcat" target="_blank">ckanext-dcat</a>

This harvester lets you import JSON objects based on DCAT mapping fields and maps these DCAT metadata fields to the CKAN fields.

#### Generic DCAT RDF Harvester

This Harvester is another custom harvester which is part of the DCAT-extension

---

**<a href="https://github.com/ckan/ckanext-dcat#json-dcat-harvester" target="_blank">Go to CKAN documentation JSON DCAT Harvester</a>**

