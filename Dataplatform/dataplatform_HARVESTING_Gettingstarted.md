---
id: harvesting_GettingStarted
title: Getting Started
sidebar_label: Getting Started
---




This step-by-step tutorial will show you how to set up one of the **[three types of harvester options in CKAN](harvesting_Harvesting#types-of-harvesters)**. 

>***Note***: This tutorial assumes background knowledge of what type of sources are compliant with the three harvester options in CKAN

### Example: JSON DCAT Harvester

We will demonstrate the set up of a harvester using the JSON DCAT Harvester. Setting up this harvester will allow you to harvest data from JSON objects based on DCAT metadata fields into your CKAN instance. 

Some examples of JSON DCAT sources:

* https://raw.githubusercontent.com/ckan/ckanext-dcat/master/examples/dataset.json
* https://geoportaal-ddh.opendata.arcgis.com/data.json
* https://metadata.geodata-utrecht.nl/dcat

### Where to start:

To start setting up a harvester in CKAN you need to add **/harvest** to the URL of your CKAN instance (i.e., https://[insert-ckan-portal-name]**/harvest**).

On the **/harvest** page, you will see an overview of harvester sources that are currently set up. From this page you are able to add new harvesters as well.

### Adding a harvester

- Go to Add Harvest Resource

![Title](assets/Dataplatform/Harvesting/Adding_harvest_source2.PNG)


### Create harvesting source

After clicking 'Add Harvest Resource' you need to fill the separate fields:

* Fill in URL (mandatory)

![Title](assets/Dataplatform/Harvesting/URL_field.PNG)

The URL contains the actual harvesting source. In our example we will use a JSON file which consists of DCAT metadata for two datasets. Each dataset in our example contains multiple different file types. The example JSON file that is used can be viewed below.

**[Click here to view JSON DCAT file](assets/Dataplatform/Harvesting/Example_file.json)**

* Add a title (mandatory)

![Title](assets/Dataplatform/Harvesting/Title.PNG)

The title that is provided will be used in the URL name of the harvester.

* Provide a description

![Title](assets/Dataplatform/Harvesting/Description.PNG)

* Select the appropriate source type

![Title](assets/Dataplatform/Harvesting/Source_type.PNG)

In our example the source type is the DCAT JSON Harvester

* Provide the desired update frequency

![Title](assets/Dataplatform/Harvesting/Frequency.PNG)

In our example, the update frequency is set to manual. Other options are: always, weekly, biweekly, or monthly.
When frequency is set to 'always', the harvester will reharvest as often as possible. In other words this option lets the harvester run with the smallest time-interval possible.

* Provide custom configuration

![Title](assets/Dataplatform/Harvesting/Config.PNG)

Under configuration you can provide additional requirements or fields using JSON objects.

[Click here to view an example of additional JSON configuration](assets/Dataplatform/Harvesting/example2.json)

* Select the appropriate organisation from a dropdown list

![Title](assets/Dataplatform/Harvesting/Organisation.PNG)

* Now click the save button  

![Title](assets/Dataplatform/Harvesting/Save.PNG)

The harvester is now set up. The next step is to get the harvester to start running.

### Run harvester

- Click admin

![Title](assets/Dataplatform/Harvesting/Click_admin.PNG)

- Click 'Reharvest' to start the harvesting process

![Title](assets/Dataplatform/Harvesting/Click_reharvest.PNG)

- Click confirm to start the actual harvesting

![Title](assets/Dataplatform/Harvesting/Click_confirm.PNG)

### Process of harvesting

- You will now see a page that shows that the harvester is running

![Title](assets/Dataplatform/Harvesting/Harvester_running.PNG)

In our example, it shows 0 Datasets that are added. By clicking 'Dashboard' the page refreshes. 

- Depending on the source, the harvester process will take one to several minutes to finish

![Title](assets/Dataplatform/Harvesting/Harvester_done.PNG)

In our example the page shows that two datasets were added. 

### View harvested datasets

* Click view harvesting source to see the added datasets

![Title](assets/Dataplatform/Harvesting/View.PNG)

* The two datasets are now visible 

![Title](assets/Dataplatform/Harvesting/Datasets.PNG)
