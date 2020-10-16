---
id: toevoegen_harvest
title: Vermeldingen toevoegen - Harvesten
sidebar_label: Harvesten van databronnen
---

> Naast het toevoegen van vermeldingen en databronnen via de normale CKAN user interface, is het ook mogelijk om vermeldingen en data te harvesten van andere bronsystemen.

In principe kunnen alle web services/API’s die een lijst kunnen produceren met alle resources die ze aanbieden geharvest worden door Datacatalogus. 

Het harvesten gebeurt in drie stappen: “gather” (verzamelen), “fetch” (ophalen) en “import” (importeren). Hieronder worden de verschillende stappen uitgelegd.  

* In de “gather” fase wordt bepaald welke resources nieuw zijn, welke bijgewerkt moeten worden en welke verwijderd zijn in de bron. De harvester haalt bij de API een lijst met bronnen op en stelt daaruit de drie lijsten op. In het geval van een CSW bijvoorbeeld wordt hiervoor het GetRecords request gebruikt.  
* In de “fetch” fase wordt de daadwerkelijke informatie opgehaald. Het gaat hierbij om de detail informatie van de resource. In het voorbeeld van een CSW wordt hiervoor het GetRecordByID request gebruikt; 
* In de “import” fase wordt de in de “gather” en “fetch” fases opgehaalde informatie daadwerkelijk in de metadata repository bijgewerkt. Nieuwe records worden toegevoegd, bestaande records worden bijgewerkt en uit de bron verwijderde records worden opgeruimd. Daarvoor hoeft de originele bron niet meer benaderd te worden.  

Het configureren van hoe de harvest processen van de verschillende bronnen ingeregeld wordt is afhankelijk van een aantal zaken: 

*	Van de metadata velden die opgenomen worden in het metadata schema. Wij adviseren om elk geval de CKAN en de DCAT metadatavelden op te nemen. Indien een koppeling naar NGR gewenst is, dan dienen ook deze velden opgenomen te worden. Daarnaast zouden nog klantspecifieke velden opgenomen kunnen worden; 
*	Hoe de links naar de bronnen opgenomen moeten worden, is afhankelijk van welke software bij de klant gebruikt worden. In het geval van een ArcGIS Online Map/Feature/ImageServer is het bijvoorbeeld een link op te nemen om de resource te openen in een online viewer, maar kunnen ook links worden opgenomen om de resource te openen in ArcGIS Desktop. Ons advies is om in elk geval de links naar de online viewer op te nemen;  
*	Bepaalde bronnen kunnen op meerdere manieren geharvest worden. Welke opties daarin zijn hangt af van hoe de te harvesten bronnen geconfigureerd zijn. 
Dit vergt afstemming bij de start van een mogelijke gezamenlijk project.  

## Voorbeelden van bronnen die geharvest kunnen worden

### ArcGIS Online 
ArcGIS Online services kunnen geharvest worden aan de hand van de API’s die de inhoud van de Map/Feature/ImageServer beschrijven. Een voorbeeld van zo’n document kan gevonden worden op https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer. Dit is de voor mensen leesbare variant van de inhoud van een MapServer. Feature- en ImageServers bieden een vergelijkbaar document aan. De harvester zou de JSON variant gebruiken waarvan de link in de linker bovenhoek van de leesbare variant staat. Als de WMS/WFS/WCS connectoren geactiveerd zijn kunnen ook de GetCapabilities documenten van deze services gebruikt worden om te harvesten.  

### GeoServer 
GeoServer kan op verschillende manieren geharvest worden: 
*	Wat altijd kan in het geval van GeoServer is de WMS/WCS/WFS OGC services harvesten aan de hand van hun GetCapabilities document 
*	Indien de CSW extensie geïnstalleerd is, kan GeoServer ook geharvest worden aan de hand de CSW GetRecords en GetRecordByID requests 
*	Als de GeoServer REST API benaderbaar is en een username/password beschikbaar is kan ook de GeoServer REST API gebruikt worden om te harvesten. Deze laatste optie geniet wellicht niet de voorkeur vanuit beveligingsoogpunt.  

## Configureren van een harvester 
Een Datacatalogus beheerder kan een harvester configureren in de Datacatalogus user interface. Deze informatie kan worden ingevoerd via de CKAN API. De volgende informatie moet worden opgegeven: 
*	URL 
*	Naam 
*	Beschrijving 
*	Type harvester 
*	Frequentie waarmee de harvester de informatie in Datacatalogus moet verversen. Opties zijn: 
    *	Handmatig 
    *	Dagelijks 
    *	Wekelijks 
    *	Elke twee weken 
    *	Maandelijks 
    *	Voortdurend 
*	JSON met harvester specifieke configuratie opties 
*	Organisatie 
