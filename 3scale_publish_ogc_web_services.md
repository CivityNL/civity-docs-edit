---
id: 3scale_publish_ogc_web_services
title: Publish OGC web services
sidebar_label: Publish OGC web services
---

## Register an OGC service endpoint

We create a new Product called &#39;OGC&#39;

<img class="img-fluid" src="/docs/assets/3scale/ogc01.png">

Under Product/Integration/Backends we define the new API endpoint and its public path.

_For the OGC services we have two options on defining the access points. We can either define straight from inside the Geoserver URL, by defining the appropriate workspace to give access, or through the geoserver redirection from inside the appropriate CKAN instance. For example, we could have these two options:_

1. http://{geoserverURL}:8080/geoserver/workspace_datastore_{ckanInstance}/ows _or_
2. https://{ckanInstance}.dataplatform.nl/ows

_We select the second option as it is better manageable under the 3scale API management:_

<img class="img-fluid" src="/docs/assets/3scale/ogc02.png">

We set the Public Path to /ogc.

Through OGC services, we want to make available three available requests: WMS/ WFS/ WCS. In order to manage these requests separately for better management and overview of their use, we define three new methods, navigating to Backend/Methods &amp; Metrics:

<img class="img-fluid" src="/docs/assets/3scale/ogc03.png">

This will help us to register our API specific endpoints with these methods under Mapping Rules:

<img class="img-fluid" src="/docs/assets/3scale/ogc04.png">

These endpoints are coming straight forward from the ckan instance as mentioned above (option 2). For that reason we need to define the CKAN API key under 3scale configuration.

3scale has a build-in function to modify the Headers to include custom ones. In our case, we want to include the key Authorization with its value (CKAN API key).

_\*In the case we were choosing option 1 accessing OGC services directly from the geoserver machine, we would need to include in the Headers the geoserver credentials (username/password)._

To succeed this, we navigate to Product/Integration/Policies and we click on Add policy and choose Header Modification. We choose the operation to be for a request, set the key name and the value.

<img class="img-fluid" src="/docs/assets/3scale/ogc05.png">

## Publish the OGC services

__After applying all these additions and changes, we still have to navigate to Product/Integration/ /Configuration and promote the APIcast Configuration for these changes to be saved and published.__

After publishing for the first time and trying to access one of the OGC endpoints, we get the error &quot;Authentication parameters missing&quot;.

<img class="img-fluid" src="/docs/assets/3scale/ogc06.png">

This has to do with the fact that the API endpoint arguments mix up with the 3scale credentials location. The default 3scale configuration defines the auth user key as a query parameter and in order to fix the encountered error, we need to convert this to an HTTP Header.

Navigating to Product/Integration/Settings we are able to set the 3scale auth user key to be acquired from the HTTP Headers, option as HTTP Headers. This fixes the encountered error.

<img class="img-fluid" src="/docs/assets/3scale/ogc07.png">

## Restricting access to our Backend Methods

Navigating to Product/Applications/Application Plans and choosing a plan, we can set pricing and limits to our already specified methods, and even restrict their use by disabling them.

<img class="img-fluid" src="/docs/assets/3scale/ogc08.png">

## Statistics

The methods we defined for our API calls are also visible in the statistics section. Navigate to Product/Analytics/Traffic to get an overview of the OGC services use.

<img class="img-fluid" src="/docs/assets/3scale/ogc09.png">