---
id: verplichte_metadatavelden
title: DataCatalog - Metadata Schema
sidebar_label: DataCatalog - Metadata Schema
---

> As opposed to DataPlatform, DataCatalog provides a client with the opportunity to configure a highly customized metadata schema

DataCatalog supports multiple metadata schemas. What fields are present in the metadata schema is controlled using JSON configuration files. The metadata schema consists of a number of building blocks. These building blocks can be combined to create a complete schema. In DataCatalog, a client has more degrees of freedom in defining their metadata schema, since it's an internal catalog. If a listing is forwarded from DataCatalog to DataPlatform a mapping is applied to map the customer specific metadata schema to the DataPlatform harmonized one. Missing values will be replaced with default one. Please consult Civity for an overview of the mapping for your specific DataCatalog schema.

Setting up a metadata schema for DataCatalog is done by Civity.

## Schema building blocks

Although a schema can, in consultation with Civity, be customized depending on a client's needs, the default set up of most DataCatalog clients consists of a number of fundamental building blocks.

### CKAN

The first (and only mandatory building block) contains the fields required by CKAN. These include for example a title, description, keywords and a license.

### DCAT

The second important building block contains the DCAT fields. Currently, this building block is by far the biggest building block, defining more fields than any other building block. Different DCAT application profiles which can be implemented in DataCatalog have been created for different countries. Currently, <a href="https://docs.dataportal.se/dcat/en/" target="_blank" rel="noreferrer noopener">DCAT-AP-SE (Sweden)</a> and <a href="https://dcat-ap-donl.readthedocs.io/en/latest/" target="_blank" rel="noreferrer noopener">DCAT-AP-DONL (the Netherlands)</a> are available.

:::caution

Since a DCAT building block is not mandatory, clients can choose to not include (certain) mandatory DCAT fields in their schema. Be aware that this can lead to mapping issues when certain data gets pushed to DataPlatform, since DataPlatform consists for a large part out of DCAT metadata fields.

::::

### NGR

For Dutch customers, a building block to collect the information required by the Nationaal Georegister (NGR), a GeoNetwork instance, is present. The metadata fields in this building block consist of geo-data metadata and are based on ISO 19115.

### Customer specific

Last but not least, a customer specific building block is created. Using this building block a) fields can be added, b) optional fields can be disabled, c) default values for the organization which seldom (in which case there is an option to override the default value) or never (in which case the field may be hidden) change can be set, d) the code lists from DCAT can be restricted to codes actually in use by the organization and e) optional fields can be turned into mandatory fields.

## User Interface layout

In addition to customizing the schema itself, there is also the possibility to customize the user interface by grouping certain metadata together in the metadata edit screen. These groups can be collapsed or expanded when editing/adding a listing's metadata. In addition, with a checkbox, there is the possibility to only show mandatory fields.

:::note Note

Adjusting the grouping of fields can only be done by Civity

:::

<!-- Future: further sub-divide the schema building blocks in order to allow for a more fine grained selection of components:

- CKAN core
- Privacy/GDPR related fields
- DCAT-AP
- GeoDCAT
- DCAT-AP-SE/DCAT-ap-DONL/etc.
- Customer specific modifications -->

<!-- > Binnenkort zal een nieuw metadataschema worden toegevoegd aan Datacatalogus. Dit schema zal gebaseerd zijn op DCAT-AP-DONL-1.1, DCAT-SE en ISO 19115.

De basis voor een goede vindbaarheid is een correcte beschrijving van de data. Hierbij speelt metadata een belangrijke rol. Datacatalogus heeft de DCAT-standaard voor metadata geïmplementeerd. Deze standaard wordt gebruikt door bijvoorbeeld het landelijke register data.overheid.nl en de EU-portal.

Binnen Datacatalogus is er daarnaast de mogelijkheid tot het inrichten van flexibele metadataschema’s voor verschillende vermeldingstypen. Naast de metadatavelden die voldoen aan de DCAT-NL standaard, bevat zo’n vermelding binnen de Datacatalogus een aantal extra (optionele) metadatavelden. Deze flexibele schema’s zijn bedoeld voor vermeldingen die meer of andere informatie bevatten dan de ‘standaard’ datasets/bronnen. Zo vraagt een geodataset of een WMO-dashboard vaak om meer of andere metadata. Deze metadataschema’s zijn beschikbaar voor dit soort specifieke informatieproducten.

De metadata van een vermelding is te vinden onder het kopje Extra Informatie wanneer je een vermelding aanklikt.

## Verplichte metadatavelden

Voor dataset/databron vermeldingen is een aantal verplichte velden. Deze verplichte velden worden in deze paragraaf beschreven.

### Titel
Beschrijving van het dataproduct in steekwoorden

### Beschrijving
Uitgebreide beschrijving van het dataproduct

Titel en beschrijving zijn terug te vinden als je op de vermelding klikt.

### Dienst
Elke vermelding moet onder een Dienst vallen. Via een keuzemenu kan de Dienst worden bepaald.

### Trefwoorden/Tags
Omschrijving van dataproduct in trefwoorden. Deze zijn vooral van toepassing bij het zoeken en/of filteren van vermeldingen.

Daarnaast zijn er verplichte metadatavelden die terug te vinden zijn onder Extra Informatie wanneer je een vermelding aanklikt. Ook worden sommige velden gebruikt om op te filteren.

*	Bron    -   Vrij om in te vullen. Bronnen waaruit gegevens van het dataproduct komen.

*	Doel    -   Vrij om in te vullen. Wat is het doel van het dataproduct?
*	Thema   -   Keuze uit 1 van de 19 thema’s
*	Bestandstype    -   Keuze uit vooraf door de gemeente bepaalde lijst.
*	Bijgewerkt  -   Datum waarop het dataproduct voor het laatst is bijgewerkt.
*	Aangemaakt  -   Datum van aanmaken vermelding/dataproduct
*	Updatefrequentie    -   Keuze uit vooraf vastgestelde opties, te bepalen door de gemeente.
*	Eigenaar    -   Eigenaar van het dataproduct
*	Contactpersoon  -   Naam van contactpersoon van de vermelding
*	E-mail contactpersoon   -   Gegevens om contact op te kunnen nemen.
*	Verstrekker -   Naam van verantwoordelijke voor publicatie van de vermelding/dataproduct
*	Bronhoudende organisatie    -   Keuze uit een vaste lijst van bronhoudende organisaties, opgesteld door de gemeente
*	Privacy gevoelig    -   Keuze uit Ja/Nee/Onbekend
*	Verantwoordelijk voor beheer    -   Persoon of organisatie verantwoordelijk voor beheer van vermelding/dataproduct
*	Status  -   Keuze uit Bijgewerkt/Niet langer ondersteund/ In onderzoek/Ingetrokken
*	Dataclassificatie  -    Keuze uit Openbaar/Intern/Vertrouwelijk/Strikt Vertrouwelijk
*	Publiceren  -   Keuze uit Ja/Nee. Zolang een bron niet is gepubliceerd, is deze niet vindbaar/zichtbaar zonder juiste rol/rechten. -->
