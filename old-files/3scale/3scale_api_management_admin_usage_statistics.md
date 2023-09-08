---
id: 3scale_api_management_admin_usage_statistics
title: Usage Statistics
sidebar_label: Usage Statistics
---

# Usage Statistics in 3scale

**Generic View**

From our *Homepage/Dashboard* view of the 3scale API Management admin portal we can get a first overview of our APIs usage:

<img class="img-fluid" src={require('./assets/3scale/stats01.png').default} />

Under *AUDIENCE* tab we can see latest signups (new registrations to our API services), together with a recap of whether a user&#39;s application has reached a potential usage limit.

Under *APIs* tab we can see some general info on the usage of our APIs. Top Applications to the right side of the tab display the users&#39; applications that made the most use of our APIs.

Clicking on the ANALYTICS subtab of the APIs Tab we enter to a more detailed view of the traffic / API consumption.

**API Traffic**

Navigating to Product/Analytics, we have access to several usage statistics:

<img class="img-fluid" src={require('./assets/3scale/stats02.png').default} />

Under *Traffic* tab we get an overview of the API consumption per day and time. We can set the view to daily, weekly, monthly or set manually the day range. In this example we not only get an overview of the hits but also two more values, metadata and datastore. These values are Methods that are set under the current API/backend, in order to group specific API endpoints and succeed a more in depth view of the API&#39;s usage. In this example, _&#39;metadata endpoints&#39;_ correspond to the GET requests and _&#39;datastore endpoints&#39;_ to the POST requests done by the API consumers.

There is also the ability to export the usage statistics in a .csv format.

<img class="img-fluid" src={require('./assets/3scale/stats03.png').default} />

The *Daily Averages* tab displays the API usage per day of the week. One odd in this display is that the dropdown menu displays twice the option Hits. This happens in case a product (example: CKAN API) consists of more than one backends. The naming (hits.11) is inconvenient and is a core 3scale structure. Under Hits.11 though we are able to display the usage per Method (entity is explained before).

Same structure goes for the following tabs Hourly Averages and Top Applications.

<img class="img-fluid" src={require('./assets/3scale/stats04.png').default} />

Under *Response Codes* tab we get a information on the response codes received to our API consumers while using our endpoints, with 2XX corresponding to successful requests, 5XX to unsuccessful ones and 4XX to not authorized actions.

The *Alerts* tab displays recent alerts or violations.

The *Integration Errors* tan can provide us with some feedback on errors occurred during our API integration, in particular in calls made to methods of 3scale&#39;s Service Management API.