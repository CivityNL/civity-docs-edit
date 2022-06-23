---
id: datasets_AddingDatasources
title: Databronnen toevoegen
sidebar_label: Databronnen toevoegen
---
>Alle bronnen worden opgeslagen in een dataset.

Bronnen kunnen alleen aan datasets worden toegevoegd nadat de dataset is toegevoegd en geconfigureerd. 

## Handmatig uploaden
> **CSV**- en **(geo)JSON**-bestandstypen zijn toegankelijk via de DataStore API. Andere datatypen worden opgeslagen en verstrekt als downloadlink.

Een bron kan een soort bestand zijn dat machinaal leesbaar is; dit omvat, maar is niet beperkt tot: **CSV**-, **JSON**-, **PDF**- en  **JPG**-bestandstypen. Daarnaast kunnen bronnen ook een link zijn. 

Zie <a href="#link-to-source">Link naar bron</a> voor meer informatie over databronnen 

### Aanvullende details
Met dit veld kun je elke vorm van aanvullende informatie toevoegen.

Typische aanvullende informatie omvat: 
* Naam: *Dit zal de bestandsnaam zijn, zorg ervoor dat deze beschrijvend is*
* Beschrijving: *Geef uitleg over de inhoud van het bestand*
* Formaat: *Het formaat waarin de bron wordt geleverd (CSV, XLS, JSON, PDF, enz.).*

Als je extra bronnen wilt toevoegen, kies je 'Opslaan en nog een toevoegen'. Als je er maar één hebt, kies je 'Einde'. 

> CKAN slaat nu het bestand op en maakt een dataset. Het resulterende item is binnen 30 minuten zichtbaar. Als de zichtbaarheid is ingesteld op ***Openbaar***, wordt de dataset zichtbaar op <a href="https://www.dataplatform.nl" target="_blank" rel="noreferrer noopener">DataPlatform</a>. ***Private*** datasets zijn niet zichtbaar op DataPlatform. 

## Link naar bron 
Alle bronnen worden opgeslagen in datasets. Alleen wanneer een dataset is ingesteld, mag een bron worden toegevoegd.

### Bron als link
> Linked data is niet beschikbaar als aanroepbare API

Wanneer data op een andere locatie worden opgeslagen, kun je deze toevoegen als gekoppelde bron. Elke soort link kan worden gebruikt: *URL*, *URI*, of een *API*.

## Real-time data
> Real-time data kunnen als bron worden toegevoegd, maar de installatie en configuratie moeten door Civity worden afgehandeld.  

Er moet een verbinding worden geconfigureerd tussen de API en Dataplatform. Fiware-componenten worden gebruikt om velden van de API te configureren, die vervolgens worden vertaald in nuttige open data.

## DataStore

De datastore maakt het mogelijk om specifieke data te bekijken en toegankelijk via API-aanroepen, waar mogelijk. data die niet in de datastore zijn geplaatst, zijn nog steeds toegankelijk, maar alleen door download.

### CKAN DataStore
>Als je data worden opgeslagen als **CSV**- of **(geo)JSON-bestandstype**, stelt CKAN ze automatisch beschikbaar in de Datastore 

CKAN Datastore is beschikbaar voor het bekijken en verwerken van databronnen; Je kunt deze informatie weergeven in een tabel- of kaartweergave. 

### DataStore beheren
Als je informatie in Datastore wilt bekijken of beheren, navigeer je naar de gewenste databron en selecteer je het tabblad **Datastore**. 

<img class="imageStyle"  target="_blank" alt="imageStyle: DataStore" src={require('./assets/Dataplatform/AddingDatasources/dataplatform_DATASETS_AddingDatasoruces_datastore.png').default} />

Om te controleren of een bron kan worden toegevoegd, klik je op de knop "Uploaden naar DataStore".

> ***Headers***
>
> DataStore bepaalt automatisch of headers mogen worden geconstrueerd; een koptekst(en) is de eerste horizontale vermelding in een kolom. Het datatype (numeriek, tekst, tijdstempel, enz.) wordt bepaald door de eerste 250 vermeldingen.

Tabeldata worden geüpload in brokken van 250 gehelen tegelijk. Dit betekent dat grote bestanden, met veel vermeldingen, enige tijd kunnen duren voordat ze als voorbeeld worden weergegeven. Als je wacht tot de data als voorbeeld worden weergegeven, klik dan niet opnieuw op "Uploaden naar DataStore". Vernieuw in plaats daarvan de pagina of het tabblad. 

Wanneer je upload is voltooid, zie je ***Voltooid*** naast het veld ***Statistieken***. 

<img class="imageStyle" target="_blank" alt="imageStyle: DataStore" src={require('./assets/Dataplatform/AddingDatasources/dataplatform_DATASETS_AddingDatasoruces_datastoreComplete.png').default} />

### DataStore Foutafhandeling
> DataStore zal een fout veroorzaken wanneer de preview of API-creatie niet correct wordt afgehandeld; de data zelf kunnen nog steeds correct zijn.

Als de groene **API-knop** ontbreekt of als het aantal vermeldingen niet overeenkomt met de oorspronkelijke databron, is er waarschijnlijk een fout opgetreden bij het dupliceren van de dataverwerking. Als je de foutconditie wilt controleren, navigeer je vanuit de databron naar het tabblad DataStore. 

#### Veelvoorkomende fouten

<table class="versions">
    <tbody>
        <tr>
            <th>Bericht</th>
            <th>Uitleg</th>
            <th>Probleemoplossing</th>
        </tr>
        <tr>
            <td>
                <strong>
                Fout __context__: 'De data waren ongeldig (bijvoorbeeld: een numerieke waarde is buiten bereik of is ingevoegd in een tekstveld). 
                </strong>
            </td>
            <td>
                <ul>
                    <li>Alleen nummers zijn verschenen in de eerste 250 rijen. </li>
                    <li> Een veld bevat twee verschillende soorten data (bijv. <i>2412<strong>K</strong></i>). Dit zorgt ervoor dat DataStore stopt met indexeren bij de desbetreffende rij.</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Voeg een titel toe aan elke kolom en geef aan wat voor soort data de kolom bevat (bijv. Datum, tijd, valuta, enz.)</li>
                    <li>Zoek het verkeerde veld en pas het aan zodat het slechts één type data bevat</li>
                    <li>Een numerieke koptekst in Data Dictionary corrigeren naar gewone tekst</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <strong>Fout: Kan geen verbinding maken met datapusher</strong>
                <p>
                        Normaal gesproken pusht de datapusher automatisch data naar de datastore bij het maken van een databron. 
                </p>
                <p>
                        Deze fout heeft tot gevolg dat een databron niet correct wordt geüpload naar de datastore, omdat de datapusher geen verbinding kon maken
                </p>
            </td>
            <td>
                <ul>
                    <li>
                        Omdat deze fout meestal optreedt bij het maken van een databron, is de beste optie om opnieuw te proberen te uploaden naar de datastore. Dit zal het probleem bijna altijd oplossen. Als dit niet het geval is, neem contact op met Civity. 
                    </li>
                    <li>
                        Doordat er geen verbinding kan worden gemaakt met de datapusher, wordt er vaak ook geen weergave gemaakt. Dit kan handmatig worden gedaan. 
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>


