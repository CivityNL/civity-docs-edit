---
id: 3scale_api_management_admin_application_plans
title: Application Plans
sidebar_label: Application Plans
---

Every product consists of one or more application plans. An application is always associated with an application plan. 

In basic 3scale plans only a single application is allowed; but, in enterprise plans, multiple applications per account are allowed.

Example of adding a policy / applying restrictions to a product:

- Navigate to _[Your\_product\_name]/Applications/Application Plans_.
- In the Application plans section, go to the Basic application.
- Under **Metrics, Methods, Limits &amp; Pricing Rules** , select limits in the hits row, and create a new usage limit of 3 per hour.
- Find one of your sample applications, by navigating to _[Your\_product\_name]/Applications/Listing_. Ensure that application is set to the basic plan.
- Use the credentials for this application and repeat the previous sample call at least three times.

You have now successfully defined more restrictive access polices for all the applications on 3scale Basic plan.

## Create application plans

Navigate to _[Your\_product\_name]/Applications/Application Plans_ click _Create Application Plan_.

Once you have created a plan, you can provision rate limits and set up paid plans.

## Add methods and metrics

Navigate to _[Your\_product\_name]/Integretion/Methods &amp; Metrics_ or _[Your\_backend\_name]/Methods &amp; Metrics_ click _New method link / New metric._

These new methods and metrics will be available in all of your current and future plans. You can now edit limits and pricing rules for them on each plan by going to _[Your\_product\_name]/Applications/Application Plans/[plan\_you\_want\_to\_edit]._