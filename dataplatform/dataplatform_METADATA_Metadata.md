---
id: metadata_Metadata
title: Metadata
sidebar_label: Metadata
---

> Metadata is simply data about data

>Metadata follows the guidelines set by the <a href="dataplatform/metadata_DCAT" target="_blank">DCAT-Standard</a>.


Every dataset contains metadata; metadata is information that informs the user about the collection of datasources in a dataset. Typically this means a description and context about existing data.

Your metadata should describe the following:
* Who owns the dataset
* Descriptive information about the content
* Access rights

## Metadata Example

Let's assume we have the following object called "things":

```javascript
// this is a visual representation of data
things = "[14, 16.5, 21, 18, 21]"
```

We see that "things" is a collection of numbers, but without context it is meaningless beyond being a collection of numbers; "things" exists as a collection of numbers. Let's change that with metadata, where we can add value by assigning context and definition!

Let's assign two more values: 
```javascript
"Florida, USA"
"Degrees Centigrade"
```

Now we have metadata, which describes what "things" is about. By adding `degrees centigrade` and `Florida, USA`, "things" now has context (location) and a definition (temperature).

Therefore, `degrees centigrade` and `Florida, USA` is the metadata for the object "things." 

```javascript
// this is a visual representation of data
things = "[14, 16.5, 21, 18, 21]", "Degrees Centigrade", "Florida, USA"
```

By adding metadata to "things", it has allowed us to easily understand the information inside and display it in an easy to read manner:

|Degrees Centigrade| - | 
|:----------------:| :-------:|
|14| Florida, USA |
|16.5| Florida, USA |
|21| Florida, USA |
|18| Florida, USA |
|21| Florida, USA |