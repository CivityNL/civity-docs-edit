---
id: geoserver_GeoserverIntegration
title: Geoserver Integration
sidebar_label: Geoserver Integration
---

If the filetype is supported, a new button appears inside the dataset page, named ”Publiceer OGC”. 

By pressing this button we generate the metadata of our resource/file, recognize the geometry field and the projection system. 

NOTICE: This version of ckanext-geoserver plugin currently supports publishing of a single resource/file inside a dataset. The option of selecting a specific resource to publish is not yet implemented. At the moment, the script automatically recognizes the only resource available and provides all the information needed to be published. If there are more than one resources inside the dataset, and the user tries to publish them, even though the pop up window may load with the correct options, the publishing process will fail.

screenshot

A new page should pop including options about the geometry field that was recognized, the input projection system and the output projection system (SRID) that the user can edit. 
* Geometry inside a csv file can be recognized in 3 forms: lat/lng, wkt, json. 
* Projection system inside a csv can be recognized between RD New (EPSG: 28992) or WGS 84 (EPSG: 4326)

screenshot

The progress of publishing is shown in the upper side of the window above…

screenshot

…and is complete when the following message is displayed.

screenshot

SUCCESS! The data is now available as a GEOSERVER service.

Two new resources/ files (WMS & WFS) are now projected in the dataset. Navigating inside these new resources , the user has access to the newly generated Geoserver service from the URL.

screenshot

WFS resource, apart from the service URL, there are multiple download options provided.

screenshot

Unpublish dataset
To Unpublish the data from Geoserver just click the red button ‘Verwijderen OGC’ from the dataset page. The two newly added files are going to disappear. You can also disable the schema_descriptor.

screenshot

