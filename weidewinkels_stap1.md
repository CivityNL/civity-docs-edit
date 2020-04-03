---
id: datacollection_stap1
title: Connect to our Dataplatform
sidebar_label: - Connect to our Dataplatform
---

In our Farmer Shops example, the names of the input fields of our form correspond to the column names in the dataset. After the user submits the form, a new record is added to a CSV file that is stored in the CKAN Datastore on our Dataplatform. In order to insert these new records we make use of the <a href="https://docs.ckan.org/en/latest/maintaining/datastore.html#the-datastore-api" target="_blank">CKAN Datastore API</a>.

![Harvester title field](assets/DataToolkit/DataToolkit_columns.PNG)
---
*In our example, the entry-field 'Bedrijfsnaam', corresponds to column name 'company'.*

## How do I set this up for my own project?

The only thing you need to do, is create your own data-entry form. We can assist in connecting this form to a new dataset in our Dataplatform. We will make sure to set up a custom dataset in our Dataplatform to which records can be added. 

The dataset will consist of a datasource, an (empty) CSV file, with the desired columnnames. An API will be created for this datasource once it is uploaded to the CKAN Datastore through our platform. In order to use the CKAN Datastore API, an API key is needed. We will give you access to this as well.

All of the collected data will automatically be saved on our Dataplatform. The data will be available for the public to view and download on our open data portal at https://www.dataplatform.nl. If your data consists of Geo data, there is also the possibility to upload the dataset to Geoserver, which is integrated in our Dataplatform.

In the next section we will explain how you can use the CKAN Datastore API to insert new records to your dataset.








