---
id: metadata_Metadata
title: Metadata
sidebar_label: Metadata
---


> Metadata is gewoon data over data 

> Metadata volgt de richtlijnen van de DCAT-Standaard. <a href="/dataplatform/metadata_DCAT" target="_blank">DCAT-Standard</a>.


Elke dataset bevat metadata; metadata is informatie die de gebruiker informeert over de verzamelde gegevensbronnen in een dataset. Meestal betekent dit een beschrijving en context over bestaande gegevens. 

Uw metagegevens moeten het volgende beschrijven: 
* Wie is de eigenaar van de dataset 
* Beschrijvende informatie over de inhoud 
* Toegangsrechten 

## Voorbeeld van metadata

Laten we aannemen dat we het volgende object "dingen" hebben genoemd: 

```javascript
// Dit is een visuele weergave van gegevens 
dingen = "[14, 16.5, 21, 18, 21]"
```

We zien dat "dingen" een verzameling getallen is, maar zonder context is het betekenisloos, buiten het zijn van een verzameling getallen; "dingen" bestaat als een verzameling getallen. Laten we dat veranderen met metadata, waar we waarde kunnen toevoegen door context en definitie toe te wijzen! 

Laten we nog twee waarden toewijzen: 
```javascript
"Florida, Verenigde staten"
"Degrees Centigrade"
```

Nu hebben we metadata, die beschrijft waar "dingen" over gaan. Door graden Celsius en Florida, VS, toe te voegen, heeft "dingen" nu context (locatie) en een definitie (temperatuur). 


Daarom zijn `graden Celsius` en `Florida, VS` de metadata voor het object 'dingen'.


```javascript
// dit is een visuele weergave van gegevens
dingen = "[14, 16.5, 21, 18, 21]", "graden Celsius", "Florida, VS`"
```

Door metadata toe te voegen aan "dingen", heeft het ons in staat gesteld om de informatie binnenin gemakkelijk te begrijpen en op een makkelijk leesbare manier weer te geven: 

|Graden Celsius | - | 
|:----------------:| :-------:|
|14| Florida, VS |
|16.5| Florida, VS |
|21| Florida, VS|
|18| Florida, VS |
|21| Florida, VS |
