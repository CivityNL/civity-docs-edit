---
id: datasets_AddingDatasets
title: Adding Datasets
sidebar_label: Adding Datasets
---

Adding a dataset represents the first step in adding a new data entry. The second step is [adding a resource](datasets_AddingDatasources)

Go to the 'DATASETS' tab. When you are authorized to create datasets, you will see a button 'Add dataset' right above the search bar. By clicking on the button you start adding a dataset.

## DataPlatform metadata schema

DataPlatform supports multiple metadata schemas. What fields are present in the metadata schema is controlled using JSON configuration files. The metadata schema consists of a number of building blocks. These building blocks can be combined to create a complete schema. Since DataPlatform has to be able to be part of a federative system of metadata catalogues, the DataPlatform metadata should adhere to some form of standard, preferably a country specific DCAT application profile.

Setting up the metadata schema for DataPlatform is done by Civity.

### Building blocks

#### CKAN

The first (and only mandatory building block) contains the fields required by CKAN. These include for example a title, description, keywords and a license.

#### DCAT

The second important building block contains the DCAT fields. Currently, this building block is by far the biggest building block, defining more fields than any other building block. Different DCAT application profiles which can be implemented in DataPlatform have been created for different countries. Currently, <a href="https://docs.dataportal.se/dcat/en/" target="_blank" rel="noreferrer noopener">DCAT-AP-SE (Sweden)</a> and <a href="https://dcat-ap-donl.readthedocs.io/en/latest/" target="_blank" rel="noreferrer noopener">DCAT-AP-DONL (the Netherlands)</a> are available.

#### NGR

For Dutch customers, a building block to collect the information required by the Nationaal Georegister (NGR) is present.

## Overview of metadata fields

Within the DataPlatform metadata schema, there are a lot of metadata fields that can be filled in. Fields with an asterisk are required to be filled in. Below you will find an overview of all metadata fields for our DataPlatform metadata schema.

<img class="imageStyle" alt="image: Adding Datasets" src={require('./assets/Dataplatform/AddingDatasets/dataplatform_user_addingDatasets_Overview.png').default} />

### Title and URL

The title you choose will be rendered as part of the dataset’s URL. The URL is generated in the following template: `{dataplatform_instance_url}/dataset/{dataset_id}`. When the title is generated into a URL, capital letters will be converted to small letters and spaces will be replaced by hyphens ( - ).

A title is a unique identifier – it must be short and specific. For example, “**Sport Events 2016 Utrecht**” is much more specific than “**Sporting Events**.” For best results, specify the location of the dataset inside the title, as this will allow users to better find your dataset on <a href="https://www.dataplatform.nl" target="_blank" rel="noreferrer noopener">Dataplatform</a>.

A good naming guideline to follow when creating a title:

```sh
root_category - subject - location:year - version:number
```

An example using our naming guideline:

```sh
Sport - Sport Events - Utrecht 2019 - Version 1
```

<img class="imageStyle shadowing" alt="SCREENCAST: adding a title" src={require('./assets/Dataplatform/AddingDatasets/dataplatform_user_addingDatasets_AddTitle.gif').default} />

### Description

This field represents an overview of your dataset. Your description should answer the following questions:

- What is the data about?
- Where does the data come from?
- What is the quality of the data?
- Over what timeframe or period was the data recorded?

You may use <a href="https://www.markdownguide.org/basic-syntax" target="_blank" rel="noreferrer noopener">markdown formatting</a> in the description field. This allows you to utilize headers, lists, **bold**, and _italics._

For example, the following raw markdown:

```sh
* **Description:** Sporting Events Utrecht
* **Source:** Permits Department
* **Target:** Providing insights into events from the municipality
* **Limitations:** This dataset is not to be used for legal purposes
* **Possibilities:** This dataset may be used for insight into locations on a map
* *Coordinate System:* *WGS84*
```

Will be rendered as:

