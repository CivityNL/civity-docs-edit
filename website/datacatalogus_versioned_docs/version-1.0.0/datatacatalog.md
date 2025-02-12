---
id: Rotterdam
title: What is Data Validation 
sidebar_label: What is Data Validation
---
## Data Validation

Data validation is the process of providing feedback about the quality of your data by performing multiple checks on tabular data. 

> Data Validation allows you to perform checks on your data. This improves the overall quality and consistency of your data.

Tabular data is one of the most common forms of data available on the web. An example of tabular data is the information stored in an Excel worksheet or a CSV file.

> Currently supported file formats in *Dataplatform* are: **CSV**, **XLS**, and **XLSX**

The data will be checked against a ***Schema*** where all the constraints for the data checks are defined.
 
> Create custom data schemas to fit your data constraints.

## How it Works

The Validation is powered by the ***Goodtables*** (<a href="https://goodtables.io/" target="_blank">website</a>) framework, it is equipped to 
perform different types of checks and it is integrated in CKAN with the extensions ***ckanext-validation*** (<a href="https://github.com/frictionlessdata/ckanext-validation" target="_blank">@GitHub</a>).

The schema defined must follow the specifications of ***Table Schema*** (<a href="https://frictionlessdata.io/specs/table-schema/" target="_blank">docs</a>).
