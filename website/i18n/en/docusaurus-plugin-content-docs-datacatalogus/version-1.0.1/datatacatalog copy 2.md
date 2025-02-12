---
id: link_geoserver
title: Link to GeoServer
sidebar_label: Link to GeoServer
---

DataCatalog has the option to push data to GeoServer. GeoServer is used to publish OGC web services (Web Map Service or WMS, Web Map Tile Service or WMTS and Web Feature Services or WFS) of data in the CKAN Datastore database. SLD’s to style the maps in GeoServer can be uploaded to DataCatalog as well. Main focus of OGC web services is on spatial data. Data which is uploaded to the CKAN DataStore can automatically be published using GeoServer. Each CKAN instance (for example CKAN FIWARE Lab) has a corresponding GeoServer workspace (workspace_ckan_fiware_lab) with a GeoServer datastore (datastore_datastore_ckan_fiware_lab) which opens up the CKAN datastore database (datastore_ckan_fiware_lab) using a database user with read only access to the data.

## Metadata Field - Link to GeoServer

In order to push data to GeoServer 'Link to GeoServer' should be set to 'Yes'. In addition to setting this option to 'Yes', there are a number of other prerequisites that are needed for listings to correctly end up in GeoServer:

- **Visibility should be set to Public** - Metadata field 'Visibility' should be set to 'Yes'.
- **Data must have geometry columns** - Resources within a listing should have geometry columns
- **Resource must be DataStore Active** - Only resources that are in the DataStore can end up in GeoServer
- **Valid layer_srid field** - A valid layer_srid should be provided in the resource metadata
- **Valid layer_extent field** - A valid layer_extent should be provided in the resource metadata

A detailed explanation of the above criteria can be seen on the DataPlatform documentation:
https://www.docs.civity.nl/dataplatform/geoserver_GeoserverIntegration
