---
id: dataregisters_LinkToNGR
title: Koppeling NGR
sidebar_label: Koppeling NGR
---

> Dataplatform heeft een koppeling met het Nationaal Georegister (NGR).
  Nationaal Georegister maakt gebruik van een GeoNetwork-instantie.

Op datasetniveau kan via het metadataveld `Publiceren NGR` worden aangegeven of je de data wil doorzetten naar het Nationaal Georegister (NGR).

:::caution Let op!

De koppeling met NGR kan alleen plaatsvinden als de data ook is doorgezet naar GeoServer. Het metadataveld `Publiceren GeoServer` moet dus in dat geval ook met `ja` worden ingevuld.

:::

Via NGR wordt data ook automatisch op data.overheid.nl beschikbaar gesteld. Het metadataveld Publiceren DONL (niet via NGR) moet daarom met 'Nee' worden ingevuld om te voorkomen dat data dubbel wordt doorgezet naar DONL.

Wanneer metadatavelden niet zijn ingevuld of er een waarde is ingevuld die niet overeenkomt met wat NGR verwacht, zal er een default waarde worden meegegeven. Dit betekent dat de metadata die op NGR te vinden is, anders kan zijn dan wat er op Dataplatform te zien is voor de desbetreffende dataset.