---
id: dataplatform_Introduction
title: DataPlattform Introduktion
sidebar_label: Introduktion
---

DataPlattform är den grundläggande funktionen för att hantera data. DataPlattform handlar främst om att publicera öppen data på ett strukturerat sätt, med rätt metadata, riktat till de externa användarna.

## CKAN

> CKAN är verktyget för att hantera data. Det låter dig ändra, lägga till och ta bort data. Men för att kunna manipulera data måste du ha giltiga inloggningsuppgifter (kontakta din systemadministratör för detta).

DataPlattform använder programvaran CKAN med öppen källkod. Detta är den mest använda programvaran för öppna datamiljöer över hela världen.

CKAN står för "Comprehensive Knowledge Archive Network", som är ett <a href="https://en.wikipedia.org/wiki/Web_application" target="_blank">webbaserat</a>, <a href= "https://en.wikipedia.org/wiki/Open-source_software" target="_blank">öppen källkod</a>hanteringssystem för lagring och distribution av<a href="https://en.wikipedia .org/wiki/Open_data" target="_blank">öppna data</a>.

Civitys DataPlattform använder en CKAN-instans som vårt webbaserade verktyg för datauppsättning, resurs och metadataunderhåll.

CKAN-miljön i DataPlattform har utökats med ytterligare tillägg som DataStore (API), Data Dictionary (Data dictionary) och GeoServer.

## Dataplattformens baskonfiguration

DataPlattform-miljön består i grunden av en välkomstsida, datamängder, Organisationer och teman.

### Välkomstsida

> Välkomstsidan kan endast anpassas av systemadministratörer. Civity är systemadministratör för DataPlattform.

DataPlattform har en välkomstsida med en kort introduktionstext och bland annat en sökfält för att söka direkt efter data.

### Datauppsättningar

DataPlattform använder 'dataset' för att organisera data (som kallas _paket_ i CKAN). En datauppsättning är ett datapaket, till exempel 'brottssiffrorna i staden' eller 'fuktighetsavläsningarna från en väderstation'. När användaren söker efter data syns resultaten i de enskilda datamängderna.

Datauppsättningar består av två huvudaspekter:

- En samling av en eller flera datakällor (som kallas _resurser_ i CKAN)
- Metadata

#### Offentliga och privata datauppsättningar

Datauppsättningar kan markeras som offentliga eller privata. Offentliga datauppsättningar är synliga för alla. Privata datauppsättningar kan endast ses av inloggade användare som är medlemmar i datauppsättningens organisation. Privata datauppsättningar visas inte i datauppsättningssökningar om inte den inloggade användaren (eller användaren som identifieras via en API-nyckel) har behörighet att komma åt dem

#### Organisationer

DataPlattform definierar organisationer för att organisera datamängder. Metadataposter kan tillhöra en enskild organisation och varje organisation styr åtkomsten till sina datauppsättningar via användarroller.

#### Teman

### Andra alternativ och inställningar

#### Språkval

> Språkväljaren finns i sidfoten.

CKAN stöder många europeiska språk. För närvarande finns CKAN DataPlattform tillgängligt på holländska (Nederlands), engelska och svenska.
