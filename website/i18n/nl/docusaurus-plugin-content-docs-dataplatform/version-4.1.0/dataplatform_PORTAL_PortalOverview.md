---
id: portal_Overview
title: Overzicht
sidebar_label: Overzicht
---

Het Open Data Portaal biedt een omgeving waar je je doelen, showcases en verhalen kunt benadrukken. Er is een aparte pagina waarop alle datasets worden weergegeven. Via de filter- en zoekopties kunnen gebruikers eenvoudig naar een dataset navigeren. De datasets kunnen ook worden gerangschikt volgens de thema's of organisaties / afdelingen.

De datasets worden altijd getoond met de metadata en een downloadoptie. Daarnaast kan er een contactformulier worden toegevoegd. Indien van toepassing wordt ook een tabel, kaart of API verstrekt.

## Welkomstpagina

De welkomstpagina van het open data portaal bevat inleidende beschrijving van wat op het portaal te vinden is. Daarnaast bevat deze pagina vaak meer uitleg over welke organisaties er op het portaal data publiceren en kunnen er algemene voorwaarden beschreven zijn. Daarnaast zijn er contactgegevens te vinden van de beherende organisatie.

![imageStyle: Dataplatform Portal](assets/Dataplatform/PortalOverview/home.PNG)

## Zoeken

De zoekbalk biedt automatische aanvulling. Begin met typen om suggesties te krijgen, op basis van de titel, beschrijving of tags.

![imageStyle: Dataplatform Portal Searchbar](assets/Dataplatform/PortalOverview/dataplatform_PORTAL_Search.png)

## Overzicht datasets

Wanneer je op 'Data' klikt krijg je een overzicht van alle beschikbare datasets. Elke dataset bevat een overzicht van de beschikbare weergaveopties. Op de overzichtspagina kunt je de zoekresultaten verder verfijnen door het 'Filters' menu te gebruiken.

![imageStyle: Dataplatform Portal Searchbar](assets/Dataplatform/PortalOverview/dataplatform_PORTAL_Overview.PNG)

## Filters

:::info Let op!

Specifieke filteropties kunnen per portaal verschillen.

:::

De filteropties bieden verschillende manieren om naar bepaalde datasets te zoeken. Actieve filters worden weergegeven. Met de optie "Verwijder" worden alle filters verwijderd. Het is ook mogelijk om afzonderlijke filters te wissen, door middel van het kruisje achter een filter.

<table class="table-imageStyles">
    <tbody>
        <tr>
            <td>
                <img  alt="imageStyle: Dataplatform Portal Filters" src={require('./assets/Dataplatform/PortalOverview/dataplatform_PORTAL_FilterView1.png').default} />
            </td>
        </tr>
    </tbody>
</table>

## Dataset tabbladen

De volgende tabs zijn beschikbaar wanneer je een specifieke dataset selecteert:

1. Informatie: bevat een beschrijving, tags, metadata en statistieken over de dataset.
2. Tabelweergave: toont een preview van een geselcteerde databron.
3. Kaartweergave: toont een preview van de data op de kaart.
4. Download: downloaden van beschikbare databronnen.
5. Contactformulier: stellen van vragen op datasetniveau.

Hieronder vind je een uitgebreidere beschrijving van de verschillende tabbladen:

### 1. Informatie

Als je op informatie klikt, zijn de volgende categorieën informatie beschikbaar:

- Beschrijving
- Tags
- Metadata
- Statistieken

**Beschrijving**: Hier vind je een omschrijving van de dataset in het algemeen en mogelijk ook over de databronnen die onderdeel zijn van de dataset. Hoe uitgebreid deze beschrijving is, zal per dataset verschillen.

**Tags**: Tags, ook wel labels of trefwoorden genoemd, zijn een manier om een dataset te classificeren. Via tags kunnen vergelijkbare datasets worden gevonden. Wanneer je op een tag klikt kom je op een overzichtspagina van datasets waar deze tag ook is gebruikt.

**Metadata**: Als je op metadata klikt, zie je een overzicht van alle metadatavelden die bij de dataset horen. Het merendeel van de metadatavelden is afkomstig uit de DCAT standaard. Hierdoor kunnen open datasets, automatisch worden weergegeven in de nationale dataregisters en het EU-portaal. Daarnaast is er voor geografische datasets een aantal specifieke metadatavelden aanwezig om de data door te kunnen zetten naar Geonetwork (Nationaal Georegister).

**Statistieken**: Hier vind je de laatst bijgewerkt datum, het aantal paginabezoeken en de waardering van de dataset.

:::caution Let op!

Een paginabezoek wordt geteld wanneer een dataset via de CKAN-url wordt bekeken. Het bekijken van de data via het portaal wordt dus niet automatisch als paginabezoek geteld.

:::

### 2. Tabel

