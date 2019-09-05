---
id: kookboek_data_bgt
title:  Voorbeeld dataset - Basisregistratie Grootschalige Topografie (BGT)
sidebar_label:  Voorbeeld dataset - BGT
---

Een voorbeeld voor geodata is de Basisregistratie Grootschalige Topografie (BGT), een digital kaart van Nederland waarop gebouwen, wegen, waterlopen, terreinen en spoorlijnen eenduidig zijn vastgelegd. De kaart is op 20 centimeter nauwkeurig en bevat veel details, waaronder historie. Dit betekent wel dat deze dataset veel informatie bevat en dus groot is (een extract voor het gebied van de gemeente Den Haag is al ruim 4 GB).

## De verschillende lagen

Gelukkig is de BGT in lagen verdeeld en hoeft dus niet de hele dataset ingeladen te worden voor een specifiek onderwerp. Hoewel afhankelijk van het doel wel meerdere lagen noodzakelijk zijn om tot het gewenste resultaat te komen. Hieronder is een schematische weergaven van de verschillende types objecten die zich in de BGT bevinden ([bron](https://www.geonovum.nl/uploads/standards/downloads/BGTGegevenscatalogus111.pdf)). 

<img class="imageStyle shadowing" src="/docs/assets/Kookboek/bgt.PNG" target="_blank" alt="imageStyle: BGT-objecten"/>

Dit overzicht bevat alleen de objecten die als vlak weergegeven worden. Daarnaast bevat de BGT ook nog punten, zoals putten, masten en vegetatieobjecten. Om een iets beter idee te geven van de verschillende lagen, zijn de belangrijkste hieronder kort toegelicht aangevuld met de definities zoals die in de BGT gegevenscatalogus zijn beschreven ([bron](https://www.geonovum.nl/uploads/standards/downloads/BGTGegevenscatalogus111.pdf)). Met name de 'ondersteunende' lagen zijn soms moeilijk te interpreteren, vaak omdat die grensgebieden beslaan die niet altijd even duidelijk zijn te definieren.

### Transport

> Alles dat met verkeer te maken, of dat nou weg-, spoor- of vliegverkeer is

| Naam | Definitie |
| ---- | --------- |
| Wegdeel | Kleinste functioneel onafhankelijk stukje van een NEN 3610 Weg met gelijkblijvende, homogene eigenschappen en relaties en primair bedoeld voor gebruik door weg-, spoor- en vliegverkeer te land. |
| OndersteunendWegdeel | Een deel van de weg dat niet primair bedoeld is voor gebruik door het verkeer. |
| Spoor | De as van het spoor, dat wil zeggen het midden van twee stalen staven op een onderling vaste afstand, waarover trein, tram, of sneltram rijdt. |

### Terrein

| Naam | Definitie |
| ---- | --------- |
| OnbegroeidTerreindeel | Kleinste functioneel onafhankelijk stukje van een terrein, dat er binnen het objecttype Terrein van NEN 3610 wordt onderscheiden, zonder aaneengesloten vegetatie. |
| BegroeidTerreindeel | Kleinste functioneel onafhankelijk stukje van een terrein dat er binnen het objecttype Terrein van NEN 3610 wordt onderscheiden, met aaneengesloten vegetatie. |

### Water

| Naam | Definitie |
| ---- | --------- |
| Waterdeel | Water van NEN 3610 wordt onderscheiden en dat permanent met water bedekt is. |
| OndersteunendWaterdeel | Object dat in het kader van de waterhuishouding periodiek gedeeltelijk of geheel met water is bedekt. |

### Bouwwerk

| Naam | Definitie |
| ---- | --------- |
| Pand | Een PAND is de kleinste bij de totstandkoming functioneel en bouwkundig-constructief zelfstandige eenheid die direct en duurzaam met de aarde is verbonden en betreedbaar en afsluitbaar is. |
| OverigBouwwerk | Met de aarde verbonden duurzaam bouwwerk, dat niet valt onder de definities van een pand of kunstwerk. |
| Scheiding | Kunstmatig, meestal lineair obstakel met een werende functie. |

#### Kunstwerk
| Naam | Definitie |
| ---- | --------- |
| Overbruggingsdeel | Onderdeel van een beweegbare of vaste verbinding tussen twee punten, die door water, een weg of anderszins gescheiden zijn, dat essentieel is voor de constructie. |
| Tunneldeel | Onderdeel van een kunstmatig aangelegde, kokervormige onderdoorgang dat essentieel is voor de constructie. |
| Kunstwerkdeel | Onderdeel van een civiel-technisch werk voor de infrastructuur van wegen, water, spoorbanen, waterkeringen en/of leidingen. |

## Vissershaven volgens de BGT

https://www.google.com/maps/@52.0989073,4.2628015,15.5z

<img class="imageStyle shadowing" src="/docs/assets/Kookboek/bgt_denhaag_with_legend.png" target="_blank" alt="imageStyle: Vissershaven"/>

Als we ons 

## Van vlakken naar data

<img class="imageStyle shadowing" src="/docs/assets/Kookboek/bgt_vissershaven_afstand_with_legend.png" target="_blank" alt="imageStyle: Vissershaven"/>

<img class="imageStyle shadowing" src="/docs/assets/Kookboek/bgt_vissershaven_afstand_plant_with_legend.png" target="_blank" alt="imageStyle: Vissershaven"/>

<img class="imageStyle shadowing" src="/docs/assets/Kookboek/bgt_vissershaven_class.png" target="_blank" alt="imageStyle: Vissershaven"/>