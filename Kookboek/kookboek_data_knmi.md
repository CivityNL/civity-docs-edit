## Voorbeeld dataset: KNMI gegevens van het weer in Nederland

In dit voorbeeld zullen we data behandelen die verkrijgbaar is bij het KNMI. Als het gaat om het weer en het klimaat, is het KNMI een goede bron om te gebruiken. Op dit moment zullen we de voorspellingen links laten liggen en puur kijken naar de meetwaarde die het KNMI verzamelt met alle weerstations. Daarvoor gaan we naar [Klimatologie - Metingen en waarnemingen](https://www.knmi.nl/nederland-nu/klimatologie-metingen-en-waarnemingen). Hier zijn we een uitgebreid overzicht met opties zoals uurwaarden, dagwaarden, bodemwaarden, etc.

### Uurwaarden van weerstations

> Van detail naar globaal is altijd mogelijk, maar andersom niet.

Laten we de uurwaarden bekijken die het KNMI aanbiedt. Waarom specifiek de uurwaarden? Omdat deze het meest gedetailleerde beeld geven en met deze gegevens is het altijd mogelijk om alsnog de geaggregeerde gegevens per dag/maand/jaar of per gebied te maken. Van detail naar globaal is altijd mogelijk, maar andersom niet.

Als we nu [Uurgegevens van het weer in Nederland](https://www.knmi.nl/nederland-nu/klimatologie/uurgegevens) bekijken, zien we een uitgebreid overzicht van allerlei opties om gegevens van temperatuur, zon, bewolking en zicht, luchtdruk, wind en neerslag per station in te zien. Ook is er de mogelijkheid om een interactieve selectie te maken. Omdat deze wederom de meeste keuze geeft, zal dit ons uitgangspunt zijn. Met de interactieve selectie op [Uurgegevens van het weer in Nederland - Download](http://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi) krijgen we meteen al een indruk van de data die we op kunnen vragen en dus ook meteen wat voor vragen we voor onszelf moeten beantwoorden:

#### Welk periode?

Wat is de periode waar we geinteresseerd zijn? En dan gaat het niet alleen om het moment waarop een beleidsmaatregel wordt ingevoerd, maar misschien juist ook om de periode daarvoor. Deze laatste fungeert in dat geval als controle om te kunnen zien wat voor impact een maatregel wel of niet heeft. Daarbij moeten dus ook eerdere maatregelen misschien in beschouwing genomen worden om de juiste conclusies te trekken. Gelukkig is het aanbod van het KNMI ruim, met metingen vanaf 1951. 

#### Welke meetwaardes?

Er zijn een hoop verschillende kenmerkingen van het klimaat die gemeten worden door het KNMI. In de onderstaande table staat een overzicht van al deze elementen. Maar of al deze elementen ook nuttig zijn is uiteaard een tweede vraag. Hoewel meer data altijd handig is, kan een teveel aan data weer het zicht op de kern belemmeren. Zorg ook dat 

| Element |	Omschrijving | Eenheid |
|---|---|---|
|DD|Windrichting gemiddeld over de laatste 10 minuten|in graden|
|FH|Uurgemiddelde windsnelheid|in 0.1 m/s|
|FF|Windsnelheid gemiddeld over de laatste 10 minuten|in 0.1 m/s|
|FX|Hoogste windstoot|in 0.1 m/s|
|T|Temperatuur op 1.50 m hoogte|in 0.1 graden Celsius|
|T10N|Minimumtemperatuur op 10 cm hoogte in de afgelopen 6 uur|in 0.1 graden Celsius|
|TD|Dauwpuntstemperatuur op 1.50 m hoogte|in 0.1 graden Celsius|
|SQ|Duur van de zonneschijn|in 0.1 uren|
|Q|Globale straling|in J/cm2 per uurvak|
|DR|Duur van de neerslag|in 0.1 uur|
|RH|Uursom van de neerslag|in 0.1 mm|
|P|Luchtdruk herleid naar zeeniveau|in 0.1 hPa|
|VV|Horizontaal zicht tijdens de waarneming||
|N|Bewolking|bedekkingsgraad in achtsten|
|U|Relatieve vochtigheid op 1.50 m hoogte|procenten|
|WW|Weercode||
|IX|Weercode indicator voor de wijze van waarnemen||
|M|Mist|0=niet/1=wel|
|R|Regen|0=niet/1=wel|
|S|Sneeuw|0=niet/1=wel|
|O|Onweer|0=niet/1=wel|
|Y|IJsvorming|0=niet/1=wel|


#### Welk meetstation?

> Waarschuwing: de data zijn niet gecorrigeerd voor inhomogeniteiten ontstaan door stationsverplaatsingen en veranderingen in de observatiemethodieken





