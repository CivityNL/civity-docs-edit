---
title: V4.5.7 release notes
---

Homepage loads markdown from CKAN

- Home page content is loaded from CKAN
- When no home page content is found, it will go to the system page information
- Plumbing task of getting rid of http.client calls in the code and refer to the new ApiService to do all calls.
- Add an exception for unique urls described in the settings to recognizing organizations in non dataplatform urls.
- Removed organisations that are no longer customers from the config.
