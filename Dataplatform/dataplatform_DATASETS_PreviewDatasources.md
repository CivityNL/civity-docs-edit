---
id: datasets_PreviewDatasources
title: Preview Datasources
sidebar_label: Preview Datasources
---

> The CKAN resource page can contain one or more visualizations of the resource data or file contents (a table, a bar chart, a map, etc). These are commonly referred to as resource views.

### Preview in CKAN:

Different plugins are included in Dataplatform CKAN to preview different resource file types:

* Data Explorer 

    The Data Explorer consists of a ***Grid***, ***Graph***, and ***Map view***
    
    * Grid view: will display a table for tabular data (CSV/XLS/XLSX)
    * Graph: different options to display a graph for CSV/Excel files
    * Map view: will show a map for CSV, Excel, or GeoJSON files which contain geographical coordinates. 

    ***Note:*** This plugin requires data to be in the [DataStore](datasets_AddingDatasources#datastore)

* Text view 
    * Is able to display plain text files, JSON, or XML files (can depend on configuration of the plugin)

* Image view
    * Is configured to show PNG, JPEG or GIF files

### FAQ

#### Q: I don't see a view even though a view should be displayed according to the documentation
A: For tabular data (i.e., csv/xls files) the table view is automatically added as these files get uploaded to the Data Store, which is a prerequisite for loading a data explorer view. This should always work if a csv/excel file is uploaded through the normal CKAN user interface. If, however, this is done via an API call, it could be that some parameters are missing (e.g., the file type was not specified), which could end up in the table view not being created. If this is the case, just follow the steps provided below to create a View.

#### Q: How can I add a view?
A: You can add a View by going to: ***Manage***->***Views***->***New View***-> ***Data Explorer***. 

    
### Preview portal:

On the portal there is a ***Table view*** and ***Map view***:

#### Table view

#### Map view



#### WORK IN PROGRESS SCREENSHOTS WILL FOLLOW