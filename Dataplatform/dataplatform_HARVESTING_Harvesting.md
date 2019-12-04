---
id: harvesting_Harvesting
title: Harvesting
sidebar_label: Harvesting
---
## What is a Data Harvester?

> Harvesters import (harvest) datasets from remote sources into a CKAN instance. This is accomplished by mapping the data from this remote source into CKAN fields. 

CKAN uses the ([ckanext-harvest](https://github.com/ckan/ckanext-harvest)) extension, which provides an interface for building custom harvesters. This interface has three stages:
1. The **gather** stage compiles all the resource identifiers that need to be fetched in the next stage.
2. The **fetch** stage gets the contents of the remote objects and stores them in the database.
3. The **import** stage performs any necessary actions on the fetched resource.

Specific documentation about the CKAN Harvester can be found at <a href="https://github.com/ckan/ckanext-harvest" target="_blank">CKAN Remote harvesting extension documentation</a>


---


## Types of Harvesters

Dataplatform provides the following options to harvest data:
1. CKAN Harvester
2. JSON DCAT Harvester
3. Generic DCAT RDF Harvester

### CKAN Harvester
* The CKAN Harvester is an example of a custom harvester. This harvester lets you import data from a remote CKAN instance into your own CKAN instance.

### JSON DCAT Harvester
* The JSON DCAT Harvester is a plugin that is part of the DCAT-extension  <a href="https://github.com/ckan/ckanext-dcat" target="_blank">ckanext-dcat</a>. This harvester lets you import JSON objects based on DCAT mapping fields and maps these DCAT metadata fields to the CKAN fields.

    <a href="https://github.com/ckan/ckanext-dcat#json-dcat-harvester" target="_blank">Go to CKAN documentation JSON DCAT Harvester</a>

### Generic DCAT RDF Harvester
* This Harvester is another custom harvester which is part of the DCAT-extension.

---

