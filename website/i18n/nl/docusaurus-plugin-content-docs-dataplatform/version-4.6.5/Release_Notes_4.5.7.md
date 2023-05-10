---
title: V4.5.7 release notes
---

Startpagina laadt markdown van CKAN

- De inhoud van de startpagina wordt geladen vanuit CKAN
- Als er geen inhoud van de startpagina wordt gevonden, gaat deze naar de systeempagina-informatie
- Plumbingtaak om http.client-oproepen in de code te verwijderen en naar de nieuwe ApiService te verwijzen om alle oproepen te doen.
- Uitzondering kan worden toegevoegd voor unieke url's om organisaties te herkennen in niet-dataplatform-url's.
- Organisaties die geen klant meer zijn verwijderd uit de config.
