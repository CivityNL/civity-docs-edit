---
id: CKAN and Portal
title: CKAN and Portal
sidebar_label: CKAN and Portal
---

Dataplatform has two platform features:
* CKAN
* Portal

> All data is managed in CKAN, which is the management environment.
> The Portal is the interface that presents data.

## CKAN
In ckan.dataplatform data may be managed; data may be added, changed, and deleted. In order to manage the data, a login is required.

Data is distinguished by different organizations; each orgnization maintains ownership of the own datsets.

## Portal
In website.datplatform, data is presented. In the portal, datasets are linked to the datasets in CKAN.

The portal is a shell around CKAN; it reflects the datasets contained in CKAN.

> The portal is a view on the datasets managed in CKAN. The portal is for public use.

Elastic Search is used in the portal, to make searching more convenient.

The portal contains:
* Homepage
* Data page (cards)
* Data details
* Search
* Themes
* Filters