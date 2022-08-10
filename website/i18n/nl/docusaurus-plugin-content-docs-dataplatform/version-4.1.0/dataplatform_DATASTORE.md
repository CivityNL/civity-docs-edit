---
id: datastore_Datastore
title: DataStore
sidebar_label: DataStore
---

## DataStore

De <a href="http://docs.ckan.org/en/latest/maintaining/datastore.html" target="_blank">DataStore</a> maakt het mogelijk om specifieke data in DataPlatform te tonen als preview en/of kaart en om data op te vragen via de DataStore API.

## DataStore en OGR

Voor het uploaden van data naar de DataStore maken we gebruik van OGR (https://gdal.org/programs/ogr2ogr.html)

Formaten die via OGR worden doorgezet naar de DataStore zijn:

- CSV
- DGN
- GeoJSON
- GPKG
- Shapefile/ZIP
- XLS, XLSX

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
