---
id: dataplatform_Introduction
title: DataPlatform Introductie
sidebar_label: Introductie
---

DataPlatform is de basisvoorziening voor het beheren van data. DataPlatform gaat vooral over het op een gestructureerde manier publiceren van open data, met de juiste metadata, gericht op de externe gebruiker.

## CKAN

> CKAN is de tool om de gegevens te beheren. Hiermee kun je gegevens wijzigen, toevoegen en verwijderen. Om gegevens te manipuleren, moet je echter over geldige inloggegevens beschikken (neem hiervoor contact op met de systeembeheerder).

DataPlatform maakt gebruik van de open source software CKAN. Dit is wereldwijd de meest gebruikte software voor open data-omgevingen.

CKAN staat voor "Comprehensive Knowledge Archive Network", een <a href="https://en.wikipedia.org/wiki/Web_application" target="_blank">web-based</a>, <a href="https://en.wikipedia.org/wiki/Open-source_software" target="_blank">open-source</a> managementsysteem voor de opslag en distributie van <a href="https://en.wikipedia.org/wiki/Open_data" target="_blank">open data</a>..

Het DataPlatform maakt gebruik van een CKAN-instantie als onze webgebaseerde tool voor het onderhoud van datasets, databronnen en metadata.

<!-- De CKAN-instantie is te vinden op <a href="https://ckan-dataplatform-nl.dataplatform.nl/" target="_blank">ckan-dataplatform-nl.dataplatform.nl</a>. -->

De CKAN-omgeving van DataPlatform bevat extra uitbreidingen zoals de DataStore (API), Data Dictionary (Data woordenboek) en GeoServer.

## DataPlatform - basisconfiguratie

De DataPlatform-omgeving bestaat in de basis uit een Welkomstpagina, Datasets, Organisaties en Thema's.

### Welkomstpagina

> De Welkomstpagina kan alleen door systeembeheerders worden aangepast. Voor DataPlatform is Civity systeembeheerder.

DataPlatform heeft een welkomstpagina met een korte introductietekst en onder meer een zoekbalk om direct naar data te zoeken.

### Datasets

CKAN maakt gebruik van 'datasets' om data te organiseren (in CKAN _packages_ genoemd). Een dataset is een pakket met data, bijvoorbeeld 'de criminaliteitscijfers in de stad' of 'de vochtigheidsmetingen van een weerstation'. Wanneer de gebruiker naar data zoekt, zijn de resultaten zichtbaar in de afzonderlijke datasets.

Datasets bestaan uit twee hoofdaspecten:

- Metadata
- Éen of meerdere databronnen of verwijzingen naar URL's

#### Publieke en privé datasets

Datasets kunnen worden gemarkeerd als publiek of privé. Publieke datasets zijn voor iedereen zichtbaar. Privé-datasets kunnen alleen worden bekeken door ingelogde gebruikers die lid zijn van de organisatie van de dataset. Privé-datasets worden niet weergegeven in zoekopdrachten naar datasets, tenzij de ingelogde gebruiker (of wanneer de gebruiker geïdentificeerd is via API-key) toestemming heeft om ze te openen.

### Organisaties

DataPlatform gebruikt organisaties om datasets te organiseren. Metadatarecords kunnen tot één organisatie behoren en elke organisatie beheert de toegang tot haar datasets via gebruikersrollen.

### Thema's

Het Thema's tabblad toont een overzicht van datasets binnen een bepaald thema. De thema's zijn afkomstig uit de DCAT standaard waardelijst. Het klikken op een thema fungeert als een filter, om de relevante datasets te tonen. Het aantal dat bij elk thema wordt weergegeven, verwijst naar het aantal datasets.

<!-- ### Overige opties en instellingen

Verschilt per klant. -->

#### Taalkeuze

> De taalkeuze bevindt zich in de voettekst.

CKAN ondersteunt vele Europese talen. Momenteel is het Nederlandse CKAN DataPlatform beschikbaar in het Nederlands en Engels;