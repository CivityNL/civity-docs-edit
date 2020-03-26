---
id: datasets_AddingDatasources
title: Adding Datasources
sidebar_label: Adding Datasources
---
>All sources are stored within a dataset.

Sources may be added to datasets, only after the dataset has been added and configured.

## Manual Upload
> **CSV** and **(geo)JSON** filetypes are accessible by Dataplatform’s API. Other datatypes are saved and provided as a download link.

A source can be an kind of file that is machine-readable; this includes, but is not limited to: **CSV**, **JSON**, **PDF**, and **JPG** file types. Additionally, sources may also be a link. 

For more information regarding datasources, see <a href="#link-to-source">Link To Source</a>

### Additional Details
This field allows you to add any kind of additional information.

Typical additional information includes:
* Name: *This will be the filename, ensure it is descriptive*
* Description: *Provide an explanation of the contents of the file*
* Format: *The format in which the source is provided (CSV, XLS, JSON, PDF, etc).*

If you have additional sources to add, choose "Save & Add Another." If you only have one, choose "End."

> CKAN will now save the file and create a dataset. The resulting entry is viewable within 30 minutes. If the visibility is set to ***Public***, the dataset will become viewable on <a href="https://www.dataplatform.nl" target="_blank" rel="noreferrer noopener">dataplatform</a>. ***Private*** datasets are not visible on Dataplatform.

## Link To Source
All sources are stored in datasets. Only when a dataset is setup, may a source be added.

### Source as a Link
> Linked data is not available as a callable API

When data is stored in a different location, you may added as a linked source. Any kind of link may be utilized: *URL*, *URI*, or an *API*.

#### Additional Details
See <a href="#additional-details">Additional Details</a>

## Real-time Data
> Real-time data may be added as a source, however setup and configuration must be handled by Civity. 

A connection must be configured between the API and Dataplatform. Fiware components are used to configure fields provided by the API, which are then translated into useful open data.

#### Additional Details
See <a href="#additional-details">Additional Details</a>

## Geo-Enabled
> In order to use the Geo-Enabled feature, your datasource must contain a set of coordinates.

> **CSV** filetypes must be presented according to the <a href="https://en.wikipedia.org/wiki/World_Geodetic_System" target="_blank">World Geodetic System (WGS84)</a> coordinate system

Geo-Enabled datasources allow you to view your data as a set of coordinates on a map.

<!-- <img class="imageStyle" src="/docs/assets/Dataplatform/AddingDatasources/dataplatform_DATASETS_AddingDatasoruces_geo-enable.png" alt="SCREENCAST: geo_enable"> -->


## DataStore

The datastore allows specific data to be previewable, and accessable via API calls, where possible. Data that is not placed in the datastore will still be accessable, but only by download.

### CKAN DataStore
>If your data is stored as either a **CSV** or **(geo)JSON** filetypes, CKAN will automatically make them available in the Datastore

CKAN Datastore is available for previewing and handling datasources; you can view this information in either a table or map view.

### Managing DataStore
To view or manage information held in Datastore, navigate to your desired datasource and select the **Datastore** tab.

<img class="imageStyle" src="/docs/assets/Dataplatform/AddingDatasources/dataplatform_DATASETS_AddingDatasoruces_datastore.png" target="_blank" alt="imageStyle: DataStore"/>

To check whether a source may be added, click the “Upload to DataStore” button.

> ***Headers***
>
> DataStore automatically determines whether headers may be constructed; a header(s) is the first horizontal entry in a column. The data type (numeric, text, timestamp, etc) is determined by the first 250 entries.

Tabular data is uploaded in chunks of 250 entires at a time. This means that large files, with many entries, can take some time before they are rendered as a preview. If you are waiting for the data to render as a preview, do not click "Upload to DataStore" again. Instead refresh the page, or tab.

When your upload completes, you will see ***Complete*** next to the **Stats* field.

<img class="imageStyle" src="/docs/assets/Dataplatform/AddingDatasources/dataplatform_DATASETS_AddingDatasoruces_datastoreComplete.png" target="_blank" alt="imageStyle: DataStore"/>

### DataStore Error Handling
> DataStore will throw an error when either the preview or API creation is not correctly handled; the data itself may still be correct.

If the green **API** button is missing, or the number of entries does not match the original datasource, there was likely an error duing DataStore processing. To check the error condition, navigate to the DataStore tab from datasource.

#### Common Errors

<table class="versions">
    <tbody>
        <tr>
            <th>Message</th>
            <th>Explanation</th>
            <th>Troubleshooting</th>
        </tr>
        <tr>
            <td>
                <strong>
                Error __context__: 'The data was invalid (for example: a numeric value is out of range or was inserted into a text field).
                </strong>
            </td>
            <td>
                <ul>
                    <li>Only numbers have appeared in the first 250 entries.</li>
                    <li>A field contains two different kinds of data (ex. <i>2412<strong>K</strong></i>). This will cause DataStore to stop indexing at the offending row.</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Add a title to each column, declaring what kind of data the column contains (ex. Date, Time, Currency, etc)</li>
                    <li>Find the incorrect field, and adjust it so it contains only a single type of data</li>
                    <li>Correct your numeric header in Data Dictionary to regular text</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <strong>Error: Cannot connect to datapusher</strong>
            <td>
                <p>
                        Normally the datapusher automatically pushes data into the datastore on creating a datasource.
                </p>
                <p>
                        This error results in a datasource not being uploaded correctly to the datastore, as the datapusher was not able to connect
                </p>
            </td>
            <td>
                <ul>
                    <li>
                        As this error mostly occurs on creating a datasource, the best option is to again try to upload to the datastore. This will almost always solve the issue. If not, contact your site administrator.
                    </li>
                    <li>
                        As a result of not being able to connect to the datapusher, a view is often also not created. This can be done manually.
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>


