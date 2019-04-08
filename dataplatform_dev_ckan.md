---
id: DataPlatform CKAN
title: CKAN Setup
sidebar_label: CKAN Setup
---

The Comprehensive Knowledge Archive Network (CKAN) is a web-based open-source management system for the storage and distribution of open data. Being initially inspired by the package management capabilities of Debian Linux,[2] CKAN has developed into a powerful data catalogue system that is mainly used by public institutions seeking to share their data with the general publi


# CKANlastic

ElasticSearch Indexer for CKAN. 

## Getting Started

This is a configuration file for Logstash to index everything into ElasticSearch. 

This document is refering to Production configurations now and need to be transformed into a generic version.

### Prerequisites

There should be a Logstash installed (I'm using a local one).

And the following Ruby Gem needs to be installed.
```
nokogiri Gem
```

There is also the need to setup LogStash Enviorment Variables for the sensitive data (as of now, just the password of the Database). 


### Installing

In order to install the nokogiri Gem, you should add to the file "Gemfile" (usually at "\{LOGSTASH_ROOT}\Gemfile"), the following line:

```
gem "nokogiri", "~> 1.7"
```

Restart Logstash and everything should be set.

This is how to setup Enviorment Variables in LogStash: https://www.elastic.co/guide/en/logstash/current/environment-variables.html

The current value in use like this is the

```
"${CKAN_DEFAULT_PASSWORD}"
```
these are the kpn passwords