---
id: 3scale_publish_ngsi_api
title: Publish NGSI APIs
sidebar_label: Publish NGSI APIs
---

## Publish an NGSI API in 3Scale

We create a new Product called &#39;NGSI&#39;

<img class="img-fluid" src={require('./assets/3scale/ngsi_01.png' ).default} />

Under Product/Integration/Backends we define the new API endpoint:

<img class="img-fluid" src={require('./assets/3scale/ngsi_02.png' ).default} />

## Customizing the NGSI backend

We want to manage context data information: entities and subscriptions.

We only want to allow GET HTTP methods for entities, so we need to define our actions under API Mapping Rules.

Another step to get a better usage overview is creating two methods to measure the entity calls and the subscription calls separately.

<img class="img-fluid" src={require('./assets/3scale/ngsi_03.png' ).default} />

We need to define all endpoints (and group them by method) we want to allow access, under Mapping Rules, to set the HTTP methods that can be used.

<img class="img-fluid" src={require('./assets/3scale/ngsi_04.png' ).default} />

For example, not defining a POST method for entities will return a \&lt;No Mapping Rule matched\&gt; response if we try a POST request on that endpoint.

After applying all these additions and changes, we still have to navigate to Product/Integration/Configuration and promote the APIcast Configuration for these changes to be saved and published.

\*During testing we got some errors during GET requests that lead us to change the default authorization way of 3scale. The default option for _CREDENTIALS LOCATION_ in Product/Integration/Settings was set to As query parameters (GET) or body parameters (POST/PUT/DELETE) . It was interfering with the NGSI get credentials. For that reason, we need to set the 3scale auth user key to be acquired from the HTTP Headers, selecting the option As HTTP Headers.

<img class="img-fluid" src={require('./assets/3scale/ngsi_05.png' ).default} />

## Statistics

The methods we defined for our API calls are also visible in the statistics section. Navigate to Product/Analytics/Traffic to get an overview of the NGSI API use.

<img class="img-fluid" src={require('./assets/3scale/ngsi_06.png' ).default} />