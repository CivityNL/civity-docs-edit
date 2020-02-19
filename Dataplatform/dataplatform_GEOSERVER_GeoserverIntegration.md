---
id: geoserver_GeoserverIntegration
title: Geoserver Integration
sidebar_label: Geoserver Integration
---
>This version of ckanext-geoserver plugin currently supports publishing of a single resource/file inside a dataset. **The option of selecting a specific resource to publish is not yet implemented**. At the moment, the script automatically recognizes the only resource available and provides all the information needed to be published. If there is more than one resource inside the dataset, and the user tries to publish them, even though the pop up window may load with the correct options, the publishing process will fail.


## Publishing OGC Data

This version of this plugin recognizes successfully only **.csv and .shp (inside a zip) files**. 

Shape-files should be added as ZIP-files. For a shapefile to be valid, the .zip file has to include at least these 4 mandatory filetypes:

*   .dbf
*   .prj 		
*   .shp 	
*   .shx

If the filetype is supported, a green button appears inside the dataset page, named *Publish OGC*. Pressing this button will generate the metadata of our resource/file, recognize the geometry field and the projection system. 

> ***Note***: For the *Publish OGC* button to be available, the meta data field Visibility must be set to *Public*

<img class="imageStyle shadowing" src="/docs/assets/Dataplatform/GeoServer/dataplatform_GEOSERVER_publiceerButton.png" alt="imageStyle: Geoserver PubliceerOGC button">

After pressing this button, a new page will popup including options about the geometry field that was recognized, the input projection system and the output projection system (SRID). These fields may be edited by the user. 

Geometry inside a CSV file can be recognized in 3 forms: 
* LAT/LNG
* WKT
* JSON

Additionally:
* The projection system inside a CSV can be recognized between ***RD New (EPSG: 28992)*** or ***WGS 84 (EPSG: 4326)***.

<img class="imageStyle shadowing" src="/docs/assets/Dataplatform/GeoServer/dataplatform_GEOSERVER_OGCchecker.png" alt="imageStyle: OGC Checker pop-up">

The progress of publishing is shown in a toast notification, seen at the top of the page:

<img class="imageStyle" src="/docs/assets/Dataplatform/GeoServer/dataplatform_GEOSERVER_toast.png" alt="imageStyle: toast notification">

...and is compelte when the following message is displayed:

<img class="imageStyle" src="/docs/assets/Dataplatform/GeoServer/dataplatform_GEOSERVER_toastComplete.png" alt="imageStyle: toast notification">

Your data is now available as a Geoserver service.

### WMS and WFS Files
Two new resources/files (**WMS** and **WFS**) are now projected in the dataset. Navigating inside these new resources, the user has access to the newly generated Geoserver service from the URL.

<img class="imageStyle" src="/docs/assets/Dataplatform/GeoServer/dataplatform_GEOSERVER_WMS.png" alt="imageStyle: WMS Page">

WFS resource, apart from the service URL, there are multiple download options provided.

<img class="imageStyle" src="/docs/assets/Dataplatform/GeoServer/dataplatform_GEOSERVER_WFS.png" alt="imageStyle: WFS Page">

## Unpublish OGC Data
To unpublish the data from Geoserver click the red button *Unpublish OGC* (*Verwijderen OGC*) from the dataset page. The WMS and WFS files will be removed; you may also disable the schema_descriptor.

<img class="imageStyle" src="/docs/assets/Dataplatform/GeoServer/dataplatform_GEOSERVER_Unpublish.png" alt="imageStyle: Remove Geoserver Data">

