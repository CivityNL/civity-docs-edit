---
id: 3scale_publish_ckan_api
title: Publish CKAN APIs
sidebar_label: Publish CKAN APIs
---
## Register a CKAN API


We create a new Product, called &#39;CKAN API&#39;:

<img class="img-fluid" src="/docs/assets/3scale/ckan01.png">

Under Product/Integration/Backends we define the new API endpoint and its public path:

<img class="img-fluid" src="/docs/assets/3scale/ckan02.png">

We want to define and measure two different CKAN APIs, the metadata API and the datastore API.

In order to manage them properly, we define them as two new methods, navigating to Backend/Methods &amp; Metrics:

<img class="img-fluid" src="/docs/assets/3scale/ckan03.png">

This will help us to register our API specific endpoints with these methods under Mapping Rules.

<img class="img-fluid" src="/docs/assets/3scale/ckan04.png">

We identify that inside the endpoints we not only have GET but also POST requests (that require an API key to be provided).

3scale has a build-in function to modify the Headers to include custom ones. In our case, we want to include the key Authorization with its value (CKAN API key).

To succeed this we navigate to Product/Integration/Policies and we click on Add policy and choose Header Modification. We choose the operation to be for a request, set the key name and the value.

<img class="img-fluid" src="/docs/assets/3scale/ckan05.png">

## Publish the CKAN API

__After applying all these additions and changes, we still have to navigate to Product/Integration/ /Configuration and promote the APIcast Configuration for these changes to be saved and published.__

\*During testing we got some errors during GET requests that lead us to change the default authorization way of 3scale. The default _CREDENTIALS LOCATION_ in Product/Integration/Settings was set to as query parameters (GET) or body parameters (POST/PUT/DELETE) and was interfering with the CKAN get credentials. For that reason, set the 3scale auth user key to be acquired from the HTTP Headers, option as HTTP Headers.

<img class="img-fluid" src="/docs/assets/3scale/ckan06.png">

## Restricting access to our Backend Methods

Navigating to Product/Applications/Application Plans and choosing a plan, we can set pricing and limits to our already specified methods, and even restrict their use by disabling them.

<img class="img-fluid" src="/docs/assets/3scale/ckan07.png">

## Statistics

The methods we defined for our API calls are also visible in the statistics section. Navigate to Product/Analytics/Traffic to get an overview of the CKAN API use.

<img class="img-fluid" src="/docs/assets/3scale/ckan08.png">