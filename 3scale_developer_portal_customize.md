---
id: 3scale_developer_portal_customize
title: Customize look and feel
sidebar_label: Customize look and feel
---

## Overview

When on the API Management Admin Portal, navigate to _Audience_.

On the left side, click on Developer Portal to reveal its elements:

- Content
- Drafts
- Redirects
- Groups
- Logo
- Feature Visibility
- ActiveDocs
- Legal Terms
- Settings and
- Liquid documentation.

- The main area containing details of the sections above.

<img class="img-fluid" src="/docs/assets/3scale/dev01.png">

## Content

The content section shows the site structure and hierarchy and provides editing functionality within the same page. You can manage the site structure, the pages, and other assets stored in it.

You can save(1) you changes, preview(2) them or immediately publish(3) them. You also have the ability to revert changes, by either clicking the button _Revert(4)_ and un-doing your last change or by accessing the _Versions(5)_ tab and selecting the exact version you want to revert to.

<img class="img-fluid" src="/docs/assets/3scale/dev02.png">

<img class="img-fluid" src="/docs/assets/3scale/dev03.png">

## Layouts and partials

The layouts and partials sections manage the templates and the reusable parts of the page. Their functionality is similar to that of the content section.

The layouts section consists of definitions of the templates used by pages. Layout is the main structure of the page, and the contents of this template will be rendered on every page that uses it. The partials, portlets, and the actual content of the pages reside inside.

Partials are the reusable parts of code, which repeat in many places on different pages – for example, the footer is the same on every layout, and the sidebar is the same on a few pages with different layouts. To include a partial in a layout, partial, or email template or portlet, type: {% include &quot;partial\_name&quot; %}.

## Portlets

The last subsection of the content are the portlets. They give you some more advanced functionality without needing any advanced coding. The Developer Portal provides three different portlets:

- External RSS feed - fetches the RSS feed from a given source
- Table of contents - generates the links list for the pages in a given section
- Latest forum posts - generates the list of the n latest forum posts

While creating your desired portlet, you have to input the requested data in the setup page such as title, system name, and the URL feed for the external RSS feed portlet.

## ActiveDocs

Make use of this element to easily define your OpenAPI specification, and update the Documentation in the Developer Portal. Navigate to _Audience/Developer Portal/ActiveDocs._ By clicking on _Edit_ or Create _a new spec_, you are able to replace/add a new API JSON Spec with your own API specification.

To save the changes you click on the bottom right corner the button _Update Service_. If the checkbox _Skip swagger validations_ is unchecked, you will get a text-formatted _Validation Report_ on your API specification, indicating if any part of it needs your attention.

The output of the report is similar to the _apicurio_ validation check we used before, and in our test case the result was highlighting exactly the same issues.

<img class="img-fluid" src="/docs/assets/3scale/dev04.png">

## Legal Terms

- Signup
- Service Subscription
- New Application

Developers will have to accept the terms of each element the list.

Any combination of custom HTML, Javascript and CSS **can be used** to craft **the** legal terms.

###


## Domains &amp; Access

While in test phase, your Developer Portal is only accessed after providing an access code. This code can be found in _Audience/Developer Portal/Settings/Domains &amp; Access_.

Deleting the text from the field _Developer Portal Access Code_, will make the Developer Portal available to the public without any access code request.