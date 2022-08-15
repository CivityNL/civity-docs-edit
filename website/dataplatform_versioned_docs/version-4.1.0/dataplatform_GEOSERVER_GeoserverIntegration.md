---
id: geoserver_GeoserverIntegration
title: Geoserver Integration
sidebar_label: Geoserver Integration
---

DataPlatform has the option to push data to GeoServer. GeoServer is used to publish OGC web services (Web Map Service or WMS, Web Map Tile Service or WMTS and Web Feature Services or WFS) of data in the CKAN Datastore database. SLD’s to style the maps in GeoServer can be uploaded to DataPlatform as well. Main focus of OGC web services is on spatial data. Data which is uploaded to the CKAN DataStore can automatically be published using GeoServer. Each CKAN instance (for example CKAN FIWARE Lab) has a corresponding GeoServer workspace (workspace_ckan_fiware_lab) with a GeoServer datastore (datastore_datastore_ckan_fiware_lab) which opens up the CKAN datastore database (datastore_ckan_fiware_lab) using a database user with read only access to the data.

- **Visibility should be set to Public** - Metadata field 'Visibility' should be set to 'Yes'.
- **Link_to_geoserver_enabled field is True** - Metadata field 'Link to Geoserver' should be set to 'Yes'.
- **Data must have geometry columns** - Resources within a listing should have geometry columns.
- **Resource must be DataStore Active** - Only resources that are in the DataStore can end up in GeoServer.
- **Valid layer_srid field** - A valid layer_srid should be provided in the resource metadata.
- **Valid layer_extent field** - A valid layer_extent should be provided in the resource metadata.

Below you will find an explanation of how to ensure that the above criteria are met and what additional functionality is available:

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide1.png)

---

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide2.png)

---

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide3.png)

---

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide4.png)

---

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide5.png)

---

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide6.png)

---

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide7.png)

---

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide8.png)

---

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide9.png)

---

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide10.png)

---

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide11.png)

---

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide12.png)

---

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide13.png)

---

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/GeoServer/Slide14.png)

---
