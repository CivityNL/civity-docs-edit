---
id: kookboek_example_snuffelfiets
title:  Voorbeeld toepassing - SnuffelFiets
sidebar_label:  SnuffelFiets
---

Het snuffelfiets project is een initatief vanuit de provincie Utrecht om samen met burgers door middel van relatief goedkope sensoren een beeld te krijgen van de luchtkwaliteit in de provincie. Vaak is het onduidelijk hoe het nou staat met de luchtkwaliteit in een kwantitatieve manier en zijn de mogelijkheden om dit vast te stellen over het algemeen een flinke investering. Dit is een van veel voorkomende vicieuze cirkels, waarbij data nodig is om het probleem vast te stellen maar het probleem al duidelijk moet zijn om de juiste data te verzamelen.

In dit project is het idee dat burgers met deze simpele sensoren rond gaan fietsen, zodat met betrekkelijk weinig sensoren een grote dekking kan worden verkregen. Zodra deze dekking bekend is zouden dan eventueel meer exactere sensoren geplaatst kunnen worden op kritieke plekken, zodat er geen onnodige bestedingen worden gedaan.

## Van meting naar data

Wat houd zo'n meting nou precies in? Simpel gezegd stuurt zo'n sensor elke 10 seconde een setje van meetwaardes die in die tijdspanne zijn waargenomen. Al deze metingen worden in een grote dataset verzamelt, die als bron kan worden gebruikt.

Hieronder is een overzicht gegeven van hoe zo'n set meetwaardes er in het echt uitziet. Wat op zal vallen is dat in sommige gevallen het veldnaam en veldwaarde meten duidelijk zijn, soms de veldnaam logisch klinkt maar de waarde erbij onlogisch lijkt, en soms is het helemaal onduidelijk wat een waarde voorstelt. 

| Veld | Waarde |   | Veld | Waarde |
| ---- | ------ |---| ---- | ------ |
| voc | 538 || pressure | 1025 |
| versionMajor | 1 || pm1_0 | 3 |
| errorCode | 0 || versionMinor | 3 |
| voltage | 122 || horizontalAccuracy | 67788 |
| accMax | 0 || entityId | 352753092424447 |
| verticalAccuracy | 49795 || pm10 | 3 |
| no2 | 84 || temp | 204 |
| location | 52.105156,5.124354 || humidity | 54 |
| pm2_5 | 3 || time | 1566333186 |

Met andere woorden: deze data bevat nog geen informatie. Zoals al eerder is aangegeven, is het niet alleen belangrijk dat de databron beschikbaar is, maar ook de nodige metadata bevat om daadwerkelijk gebruikt te worden.

## Van data naar informatie

Kijk maar naar de waarde voor het veld `temp`: gezien de soort metingen is het logisch om te bedenken dat dit voor temperatuur staat. Maar hoe zit het dan met die `204`? Dat is duidelijk geen graden Celsius, maar wat dan? Graden Fahrenheit? Kelvin? 

Gelukkig is dit veld te vergelijken met de standaard weersmetingen, zodat te beredeneren is dat het staat voor 20.4 graden Celsius. Maar dit is niet voor elke meetwaarde te doen, juist omdat dit het hele doel is van het project! Ook is het fijn dat er een versie nummer wordt meegestuurd, maar is het wel belangrijk dat bekend is wat eventuele verschillen zijn in versies.

Hieronder is de data omgeschreven naar informatie. Een aantal velden zijn daarbij weggelaten om het overzichtelijk te houden, maar het idee is dus dat vastligt wat een waarde representeert.

| Veld | Betekenis | Waarde |
| ---- | --------- | ------ |
| pressure | Luchtdruk | 1025 hPa |
| horizontalAccuracy | Afwijking GPS | 67.788 meter |
| pm10 | Concentratie fijnstof | 3 µg/m³ |
| temp | Temperatuur | 20.4 graden Celsius |
| location | GPS locatie (lat, lon)| (52.105156,5.124354) |
| humidity | Relatieve luchtvochtigheid | 54 procent |
| time | Tijd sinds Unix Epoch | 1566333186 secondes |

Nu spreken we over informatie: de data is begrepen en ligt eenduidig vast, zodat vergelijkingen met andere datasets of bronnen gemaakt kunnen worden. Deze 3 miljoen setjes meetwaardes zijn nu een grote set met informatie, klaar voor gebruik.

## Van informatie naar presentatie

Nu de informatie aanwezig is kan de stap gemaakt worden naar daadwerkelijke kennis. Met andere woorden, hoe presenteer je deze informatie. 