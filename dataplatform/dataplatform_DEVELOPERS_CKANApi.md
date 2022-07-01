---
id: developers_CKANApi
title: CKAN API
hide_title: true
sidebar_label: CKAN API
---

## CKAN API

DataPlatform uses the extensive CKAN API. Information about the capabilities of this API can be found at https://docs.ckan.org/en/latest/api/index.html.

In addition, a link to the API and the above documentation can be found at the bottom of the `DATASETS` page.

When resources (e.g., a csv file) have been added to the DataStore, and you click on a resource you will also see a green button with Data API. Here you can find more information about the API endpoints for this specific resource and documentation about the DataStore API available for resources that have been added to the DataStore.

## DataStore and OGR
For uploading data to the DataStore we use OGR (https://gdal.org/programs/ogr2ogr.html)

Formats that are transferred to the DataStore via OGR are:
* CSV
* DGN
* GeoJSON
* GPKG
* Shape file/ZIP
* XLS, XLSX

For these file formats, in most cases we follow the defaults as stated in the following documentation:

Explanation of defaults regarding forwarding data to the Postgres database:
https://gdal.org/drivers/vector/pg.html?highlight=postgres

Explanation of defaults regarding certain file formats such as CSV/XLSX:
https://gdal.org/drivers/vector/csv.html

---
### Civity specific configuration

```
X_POSSIBLE_NAMES=lon*
Y_POSSIBLE_NAMES=lat*
```
Explanation: Column names containing lon or lat are recognized as columns with a Longitude / Latitude (see https://gdal.org/drivers/vector/csv.html).

---

```
GEOM_POSSIBLE_NAMES=geom*,shape*,SHAPE*
```
Explanation: Columns starting with geom, shape or SHAPE are recognized as geometry columns (see https://gdal.org/drivers/vector/csv.html).

---

```
PRECISION =NO
```
Explanation: See under layer creation options -> PRECISION in https://gdal.org/drivers/vector/pg.html?highlight=postgres

---
```
GEOMETRY_NAME='wkb_geometry'
```
Explanation: See under layer creation options -> GEOMETRY_NAME in https://gdal.org/drivers/vector/pg.html?highlight=postgres