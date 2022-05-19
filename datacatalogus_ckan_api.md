---
id: ckan_api
title: CKAN API 
sidebar_label: CKAN API
---

## CKAN API

Datacatalogus maakt gebruik van de uitgebreide CKAN API. Informatie over de mogelijkheden van deze API is te vinden op https://docs.ckan.org/en/latest/api/index.html. 

Daarnaast is er een link naar de API (https://acc-ckan-utrecht.dataplatform.nl/api/3) en bovenstaande documentatie te vinden onderaan de pagina VERMELDINGEN.

Wanneer databronnen (bijv. een csv-bestand in een Vermelding) zijn toegevoegd aan de Datastore[1], en je een databron aanklikt zul je tevens een groene knop met Data API zien. Hier kun je voor deze specifieke databron meer informatie over de API eindpunten vinden en documentatie over de Datastore API[2] die beschikbaar is voor databronnen die zijn toegevoegd aan de Datastore.

## DataStore

Via de Datastore kan specifieke data als een preview worden getoond en kan data worden opgevraagd via API calls. Data die niet in de Datastore terecht komt, is nog steeds toegankelijk maar kan alleen via een download worden bekeken. Er is in dat geval geen preview mogelijkheid binnen de Datacatalogus.

### CKAN DataStore
>Als je data is opgeslagen als een **CSV** of **(geo)JSON** bestandstype, zal CKAN de bestanden automatisch uploaden naar de Datastore.

Wanneer een vermelding is opgeslagen in de CKAN Datastore, kan de data via een preview bekeken worden. Hier wordt de data getoond in een tabel of op een kaart en kun je de data filteren.

### Uploaden naar de DataStore
Om data naar de Datastore te uploaden, moet je op de databron klikken en vervolgens het **Datastore** tabblad aanklikken.

<img class="imageStyle" src={require('./assets/Dataplatform/AddingDatasources/dataplatform_DATASETS_AddingDatasoruces_datastore.png').default} target="_blank" alt="imageStyle: DataStore'" />

Om te kijken of de bron inderdaad naar de Datastore kan worden geupload, kun je op de "Upload naar DataStore" knop klikken.

> ***Kolomnamen***
>
> DataStore bepaalt automatisch de kolomnamen. Dit is altijd de eerste horizontale rij in een kolom. Het datatype (numeriek, tekst, tijd etc.) wordt bepaald door de eerste 250 records binnen een kolom. 

Data wordt geupload per 250 records. Een upload van 250 records wordt een chunk genoemd. Dat betekent dat het een tijd kan duren voor grote bestanden met veel records zichtbaar zijn als preview. Het is belangrijk om niet nogmaals op de "Upload naar Datastore" knop te klikken tijdens het uploadproces. In plaats daarvan kun je de pagina verversen (F5) of op het tabblad klikken. 

Als de upload volledig gebeurd is, zul je ***Compleet*** zien staan naast het **Status** veld.

<img class="imageStyle" target="_blank" alt="imageStyle: DataStore'" src={require('./assets/Dataplatform/AddingDatasources/dataplatform_DATASETS_AddingDatasoruces_datastoreComplete.png').default} />

### DataStore fouten
> De DataStore zal een foutmelding geven als de preview of API niet kan worden gebruikt. Hier kunnen veel verschillende oorzaken voor zijn.

Als de groene **API** knop ontbreekt, of als het aantal records binnen de preview niet overeenkomt met de orignele data, dan is de kans groot dat er een fout is opgetreden tijdens het uploaden naar de Datastore. Fouten kun je terugvinden door naar het DataStore tabblad te gaan.

#### Veelvoorkomende fouten

<table class="versions">
    <tbody>
        <tr>
            <th>Foutmelding</th>
            <th>Uitleg</th>
            <th>Hoe op te lossen?</th>
        </tr>
        <tr>
            <td>
                <strong>
                Fout
                </strong>
            </td>
            <td>
                <ul>
                    <li>Datastore upload is niet succesvol.</li>
                    <li>Geen verdere uitleg geeft aan dat in het begin de upload al fout is gegaan</li> 
                </ul>
            </td>
            <td>
                <ul>
                    <li>Bestandstypes die niet kunnen worden geupload geven deze standaardfout. Controleer het bestandstype dat je probeert te uploaden.</li>
                    <li>Is het een correct bestandstype (CSV of (geo)JSON) en krijg je toch deze foutmelding. Neem dan contact op met support@civity.nl</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <strong>
                Error __context__: 'The data was invalid (for example: a numeric value is out of range or was inserted into a text field).
                </strong>
            </td>
            <td>
                <ul>
                    <li>De eerste 250 records bestonden uit numerieke waarden.</li>
                    <li>Een record bestond uit twee verschillende datatypen (bijv. <i>2412<strong>K</strong></i>). Dit zorgt ervoor dat de DataStore stopt met uploaden.</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Voeg een titel toe aan elke kolom en geef aan wat voor data er in voor komt (Datum, tijd, valuta etc.)</li>
                    <li>Zorg ervoor dat alle velden binnen een kolom hetzelfde datatype bevatten.</li>
                    <li>Pas een numerieke kolom via de Data Dictionary aan naar een tekst kolom</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <strong>Error: Cannot connect to datapusher</strong>
                <p>
                        Normaal gesproken wordt data automatisch naar de DataStore geupload.
                </p>
                <p>
                        Omdat er geen connectie mogelijk was, is deze automatische upload niet gebeurd. Dit veroorzaakt deze melding.
                </p>
            </td>
            <td>
                <ul>
                    <li>
                        Handmatig opnieuw proberen de uploaden is in de meeste gevallen genoeg om dit probleem op te lossen. Mocht dit niet het probleem oplossen, neem dan contact op met support@civity.nl
                    </li>
                    <li>
                        Een View ontbreekt in veel van deze gevallen ook. Ook dit zal handmatig moeten gebeuren. 
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

[1] Zie documentatie voor meer informatie over de Datastore: https://docs.ckan.org/en/latest/maintaining/datastore.html.

[2] Zie CKAN documentatie over de Datastore API: https://docs.ckan.org/en/latest/maintaining/datastore.html#the-datastore-api

