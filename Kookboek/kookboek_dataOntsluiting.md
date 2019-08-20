---
id: kookboek_DataOntsluiting
title: Data Ontsluiting
sidebar_label: Data Ontsluiting
---
De voorgaande hoofdstukken gingen over het verzamelen en opslaan van data. Het uiteindelijke doel is dat data gebruikt worden in toepassingen. Daarvoor moeten data ontsloten worden en beschikbaar worden gesteld. Dat kan op een groot aantal manieren.

De meest gebruikte manier is het aanbieden van een downloadbaar bestand, bijvoorbeeld een CSV- of GeoJSON-file. Het nadeel is dat de gebruiker steeds opnieuw het bestand moet downloaden als er een nieuwe versie beschikbaar komt. Veel toepassingen halen eenmalig de data op, slaan die zelf op en gebruiken die om een dashboard of kaart te maken. Het is in die situatie lastig te beoordelen of de meest actuele versie van de data worden gebruikt. En voor de aanbieder/eigenaar van de data is er geen zicht op de toepassingen die gebruik maken van een dataset.

Een andere manier is het bieden van een API (Application Programming Interface) of webservices [^1]. Dit is als het ware een online stopcontact om data op te vragen. Het grote voordeel is dat het gebruik van de data beter te monitoren is, dat de gebruiker altijd beschikt over de meest recente data en die niet zelf hoeft op te slaan. Voor beleidsmonitoring zijn API’s of webservices daarom meer geschikt.

Een aantal voorbeelden van (standaard) services zijn:
1.	Geo-services, zoals vastgesteld door het Open Geo Consortium (OGC) [^2]
2.	Voor real time data zijn er standaarden van FIWARE
3.	Voor het omgevingsbeleid is er een API-strategie in ontwikkeling

### Geo-Standaarden
* Inspire
* WFS/WMS
* Geoserver

### Data modellen
De FIWARE foundation werkt samen met TM FORUM aan standaardisatie van data modellen.[^3] Wanneer een dergelijk model toegepast wordt, vergroot dat de herbruikbaarheid van data over verschillende toepassingen.

Op dit moment zijn er 12 datamodellen gedefinieerd. Daarom heen is een proces van RFC’s en RFP’s gestart.

[^1]: Difference between API and Webservice: https://medium.com/@programmerasi/difference-between-api-and-web-service-73c873573c9d
[^2]: OGC-standaarden - http://www.opengeospatial.org/docs/is
[^3]: [Fiware Data Models](https://www.fiware.org/developers/data-models/)
