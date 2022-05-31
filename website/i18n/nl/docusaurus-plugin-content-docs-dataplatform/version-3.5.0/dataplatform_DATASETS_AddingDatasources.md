---
id: datasets_AddingDatasources
title: Databronnen toevoegen
sidebar_label: Databronnen toevoegen
---
>Alle bronnen worden opgeslagen in een dataset.

Bronnen kunnen alleen aan datasets worden toegevoegd nadat de dataset is toegevoegd en geconfigureerd. 

## Handmatig uploaden
> **CSV**- en **(geo)JSON**-bestandstypen zijn toegankelijk via de DataStore API. Andere gegevenstypen worden opgeslagen en verstrekt als downloadlink.

Een bron kan een soort bestand zijn dat machinaal leesbaar is; dit omvat, maar is niet beperkt tot: **CSV**-, **JSON**-, **PDF**- en  **JPG**-bestandstypen. Daarnaast kunnen bronnen ook een link zijn. 

Zie <a href="#link-to-source">Link naar bron</a> voor meer informatie over databronnen 

### Aanvullende details
Met dit veld kunt u elke vorm van aanvullende informatie toevoegen.

Typische aanvullende informatie omvat: 
* Naam: *Dit zal de bestandsnaam zijn, zorg ervoor dat deze beschrijvend is*
* Beschrijving: *Geef uitleg over de inhoud van het bestand*
* Formaat: *Het formaat waarin de bron wordt geleverd (CSV, XLS, JSON, PDF, enz.).*

Als u extra bronnen wilt toevoegen, kiest u 'Opslaan en nog een toevoegen'. Als je er maar één hebt, kies je 'Einde'. 

> CKAN slaat nu het bestand op en maakt een dataset. Het resulterende item is binnen 30 minuten zichtbaar. Als de zichtbaarheid is ingesteld op ***Openbaar***, wordt de dataset zichtbaar op <a href="https://www.dataplatform.nl" target="_blank" rel="noreferrer noopener">DataPlatform</a>. ***Private*** datasets zijn niet zichtbaar op DataPlatform. 

## Link naar bron 
Alle bronnen worden opgeslagen in datasets. Alleen wanneer een gegevensset is ingesteld, mag een bron worden toegevoegd.

### Bron als link
> Linked data is niet beschikbaar als aanroepbare API

Wanneer gegevens op een andere locatie worden opgeslagen, kunt u deze toevoegen als gekoppelde bron. Elke soort link kan worden gebruikt: *URL*, *URI*, of een *API*.

## Real-time data
> Real-time data kunnen als bron worden toegevoegd, maar de installatie en configuratie moeten door Civity worden afgehandeld.  

Er moet een verbinding worden geconfigureerd tussen de API en Dataplatform. Fiware-componenten worden gebruikt om velden van de API te configureren, die vervolgens worden vertaald in nuttige open data.

## DataStore

De datastore maakt het mogelijk om specifieke gegevens te bekijken en toegankelijk via API-aanroepen, waar mogelijk. Gegevens die niet in de datastore zijn geplaatst, zijn nog steeds toegankelijk, maar alleen door download.

### CKAN DataStore
>Als uw gegevens worden opgeslagen als **CSV**- of **(geo)JSON-bestandstype**, stelt CKAN ze automatisch beschikbaar in de Datastore 

CKAN Datastore is beschikbaar voor het bekijken en verwerken van gegevensbronnen; U kunt deze informatie weergeven in een tabel- of kaartweergave. 

### DataStore beheren
Als u informatie in Datastore wilt bekijken of beheren, navigeert u naar de gewenste gegevensbron en selecteert u het tabblad **Datastore**. 

<img class="imageStyle"  target="_blank" alt="imageStyle: DataStore" src={require('./assets/Dataplatform/AddingDatasources/dataplatform_DATASETS_AddingDatasoruces_datastore.png').default} />

Om te controleren of een bron kan worden toegevoegd, klikt u op de knop "Uploaden naar DataStore".

> ***Headers***
>
> DataStore bepaalt automatisch of headers mogen worden geconstrueerd; een koptekst(en) is de eerste horizontale vermelding in een kolom. Het gegevenstype (numeriek, tekst, tijdstempel, enz.) wordt bepaald door de eerste 250 vermeldingen.

Tabelgegevens worden geüpload in brokken van 250 gehelen tegelijk. Dit betekent dat grote bestanden, met veel vermeldingen, enige tijd kunnen duren voordat ze als voorbeeld worden weergegeven. Als u wacht tot de gegevens als voorbeeld worden weergegeven, klikt u niet opnieuw op "Uploaden naar DataStore". Vernieuw in plaats daarvan de pagina of het tabblad. 

Wanneer uw upload is voltooid, ziet u ***Voltooid*** naast het veld ***Statistieken***. 

<img class="imageStyle" target="_blank" alt="imageStyle: DataStore" src={require('./assets/Dataplatform/AddingDatasources/dataplatform_DATASETS_AddingDatasoruces_datastoreComplete.png').default} />

### DataStore Foutafhandeling
> DataStore zal een fout veroorzaken wanneer de preview of API-creatie niet correct wordt afgehandeld; de gegevens zelf kunnen nog steeds correct zijn.

Als de groene **API-knop** ontbreekt of als het aantal vermeldingen niet overeenkomt met de oorspronkelijke gegevensbron, is er waarschijnlijk een fout opgetreden bij het dupliceren van de gegevensverwerking. Als u de foutconditie wilt controleren, navigeert u vanuit de gegevensbron naar het tabblad DataStore. 

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
                Fout __context__: 'De gegevens waren ongeldig (bijvoorbeeld: een numerieke waarde is buiten bereik of is ingevoegd in een tekstveld). 
                </strong>
            </td>
            <td>
                <ul>
                    <li>Alleen nummers zijn verschenen in de eerste 250 rijen. </li>
                    <li> Een veld bevat twee verschillende soorten gegevens (bijv. <i>2412<strong>K</strong></i>). Dit zorgt ervoor dat DataStore stopt met indexeren bij de desbetreffende rij.</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Voeg een titel toe aan elke kolom en geef aan wat voor soort gegevens de kolom bevat (bijv. Datum, tijd, valuta, enz.)</li>
                    <li>Zoek het verkeerde veld en pas het aan zodat het slechts één type gegevens bevat</li>
                    <li>Uw numerieke koptekst in Data Dictionary corrigeren naar gewone tekst</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <strong>Fout: Kan geen verbinding maken met datapusher</strong>
                <p>
                        Normaal gesproken pusht de datapusher automatisch gegevens naar de datastore bij het maken van een gegevensbron. 
                </p>
                <p>
                        Deze fout heeft tot gevolg dat een gegevensbron niet correct wordt geüpload naar de datastore, omdat de datapusher geen verbinding kon maken
                </p>
            </td>
            <td>
                <ul>
                    <li>
                        Omdat deze fout meestal optreedt bij het maken van een gegevensbron, is de beste optie om opnieuw te proberen te uploaden naar de datastore. Dit zal het probleem bijna altijd oplossen. Als dit niet het geval is, neemt u contact op met Civity. 
                    </li>
                    <li>
                        Doordat er geen verbinding kan worden gemaakt met de datapusher, wordt er vaak ook geen weergave gemaakt. Dit kan handmatig worden gedaan. 
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>


