---
id: datasets_ManageGeometryColumns
title: Manage Geometry Columns
sidebar_label: Manage Geometry Columns
---
When a file containing geometry is uploaded in CKAN there is a chance that the geometry columns included don’t comply with the default field naming (such as lat, latitude, lon, longitude, x, y). This causes the geo-data to not be handled correctly and the visualization to be impossible. 

For that reason, a new feature is introduced inside CKAN to give an administrator the option to include new keywords that represent any unique geometry field/column name. Including these new values along with the default ones, makes the visualization process a lot more automated.  

> ***Note:*** Column names that have spaces in them, will not be recognised correctly. So for instance 'lon coordinate' is not a valid unique geometry field/column name, use 'lon-coordinate' or 'lon_coordinate' instead.


There are new options introduced inside the **CKAN config options** tab ‘Config’. 

<img class="imageStyle" alt="SCREENCAST: CkanConfigOptions"  src={require('./assets/Dataplatform/ManageGeometryColumns/dataplatform_DATASETS_ManageGeometryColumns_CkanConfigOptions.png').default} />

The admin user can insert new keywords, separated by comma, corresponding to non-default geometry column names that can be found inside a file, like north for latitude and east for longitude.
Before filling/ updating these new geometry configuration options, no map visualization is available automatically, but after an admin is declaring new geometry keywords, data is correctly visualized both in the backend and the portal of **DATAPLATFORM**.

## BACKEND | Visualizing non-default geometry column names
####  Before
<img class="imageStyle"  alt="SCREENCAST: BackendBefore"  src={require('./assets/Dataplatform/ManageGeometryColumns/dataplatform_DATASETS_ManageGeometryColumns_CkanConfigOptions.png').default} />

#### Backend After
<img class="imageStyle" alt="SCREENCAST: BackendAfter"   src={require('./assets/Dataplatform/ManageGeometryColumns/dataplatform_DATASETS_ManageGeometryColumns_BackendAfter.png').default} /> 

## PORTAL | Visualizing non-default geometry column names
#### Before
<img class="imageStyle" alt="SCREENCAST: FrontendBefore"   src={require('./assets/Dataplatform/ManageGeometryColumns/dataplatform_DATASETS_ManageGeometryColumns_FrontendBefore.png').default} />

#### After
<img class="imageStyle" alt="SCREENCAST: FrontendAfter"src={require('./assets/Dataplatform/ManageGeometryColumns/dataplatform_DATASETS_ManageGeometryColumns_FrontendAfter.png').default} />

<br/><br/><br/>
In this <a href="https://youtu.be/GSPkD3FfWqM">video</a> you can watch a thorough demonstration of this new feature.


