---
id: datasets_DataDictionary
title: Data Dictionary
sidebar_label: Data Dictionary
---

> The Data Dictionary is a module that, for specific file types, automatically detects column names and data types used within these specific columns.

## What can I do with the Data Dictionary?

The Data Dictionary can be used to describe the content of a dataset more explicitely using labels and descriptions.

The Data Dictionary form allows entering the following values for each column:
*	Type Override: the type to be used the next time DataPusher is run to load data into this column
*	Label: a human-friendly label for this column
*   Description: a full description for this column in markdown format

#### Data Dictionary table in CKAN:
![Title](assets/Dataplatform/DataDictionary/Data_dict_CKAN.PNG)

## Does every datasource have a Data Dictionary?

No, only certain file types support Data Dictionary functionality. Currently supported file formats for datasources in Dataplatform are: **CSV**, **XLS**, and **XLSX**. 

If the datasource is uploaded to the [DataStore](datasets_AddingDatasources#datastore) correctly, the Data Dictionary table will be added.

## Where can I find the Data Dictionary?

The Data Dictionary can be viewed in **CKAN** as well as on the **Portal**.

#### CKAN: 
Click on a dataset -> click on a datasource
#### Portal
Click on a dataset -> Click on the tab *Table* -> Click on *Data dictionary*

## How to edit the Data Dictionary of a datasource

> The Data Dictionary can be edited within your CKAN instance

#### 1.  Within a dataset, click on the *Explore* button of the datasource you want to edit and then click on *Edit*

![Title](assets/Dataplatform/DataDictionary/Data_dict_edit.PNG)

#### 2. Go to the tab *Data dictionary*

![Title](assets/Dataplatform/DataDictionary/Data_dictionary_edit.PNG)

#### 2. Edit Type/Label/Description

![Title](assets/Dataplatform/DataDictionary/Data_dict_edit_field.PNG)



#### 3. Lastly, click the save button shown below
    
![Title](assets/Dataplatform/DataDictionary/Data_dict_save.PNG)

#### Changes as shown in the Portal:

![Title](assets/Dataplatform/DataDictionary/Data_dict_portal.PNG)