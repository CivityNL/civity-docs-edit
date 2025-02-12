---
id: dataoverheid_LinkToDataOverheid
title: Koppeling data.overheid.nl
sidebar_label: Koppeling data.overheid.nl
---

Via Dataplatform is het mogelijk om datasets te publiceren op het Dataregister van de Nederlandse Overheid, <a href="https://data.overheid.nl/" target="_blank"> data.overheid.nl (DONL)</a>.
<!-- ![Dataplatform_To_Data_Overheid](assets/Dataplatform/LinkToDataOverheid/Dataplatform_to_Overheid.svg) -->

## Hoe werkt het?

<!-- This service **runs every night**, and syncronyzes all, **publicly available**, datasets in *Dataplatform*. -->

Wanneer `Ja` wordt geselecteerd bij het metadataveld `Publiceren DONL (niet via NGR)`, wordt de dataset automatisch doorgezet naar data.overheid.nl (DONL). 

> Alleen datasets waarbij zichtbaarheid op **Publiek** staat worden gesynchroniseerd met DONL.

Deze synchronisatie vindt real-time plaats. Wanneer er wijzgingen aan de dataset worden gedaan, zal de sync opnieuw lopen. Zo wordt de data dus ook direct bijgewerkt op DONL.

Wanneer metadatavelden niet zijn ingevuld of er een waarde is ingevuld die niet overeenkomt met wat DONL verwacht, zal er een default waarde worden meegegeven. Dit betekent dat de metadata op DONL anders kan zijn dan wat er op Dataplatform te zien is.


## Bekende beperkingen

    - Databronnen kunnen niet dezelfde naam hebben onder dezelfde dataset.
    - De naam dient als de unieke identifier en kan dus niet gedupliceerd worden in data.overheid.nl.
    - Niet alle metadatavelden worden gesynchroniseerd. Sommige niet-verplichte velden hebben geen mapping met DONL.