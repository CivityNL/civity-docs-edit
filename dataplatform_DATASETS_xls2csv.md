---
id: datasets_xls2csv
title: Generate CSV from XLS resource
sidebar_label: Generate CSV from XLS resource
---
When a user wants to upload an xls resource inside a dataset, she now has the ability to convert it into a csv format. 
With the newly added CSV option the user can choose to generate a CSV resource with the same metadata and content 
of the original XLS resource. These two resources will be bound together and will be 
simultaneously manipulated. They will be simultaneously updated and deleted. The new csv resource holds the same name 
as the original with the prefix: ***CSV.** xls resource name*

<img class="imageStyle" src="/docs/assets/Dataplatform/xls2csv/dataplatform_DATASETS_xls2csv_ConvertSingle.png" alt="SCREENCAST: ConvertSingle"/>

The user has also the ability to generate a new csv resource in an existing xls resource, through selecting the add CSV option and updating the xls resource. She can even delete a previously generated csv resource by setting the CSV option to 'No action' and updating the resource.

> Overall, this ckan extension offers the above options when uploading an xls resource:
>* ADD CSV ON XLS CREATE
>* UPDATE CSV ON XLS UPDATE
>* ADD CSV ON XLS UPDATE
>* DELETE CSV ON XLS UPDATE 
>* DELETE CSV ON XLS DELETE

If the xls resource contains more than one spreadsheets, then there are generated as many csv resources as the number 
of the xls spreadsheets. The new csv resources names follow the same name structure as described and also the spreadsheet
name as suffix: *CSV.xls resource name.**spreadsheet name***

<img class="imageStyle" src="/docs/assets/Dataplatform/xls2csv/dataplatform_DATASETS_xls2csv_ConvertMulti.png" alt="SCREENCAST: ConvertMulti"/>

<br/><br/><br/>
In this <a href="https://youtu.be/z6xj3kO8BJc">video</a> you can watch a thorough demonstration of this new feature.