Voor databronnen die in de DataStore zijn opgeslagen is de tabelfunctionaliteit beschikbaar. De tabel toont een preview van de data per databron. Als je op het 'oog'-pictogram drukt, kun je via een pop-up in één oogopslag een overzicht zien van de kolomnamen en waarden voor een specifieke rij.

#### Datastore-tabel downloaden

Onder de tabel vind je de optie om de DataStore-tabel te downloaden. Met de DataStore-tabel download kun je per databron de DataStore-tabel, zoals getoond bij de preview, downloaden.

:::caution Let op!

De DataStore-tabel download kan verschillen van de download via het 'Download' tabblad. Het 'Download' tabblad bevat altijd het orignele databestand. Wanneer het databestand wordt doorgezet naar de DataStore is het mogelijk dat er extra kolommen aan het databestand zijn toegevoegd, bijvoorbeeld om de tabel- of kaartweergave te verbeteren.

:::

#### Data woordenboek

Het Data woordenboek kan worden gebruikt om de inhoud van een dataset explicieter te beschrijven aan de hand van labels en beschrijvingen. Soms zijn bijvoorbeeld de kolomnamen die in een databron voorkomen niet erg duidelijk voor een eindgebruiker. Klik [hier](./dataplatform_DATASETS_DataDictionary.md) voor meer informatie over het Data woordenboek.

#### Metadata

Hier vind je de metadata die hoort bij de geselecteerde _databron_.

### 3. Kaart

Via het tabblad 'Kaart' kun je een preview vinden van geografische data. Via onderstaande screenshots wordt de beschikbare functionaliteit verder toegelicht:

#### Welkomstpagina:

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/PortalOverview/map_1.png)

#### Data tabblad:

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/PortalOverview/map_2.png)

#### Kaart tabblad:

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/PortalOverview/map_3.png)

![imageStyle: Dataplatform Portal Map](assets/Dataplatform/PortalOverview/map_4.png)
![imageStyle: Dataplatform Portal Map](assets/Dataplatform/PortalOverview/map_5.png)
![imageStyle: Dataplatform Portal Map](assets/Dataplatform/PortalOverview/map_6.png)
![imageStyle: Dataplatform Portal Map](assets/Dataplatform/PortalOverview/map_7.png)
![imageStyle: Dataplatform Portal Map](assets/Dataplatform/PortalOverview/map_8.png)
![imageStyle: Dataplatform Portal Map](assets/Dataplatform/PortalOverview/map_9.png)

### 4. Downloaden

Hier kun je de originele databronnen downloaden in de beschikbare formaten. Daarnaast is er onder het kopje API een uitleg te vinden hoe je via de DataStore API de data kunt doorzoeken.

#### Downloaden van data

Er zijn verschillende manieren om een dataset te downloaden.

1.  Als je op het tabblad 'Data' klikt, zie je alle beschikbare datasets. Ze worden elk weergegeven in een zogenaamde _card_. Aan de rechterkant van de card zie je een 'download'-knop. Door erop te klikken kom je op de pagina met alle downloadbare bestanden en een overzicht met endpoints. Door op de cloud achter het bestand te klikken, kun je het bestand downloaden.

![Download](assets/Dataplatform/DownloadingDatasets/DatasetDownload.png)

![Download01](assets/Dataplatform/DownloadingDatasets/DatasetDownload01.png)

2.  Als je op een dataset hebt geklikt om erachter te komen of het de juiste dataset is, kun je naar het downloadtabblad gaan. Daar vind je alle bestanden om te downloaden.

![Download02](assets/Dataplatform/DownloadingDatasets/DatasetDownload02.png)

### 5. Contactformulier

Bij sommige portalen is er een contactformulier aanwezig bij een dataset. Hier vind je een formulier waar je vragen over de dataset kunt achterlaten. Deze vragen komen bij de organisatie achter het open data portaal terecht.

## Thema's

Het Thema's tabblad toont een overzicht van datasets binnen een bepaald thema. De thema's zijn afkomstig uit de [DCAT standaard waardelijst](https://waardelijsten.dcat-ap-donl.nl/overheid_taxonomiebeleidsagenda.json). Het klikken op een thema fungeert als een filter, om de relevante datasets te tonen. Het aantal dat bij elk thema wordt weergegeven, verwijst naar het aantal datasets.

![imageStyle: Dataplatform Portal Themes](./assets/Dataplatform/PortalOverview/dataplatform_PORTAL_Themes.png)

## Taal selectie

Door op de wereldbol rechtsbovenin te klikken, kun je van taal wisselen. Daarnaast kun je daar de huidige versie van het open data portaal terugvinden.

:::note Let op!

De welkomstpagina-teksten en teksten behorende bij een specifieke dataset zullen niet worden aangepast naar de geselecteerde taal.

:::
