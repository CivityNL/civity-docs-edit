---
id: toevoegen_harvest
title: Add Listings - Harvesting
sidebar_label: Harvesting Resources
---

> In addition to adding listings and resources through the normal CKAN user interface, it is also possible to harvest listings and data from other source systems. Civity can set up custom harvesters. Contact Civity if this is desired.

In principle, all web services / APIs that can produce a list of all the resources they offer, can be harvested by DataCatalog.

Harvesting is done in three steps: "gather", "fetch" and "import". The different steps are explained below.

- In the "gather" phase, it is determined which resources are new, which need to be updated and which have been removed in the source. The harvester retrieves a list of sources from the API and draws up the three lists from it. In the case of a CSW, for example, the GetRecords request is used.
- In the "fetch" phase, the actual information is retrieved. This concerns the detailed information of the resource. In the example of a CSW, the GetRecordByID request is used for this;
- In the "import" phase, the information retrieved in the "gather" and "fetch" phases is actually updated in the metadata repository. New records are added, existing records are updated, and records deleted from the source are cleaned up. For this, the original source no longer needs to be approached.

Configuring how the harvesting processes of the different sources are set up depends on a number of things:

- The metadata fields that are included in the metadataschema: We recommend including mandatory CKAN and DCAT metadata fields. If a link to GeoNetwork is desired, these fields must also be included. In addition, customer-specific fields could be included;
- How the links to the sources should be published in Datacatalog, depends on which software is used by the customer. For example, in the case of an ArcGIS Online Map/Feature/ImageServer, a link can be published to open the resource in an online viewer, but links can also be included to open the resource in ArcGIS Desktop. Our advice is to include at least the links to the online viewer;
- Certain sources can be harvest in several ways. Which options there are depends on how the sources that need to be harvested are configured. This requires coordination at the start of a possible joint project.

## Examples of sources that can be harvested

### ArcGIS Online

ArcGIS Online services can be harvested using the APIs that describe the contents of the Map/Feature/ImageServer. An example of such a document can be found on https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer. This is the human-readable variant of the contents of a MapServer. Feature and ImageServers offer a similar document. The harvester would use the JSON variant whose link is in the upper left corner of the readable variant. If the WMS/WFS/WCS connectors are activated, the GetCapabilities documents of these services can also be used for harvesting.

### Geoserver

GeoServer can be harvested in different ways:

- What is always possible in the case of GeoServer is to harvest the WMS/WCS/WFS OGC services based on their GetCapabilities document.
- If the CSW extension is installed, GeoServer can also be harvested using the CSW GetRecords and GetRecordByID requests
- If the GeoServer REST API is accessible and a username/password is available, the GeoServer REST API can also be used for harvesting. The latter option may not be preferred from a security point of view.

## Configuring a harvester

A DataCatalog system administration / organization admin / editor can configure a harvester in the DataCatalog user interface. This information can be entered via the CKAN API. The following information must be provided:

- URL
- Name
- Description
- Type of harvester
- Frequency with which the harvester needs to refresh the information in DataCatalog. Options are: Manual, Daily, Weekly, Every two weeks, Monthly, Continuous
- JSON with harvester specific configuration options
- Organization
