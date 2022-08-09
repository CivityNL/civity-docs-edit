---
id: dataoverheid_LinkToDataOverheid
title: Link to National Data Portal
sidebar_label: Link To National Portal
---

The link to *Data Overheid* is the service that allows datasets in <a href="https://www.dataplatform.nl/" target="_blank">**Dataplatform**</a> to be synched with <a href="https://data.overheid.nl/" target="_blank">**Data Overheid**</a>.
![Dataplatform_To_Data_Overheid](assets/Dataplatform/LinkToDataOverheid/Dataplatform_to_Overheid.svg)

## How it works

This service **runs every night**, and syncronyzes all, **publicly available**, datasets in *Dataplatform*.

> Only **public datasets** in *Dataplatform* are synched to *Data Overheid*
  
Metadata fields **restrictions** vary in  *Data Overheid* and *Dataplatform*. 
In order to comply with both schemas we defined a set of **default values** that are used
to replace invalid/absent values.

Here is the list of **Default Values** and corresponding metadata fields in *Dataplatform*/*Data Overheid*:


| Dataplatform Field  | Data Overheid Field  | Default Value |
|---|---|---|
|owner_org (*organization*) | authority | 'http://standaarden.overheid.nl/op/terms/overig'  |
|maintainer_email | contact_point_email | 'support@civity.nl'  |
|maintainer | contact_point_name | 'Dataplatform'  |
|(any) date field | (any) date field | Current Time in following format '%Y-%m-%dT%H:%M:%S'  |
|description | description | 'No Description'  |
|format | format | 'http://publications.europa.eu/resource/authority/file-type/TXT'  |
|language | language | 'http://publications.europa.eu/resource/authority/language/NLD'  |
|license_id | license_id | 'http://creativecommons.org/publicdomain/zero/1.0/deed.nl'  |
|metadata_language | metadata_language | 'http://publications.europa.eu/resource/authority/language/NLD'  |
|name | name | 'Naamloze bron'  |
|notes | notes | 'Geen beschrijving'  |
|publisher | publisher | 'http://standaarden.overheid.nl/op/terms/overig'  |
|theme | theme | 'http://standaarden.overheid.nl/owms/terms/Bestuur'  |
|title | title | 'Naamloze dataset'  |

## Data Overheid
More information about ***Data Overheid*** here: 
- <a href="https://data.overheid.nl/" target="_blank">***Data Overheid* Portal**</a>
- <a href="https://data.overheid.nl/data/" target="_blank">***Data Overheid* CKAN**</a>
- <a href="https://ckanext-dcatdonl.readthedocs.io/en/latest/index.html" target="_blank">**Documentation DataOverheid Extension**</a>
   - <a href="https://ckanext-dcatdonl.readthedocs.io/en/latest/schema-dataset.html" target="_blank">**Dataset Metadata Schema**</a>
   - <a href="https://ckanext-dcatdonl.readthedocs.io/en/latest/schema-resource.html" target="_blank">**Resource Metadata Schema**</a>
- <a href="https://github.com/dataoverheid/ckanext-dataoverheid" target="_blank">**GitHub repository for DataOverheid Extension**</a>

## Known Limitations

    - Resources can't have the same name under the same dataset.
    - Names are the unique identifier, can't be duplicated in the whole Data Overheid side.
    - Currently not all the metadata fields are being synchronized.