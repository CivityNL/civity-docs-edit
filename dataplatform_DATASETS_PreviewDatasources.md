---
id: datasets_PreviewDatasources
title: Preview Datasources
sidebar_label: Preview Datasources
---

> The CKAN resource page can contain one or more visualizations of the resource data or file contents (a table, a bar chart, a map, etc). These are commonly referred to as resource views.

## Preview in CKAN

Different plugins are included in Dataplatform CKAN to preview different resource file types:

* Data Explorer 

    The Data Explorer consists of a ***Grid***, ***Graph***, and ***Map view***
    
    * Grid view: will display a table for tabular data (CSV/XLS/XLSX)
    * Graph: different options to display a graph for CSV/Excel files
    * Map view: will show a map for CSV, Excel, or GeoJSON files which contain geographical coordinates. 

    ***Note:*** This plugin requires data to be in the [DataStore](datasets_AddingDatasources#datastore)

![Data Explorer example](assets/Dataplatform/PreviewDatasources/Data_explorer.PNG)


* Text view 
    * Is able to display plain text files, JSON, or XML files (can depend on configuration of the plugin)

![JSON example](assets/Dataplatform/PreviewDatasources/JSON_example.PNG)

* Image view
    * Is configured to show PNG, JPEG or GIF files

![PNG example](assets/Dataplatform/PreviewDatasources/PNG_example.PNG)

More information on previewing datasources can be found in <a href="https://docs.ckan.org/en/2.8/maintaining/data-viewer.html" target="_blank">CKAN documentation</a>

### FAQ

#### Q: Why is there no view even though a view should be displayed according to the documentation?

**A:** For tabular data (i.e., csv/xls files) the table view is automatically added as these files get uploaded to the Data Store, which is a prerequisite for loading a data explorer view. This should always work if a csv/excel file is uploaded through the normal CKAN user interface. If, however, this is done via an API call, it could be that some parameters are missing (e.g., the file type was not specified), which could end up in the table view not being created. If this is the case, just follow the steps provided below to create a View.

#### Q: How can I add a view?
**A:** You can add a View by going to: ***Manage***->***Views***->***New View***-> ***Data Explorer***. 

---

## Preview Portal

On the portal there is a ***Table view*** and ***Map view***:

#### Table view

On the portal a table preview is automatically added for CSV files. The table will show a maximum of 100 items a page.

![Table example](assets/Dataplatform/PreviewDatasources/Table_portal.PNG)

#### Map view

Will be shown when ***Geo-Enabled*** is set to yes and coordinates are included. 

#### CSV

For CSV datasources map will show the first 100 records/items. If you click *Show Table* below the map view. You are able to go to the next 100 items or go back to the previous ones.

![Map example](assets/Dataplatform/PreviewDatasources/Map_portal.PNG)

#### GeoJSON

GeoJSON datasources will show all records at once on the map. See the example below.

![Map example](assets/Dataplatform/PreviewDatasources/GeoJSON.PNG)



> **Note:** The ***Geo-Enabled*** meta data field can be set to ***Yes*** for every type of resource. Therefore by default this option is set to ***No*** and should only be set to ***Yes*** for datasources that can be displayed on a map

### FAQ

#### Q: I've set the Geo-Enabled field to yes, why is the map still not displayed correctly on the portal?

**A:** Make sure to check the following things:
*   Are you using one of the filetypes that support the map functionality (i.e., CSV or GeoJSON)?
*   Does the CSV file consist of geometry columns, and do the column names comply with the default field keywords? See documentation on [managing geometry columns](datasets_ManageGeometryColumns)
*   Is your datasource missing any values?

