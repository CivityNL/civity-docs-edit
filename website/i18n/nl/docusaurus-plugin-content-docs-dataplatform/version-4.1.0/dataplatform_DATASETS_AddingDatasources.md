---
id: datasets_AddingDatasources
title: Databronnen toevoegen
sidebar_label: Databronnen toevoegen
---

> Alle bronnen worden opgeslagen in een dataset.

Bronnen kunnen alleen aan datasets worden toegevoegd nadat de dataset is toegevoegd en geconfigureerd.

## Handmatig uploaden

> **CSV**- en **(geo)JSON**-bestandstypen zijn toegankelijk via de DataStore API. Andere datatypen worden opgeslagen en verstrekt als downloadlink.

Een bron kan een soort bestand zijn dat machinaal leesbaar is; dit omvat, maar is niet beperkt tot: **CSV**-, **JSON**-, **PDF**- en **JPG**-bestandstypen. Daarnaast kunnen bronnen ook een link zijn.

Zie <a href="#link-to-source">Link naar bron</a> voor meer informatie over databronnen

### Aanvullende details

Met dit veld kun je elke vorm van aanvullende informatie toevoegen.

Typische aanvullende informatie omvat:

- Naam: _Dit zal de bestandsnaam zijn, zorg ervoor dat deze beschrijvend is_
- Beschrijving: _Geef uitleg over de inhoud van het bestand_
- Formaat: _Het formaat waarin de bron wordt geleverd (CSV, XLS, JSON, PDF, enz.)._

Als je extra bronnen wilt toevoegen, kies je 'Opslaan en nog een toevoegen'. Als je er maar één hebt, kies je 'Einde'.

> CKAN slaat nu het bestand op en maakt een dataset. Het resulterende item is binnen 30 minuten zichtbaar. Als de zichtbaarheid is ingesteld op **_Openbaar_**, wordt de dataset zichtbaar op <a href="https://www.dataplatform.nl" target="_blank" rel="noreferrer noopener">DataPlatform</a>. **_Private_** datasets zijn niet zichtbaar op DataPlatform.

## Link naar bron

Alle bronnen worden opgeslagen in datasets. Alleen wanneer een dataset is ingesteld, mag een bron worden toegevoegd.

### Bron als link

> Linked data is niet beschikbaar als aanroepbare API

Wanneer data op een andere locatie worden opgeslagen, kun je deze toevoegen als gekoppelde bron. Elke soort link kan worden gebruikt: _URL_, _URI_, of een _API_.

## Real-time data

> Real-time data kunnen als bron worden toegevoegd, maar de installatie en configuratie moeten door Civity worden afgehandeld.

Er moet een verbinding worden geconfigureerd tussen de API en Dataplatform. Fiware-componenten worden gebruikt om velden van de API te configureren, die vervolgens worden vertaald in nuttige open data.
