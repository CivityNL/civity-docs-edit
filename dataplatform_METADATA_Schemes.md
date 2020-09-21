---
id: metadata_Schemes
title: Schemes
sidebar_label: Schemes
---
>Metadata can be written in many different ways, and every country has their own metadata definition, following the DCAT Standard. Datacatalogue has unique metadata for every data product. 

## Scheme Metadata 

A Scheme/Schema is where metadatafields are described; all schema follow the [DCAT standard](metadata_DCAT).

All datasets require the following metadata fields: 
* A unique ID 
* Title 
* Description 
* Owner / maintainer / publisher 
* Plus the following fields: 
     * Language
     * Theme 
     * License 
     * Format 

Furthermore, every metadata-field determines what will populate the form. For example: text, datestamp, a string, emailadress or a dropdown menu with a value list. 

A value list is variable. 

In the schema in CKAN the following fields are described: 
* Name of metadata-field (according to international standards) 
* Label in English 
* Label in another language (Dutch, Swedish) 
* Format 
* Mandatary: true or false 
* Value-list (if needed) 