- **Description:** Sporting Events Utrecht
- **Source:** Permits Department
- **Target:** Providing insights into events from the municipality
- **Limitations:** This dataset is not to be used for legal purposes
- **Possibilities:** This dataset may be used for insight into locations on a map
- _Coordinate System:_ _WGS84_

### Organization

If you are part of an organization, you may only add and manage datasets and resources that are connected to that organization. this field is filled in automatically.

### Visibility

In DataPlatform, there are two types of visibility options: 'Private' and 'Public'. Datasets set as 'Private' can only be viewed within DataPlatform by users with appropriate organizational rights. In addition, the dataset is not visible on the Open Data Portal.

The visibility status of your dataset is indicated by a label in the top-right corner.

<img class="imageStyle" alt="image: Dataset - Private Flag" src={require('./assets/Dataplatform/AddingDatasets/dataplatform_user_addingDatasets_priveIndicator.png').default} />

### License

Licenses dictate how your dataset may be used. You can find information about open data licenses at <a href="http://opendefinition.org/licenses/" target="_blank" rel="noreferrer noopener">Open Definition</a>

Licenses are selected by clicking on the dropdown box; you must select an option.

The default license for open data is “Creative Commons CC Zero.” This means that the dataset may be used without limitations. The “Creative Commons Attribution” license allows users to freely use your data, but they must reference the source of the data.

### Tags

It is advisable to enter tags that do not appear in the description or title of your dataset. DataPlatform already indexes keywords in the Title and Description fields.

Tags influence search terms. Utilizing tags will make your datasets easier to find. Entering the first few letters of your intended tag will make DataPlatform search for the closest existing match – if it matches, click on the tag in the dropdown list.

If your intended tag does not match any existing entries, complete the entire word, then hit the _return_ key. Once your new tag has been entered, it is now possible to use this as an existing tag.
If you select the wrong tag, you may remove it by click on the cross “X” in front of the word.

<img class="imageStyle shadowing" alt="SCREENCAST: adding tags" src={require('./assets/Dataplatform/AddingDatasets/dataplatform_user_addingDatasets_AddTags.gif').default} />

### Theme

Themes are based on the corresponding DCAT value lists.

### Publisher

Entity responsible for maintenance and publication of the dataset.

### Type of publisher

Based on DCAT value list.

### Language

Language of the data. Dropdown menu with values Swedish and English.

### Landing Page

Webpage that provides additional information about the dataset, its metadata or from the supplying organization.

### Contact point type

This property tells whether the contact point corresponds to an Individual or an Organisation.

### Contact point name

Name of the contact point.

### Contact point email

Email of the contact point.

### Contact point phone

Phone number of the contact point.

### Contact point address

Address of the contact point.

### Spatial

The schemes of the spatial value.

### Temporal start

A point in time, together with temporal_end it describes a period in time.

### Temporal end

A point in time, together with temporal_start it describes a period in time.

### Access rights

The level of openness of the dataset. Values are Public, Non Public, and Restricted

### Issued

Date on which the dataset was published

### Version

Version number. Should be a numeric value

### Version Notes

Description of changes compared to previous version.

### Frequency

Frequency of change datasource. Based on DCAT value list.

### Related resource

Reference to a any kind of related resource

### Source

Reference to another dataset.

### Conforms to

URL to established schema to which distribution conforms.

### Has version

Refers to a related Dataset URL that is a version, edition, or adaptation of the described Dataset.

### Is version of

Refers to a related Dataset URL of which the described Dataset is a version, edition, or adaptation.

### Alternative ID

The alternative ID can be found in the URL of the dataset; every data set and data source has a unique ID.

### Provenance

This field contains a statement about the lineage of a Dataset.

### Link to Geoserver

If the dataset contains geographic data, it can be published to GeoServer.

## Save

At the bottom of the metadata schema are two options for saving the created metadata. The options are 'Save without data' or 'Next: Add data'.

With the first option, 'Save without data', you save the dataset with only the metadata. No resource with actual data will be included.

With the second option, 'Next: Add data', there is the possibility to add resources. This can be done via an external URL or by adding a file.
