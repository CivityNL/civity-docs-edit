---
id: developers_CKANApi
title: CKAN API
hide_title: true
sidebar_label: CKAN API
---
## CKAN API
Dataplatform maakt gebruik van de uitgebreide CKAN API. Informatie over de mogelijkheden van deze API is te vinden op https://docs.ckan.org/en/latest/api/index.html. 

Daarnaast is er een link naar de API en bovenstaande documentatie te vinden onderaan de pagina 'DATASETS'.

Wanneer databronnen (bijv. een csv-bestand) zijn toegevoegd aan de Datastore, en je een databron aanklikt zul je tevens een groene knop met Data API zien. Hier kun je voor deze specifieke databron meer informatie over de API endpoints vinden en documentatie over de Datastore API die beschikbaar is voor databronnen die zijn toegevoegd aan de Datastore.

## Datastore en OGR
Voor het uploaden van data naar de DataStore maken we gebruik van OGR (https://gdal.org/programs/ogr2ogr.html)

Formaten die via OGR worden doorgezet naar de DataStore zijn:
* CSV
* DGN
* GeoJSON
* GPKG
* Shapefile/ZIP
* XLS, XLSX

Voor deze bestandsformaten volgen we in de meeste gevallen de defaults zoals vemeld in de volgende documentatie:

Uitleg van defaults met betrekking tot het doorzetten van data naar de Postgres database:
https://gdal.org/drivers/vector/pg.html?highlight=postgres

Uitleg van defaults met betrekking tot bepaalde bestandsformaten zoals CSV/XLSX:
https://gdal.org/drivers/vector/csv.html

---

### Specifieke configuratie Civity

```
X_POSSIBLE_NAMES=lon* 
Y_POSSIBLE_NAMES=lat* 
```
Uitleg: Kolomnamen waar lon of lat in voorkomt worden herkent als kolommen met een Longitude / Latitude (zie https://gdal.org/drivers/vector/csv.html). 

---

```
GEOM_POSSIBLE_NAMES=geom*,shape*,SHAPE*
```
Uitleg: Kolommen die beginnen met geom, shape of SHAPE worden herkend als geometrie kolommen (zie https://gdal.org/drivers/vector/csv.html). 

---

```
PRECISION =NO 
```
Uitleg: Zie onder layer creation options -> PRECISION in https://gdal.org/drivers/vector/pg.html?highlight=postgres 

---
```
GEOMETRY_NAME='wkb_geometry' 
```
Uitleg: Zie onder layer creation options -> GEOMETRY_NAME in https://gdal.org/drivers/vector/pg.html?highlight=postgres
