---
id: meerdere_toewijzen
title: Meerdere thema's toewijzen 
sidebar_label: Meerdere thema's toewijzen
---
## Meerdere thema’s toewijzen

In de metadata kan slechts één thema worden toegewezen. Dit is een vereiste van de DCAT-standaard. Het kan voorkomen dat een vermelding binnen meerdere thema’s past. Het is voor nu niet mogelijk om meerdere thema´s te selecteren via de metadata. Om dit mogelijk te kunnen maken zou een aanpassing van het metadataschema nodig zijn. Dit kan tot gevolg hebben dat de DCAT-ondersteuning niet meer werkt.

## Systeembeheerders en aanpassingen aan Thema's

> Systeembeheerders wordt aangeraden om geen wijzigingen aan vermeldingen te doen. Door de extra functionaliteit die deze sysadmins bezitten kunnen fouten ontstaan.

Standaard kan via CKAN een thema/groep worden aangewezen door de desbetreffende vermelding aan te klikken en vervolgens naar het tabblad Thema’s te gaan. Hier kan het gewenste thema worden gekozen en worden toegevoegd door op Voeg toe aan Thema te klikken. Hoewel voor normale gebruikers de mogelijkheid is uitgezet om Thema's via het tabblad Thema's toe te voegen, hebben systeembeheerders (sysadmins) als enige nog wel de optie. 

Zoals aangegeven, is er bewust voor gekozen om deze optie voor normale gebruikers uit te zetten. Het is dus ook niet aanbevolen om als systeembeheerder extra thema's toe te voegen. Naast dat dit niet conform de DCAT-standaard is, zal dit tot het volgende probleem leiden:

Bij de eerstvolgende wijziging in de metadata zal het metadataveld Thema worden aangeheouden om een vermelding aan een thema toe te wijzen. Dit is dus per definitie 1 thema en zal altijd leidend zijn. Het toevoegen van meerdere thema's wordt dus op deze wijze overschreven. 

