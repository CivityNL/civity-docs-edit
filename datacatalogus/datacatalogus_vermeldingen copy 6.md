---
id: toevoegen_overig
title: Vermeldingen toevoegen
sidebar_label: Andere opties
---

## Opties om vermelding toe te voegen

Datacatalogus ondersteunt de volgende methoden om vermeldingen en databronnen toe te voegen: 
*	Harvesten 
*	API upload 
*	Handmatige upload 
*	IoT data 

### Harvest 
Het configureren van een harvesten verloopt in een aantal stappen. Al deze stappen worden uitgevoerd door een beheerder.  
1.	De beheerder logt in  
2.	De beheerder definieert harvester 
3.	De beheerder laat harvester handmatig lopen ter controle 
4.	Als de test van de harvester succesvol is, stelt de beheerder stelt een schedule in 
5.	Afhankelijk van de instellingen worden de datasets periodiek automatisch bijgewerkt.  

### API upload
1.	De beheerder logt in. 
2.	Zoekt documentatie op (officiële CKAN API documentatie: https://docs.ckan.org/en/latest/api/index.html) 
3.	Zoekt API key op (eventueel automation user met beperktere rechten met eigen API key aanmaken) 
4.	Script om periodiek of grote hoeveelheid metadata te uploaden via API. Of bijvoorbeeld met FME.

### Handmatige upload 
1.	De beheerder logt in. 
2.	De beheerder maakt een nieuwe vermelding (in CKAN een Package genoemd) aan. 
3.	De beheerder voegt de gewenste databronnen (in CKAN een Resources genoemd) toe via de upload knop. 

### Real time data
Datacatalogus biedt ook de mogelijkheid om real time data te publiceren. Neem hiervoor eerst contact op met Civity. 
 
## Links naar databron
Daarnaast kan er binnen een vermelding worden gelinkt naar de originele data.

In de vermelding kan als bijlage een link worden opgenomen waar de gebruiker op kan klikken. Ook kan informatie worden opgenomen die de gebruiker nodig heeft om de data te openen in een andere applicatie (bijvoorbeeld een desktop applicatie) 

### ArcGIS Online 
Link naar de viewer. Via query string parameters kan de viewer gestart worden met bepaalde specifieke opties. Documentatie daarover is hier te vinden: https://doc.arcgis.com/en/arcgis-online/reference/use-url-parameters.htm.  
 
Een voorbeeld van link naar een viewer: https://www.arcgis.com/home/webmap/viewer.html?basemapUrl=http%3A%2F%2Fservices.arcgisonline.com%2FArcGIS%2Frest%2Fservices%2FOcean_Basemap%2FMapServer&url=http%3A%2F%2Fservices5.arcgis.com%2F9cBkZtsx7PSOoaCF%2Farcgis%2Frest%2Fservices%2FMaryland_Shoals%2FFeatureServer%2F0 .  
 
De uiteindelijke URL ziet er behoorlijk complex uit. Deze link wordt echter automatisch gegenereerd door de harvester en hoef je dus niet zelf samen te stellen.  

### GeoServer 
Conventie: online resource URL, #, naam van de laag. Bijvoorbeeld “https://portal.prvlimburg.nl/geodata/POL/wms? # POL2014_NAT_LANDSCHAP_ZL_V_inspire”. Dit is de informatie die nodig is om deze laag te benaderen in andere applicaties zoals ArcGIS for Desktop, QGIS etcetera. Civity kan een viewer integreren die dezelfde conventie gebruikt. Daarnaast is er de mogelijkheid om een voorbeeld request te genereren. Kanttekening daarbij is dat dit niet altijd een zinnige afbeelding op zal leveren (bijvoorbeeld in het geval van een schaalafhankelijke renderer).  
