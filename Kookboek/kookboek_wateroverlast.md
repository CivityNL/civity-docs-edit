---
id: kookboek_wateroverlast
title: Wateroverlast
sidebar_label: Wateroverlast
---
In het rapport "Leren van Wateroverlast" (mei 2019) van STOWA (Stichting Toegepast Onderzoek Waterbeheer) zijn de evaluaties die waterschappen de afgelopen 10 jaar hebben uitgevoerd naar aanleiding van calamiteiten, samengenomen en geanalyseerd. In dit rapport worden ook een aantal aanbevelingen gedaan die direct te maken hebben met de inzet van c.q. het gebruik van data. Door meer kennis te ontwikkelen over weersverwachtingen en de inzet van hydrologische modellen kan beter inzicht verkregen worden in het functioneren van het watersysteem. Onderwerpen die in het rapport genoemd worden zijn en betrekking hebben op data zijn:
* dimensionering van het watersysteem
* "normbuien"
* weersverwachting

In de beschrijving van de KNMI-data is dieper ingegaan op de laatste twee onderwerpen. Het rapport van de STOWA geeft aan dat uit de evaluaties blijkt dat de Nederlandse watersystemen op dit moment aan de norm voldoen. Hierdoor wordt de situatie alleen penibel bij een neerslag groter dan 80mm per 24 uur. In die gevallen is het belangrijk dat signalen van wateroverlast (die zeer divers kunnen zijn) direct gecommuniceerd worden. Als de wateroverlast optreedt, is het doorgaans al te laat voor ingrepen. De opgave is om in een eerder stadium al inzicht te krijgen. En de weersverwachting is het enige criterium voor het uitvoeren van preventieve acties. De huidige regionale weersverwachtingen zijn daarvoor te onzeker, omdat de verschillen tussen de verwachte en feitelijk gemeten neerslag soms groter is dan 50mm per 24 uur. Feitelijke metingen ovetreffen soms tot twee à driemaal de verwachte hoeveelheid. In deze context kunnen meer gedetailleerde data helpen om de regionale weersvoorspelling te verbeteren. Dat kan via citizen scienceprojecten met regenmeters en temperatuursensoren bij burgers, vergelijkbaar met de huidige projecten om de luchtkwaliteit in kaart te brengen.

--> Hydrologic als voorbeeld opnemen

Naast de weersverwachting wordt vooral de "watersysteemwerking" als oorzaak genoemd voor een hogere kans op wateroverlast. Er zijn veel partijen betrokken en het totale watersysteem is een complexe keten van verantwoordelijkheden en schakels. Het gebruik van data kan vooral helpen om inzicht te creëren in de werking van de verschillende schakels. Die kunnen vervolgens bijdragen aan organisatorische en procesmatige ingrepen.

## Databronnen
Naast de voorbeelden die al genoemd zijn, is er een groot aantal open databronnen die kunnen helpen om (potentiële) wateroverlast inzichtelijk te maken. Het gaat om algemene bronnen zoals de AHN (Algemene Hoogtekaart Nederland) en de BGT (Basiskaart  Grootschalige Topografie), maar ook om data over het rioolstelsel, meldingen openbare ruimte en ...

<img class="imageStyle shadowing" src="/docs/assets/Kookboek/Wateriverlast_image.png" target="_blank" alt="imageStyle: Wateroverlas"/>

De aanpak is dat we vanuit een thema stap voor stap werken naar de achterliggende bronnen. Elk stap wordt gedocumenteerd, zodat duidelijk is waarop de monitoring is gebaseerd.
Het bovenstaande voorbeeld gaat over wateroverlast.

Om invulling te geven aan dit onderwerp, laten we stap voor stap zien  hoe je data kunt gebruiken. Bij elke bron wordt uitleg gegeven.

### Voorbeeld 1
De gemeente Utrecht gebruikt een applicatie Slim Melden waarmee zij meldingen van inwoners verzamelen. Eén van de categorieën waarover een melding gedaan kan worden, is wateroverlast.

<img class="imageStyle shadowing" src="/docs/assets/Kookboek/Voorbeeld_1_image1.png" target="_blank" alt="imageStyle: Wateroverlas"/>

In de afgelopen 2,5 jaar zijn in totaal meer dan 160.000 meldingen verzameld. Deze meldingen zijn beschikbaar als open data en kunnen dus door iedereen gebruikt worden (en worden gecombineerd met andere data. Hieronder staat een voorbeeld van een dashboard van de gemeente Utrecht, waarbij de categorie wateroverlast is geselecteerd. 

<img class="imageStyle shadowing" src="/docs/assets/Kookboek/Voorbeeld_1_image2.png" target="_blank" alt="imageStyle: Wateroverlas"/>

#### Aandachtspunten
* dit is de data van één gemeente en categorieën verschillen per gemeente (hetgeen de vergelijkbaarheid bemoeilijkt)
* het aantal meldingen hoeft niet te corresponderen met de werkelijke overlast (alleen gemotiveerde/gedupeerde inwoners hebben een melding gedaan)
* VNG Realisatie is bezig met een standaard voor Meldingen Openbare Ruimte. Wanneer alle data van elke gemeente in hetzelfde formaat beschikbaar is, ontstaan er meer mogelijkheden om de data met elkaar te vergelijken.

Ondanks alle beperkingen kan deze informatie een eerste beeld opleveren waar zich problemen met wateroverlast voordoen in stedelijk gebied.
Een vervolgstap is om deze data te combineren met weersgegevens (KNMI), zodat een relatie gelegd kan worden met extreme neerslag, de Algemene Hoogtekaart Nederland (AHN) en de BGT (verharding).

Techniek:
* Hoe zorgen we ervoor dat de AHN, BGT en KNMI data permanent beschikbaar zijn (dus periodiek geupdate worden)

In toenemende mate is er sprake van real time data.


### Voorbeeld 2

De provincie Utrecht voet een project uit om de luchtkwaliteit en fietsroutes in kaart te brengen. In 2019 krijgen 500 fietsers een meetkastje (mobiele sensor) waarmee elke 10 seconden de luchtkwaliteit en GPS-positie wordt gemeten. Elke 2 minuten wordt de data via een standaard protocol (NB-IoT of LTE) verstuurd naar een dataplatform. De data die wordt verzameld wordt ook naar het RIVM gezonden om de gegevens te valideren tov het officiële landelijke meetnet. De gecorrigeerde gegevens worden eveneens op een dataplatform opgeslagen en beschikbaar gesteld als open data.

<img class="imageStyle shadowing" src="/docs/assets/Kookboek/Voorbeeld_2_image1.png" target="_blank" alt="imageStyle: Wateroverlas"/>

In feite is het achterliggende proces voor elk sensorproject vergelijkbaar, zoals hieronder schematisch is weergegeven. Sensoren versturen de data via een gateway naar een dataplatform. Daar wordt de data in een herbruikbaar, open formaat omgezet, zodat het kan worden hergebruikt voor nieuwe toepassingen. 

Publicatie als open data is een keuze die de eigenaar van de data maakt. Op een vergelijkbare manier heeft de gemeente Utrecht bijvoorbeeld 50 invalideparkeerplaatsen voorzien van een sensor. Elke statuswijziging (vrij-bezet) wordt als nieuw record opgeslagen, zodat er een set historische data wordt opgebouwd die gebruikt kan worden voor analyse en eventuele aanpassing van beleid.

<img class="imageStyle shadowing" src="/docs/assets/Kookboek/Voorbeeld_2_image2.png" target="_blank" alt="imageStyle: Wateroverlas"/>
