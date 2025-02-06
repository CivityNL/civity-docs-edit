---
id: harvesting_Harvesting
title: Uitleg
hide_title: true
sidebar_label: Uitleg
---
## Wat is een Data Harvester?

> Harvesters importeren datasets van externe bronnen in een CKAN-instantie. Dit wordt gedaan door de metadata van deze externe bron te mappen naar CKAN-metadatavelden. 

CKAN gebruikt de ([ckanext-harvest](https://github.com/ckan/ckanext-harvest)) extensie, die een interface biedt voor het bouwen van aangepaste harvester. Deze interface heeft drie fasen:
1. De **gather**-fase verzamelt alle resource-ID's die in de volgende fase moeten worden opgehaald.
2. De **fetch**-fase haalt de inhoud van de objecten op afstand op en slaat ze op in de database.
3. De fase **import** voert alle noodzakelijke acties uit bij de opgehaalde bron.

Specifieke documentatie over de *CKAN Remote Harvesting extensie* is <a href="https://github.com/ckan/ckanext-harvest" target="_blank">hier</a> te vinden

---

## Soorten harvesters

Dataplatform biedt de volgende opties om data te harvesten:
1. CKAN harvester
2. JSON DCAT harvester
3. Generieke DCAT RDF harvester
4. Civity CSW-server harvester


### CKAN harvester
* De CKAN Harvester is een voorbeeld van een custom harvester. Met deze harvester kun je data van een externe CKAN-instantie importeren in jouw eigen CKAN-instantie.

### JSON DCAT-harvester
* De JSON DCAT Harvester is een plug-in die deel uitmaakt van de DCAT-extensie <a href="https://github.com/ckan/ckanext-dcat" target="_blank">ckanext-dcat</a>. Met deze harvester kun je JSON-objecten importeren op basis van DCAT-metadatavelden en deze DCAT-metadatavelden mappen op CKAN-velden.

    <a href="https://github.com/ckan/ckanext-dcat#json-dcat-harvester" target="_blank">Ga naar CKAN-documentatie JSON DCAT Harvester</a>

### Generieke DCAT RDF Harvester
* Deze harvester is een andere custom harvester die deel uitmaakt van de DCAT-extensie.

### Civity CSW Server
* Dit is een custom harvester van Civity om CSW's te harvesten.