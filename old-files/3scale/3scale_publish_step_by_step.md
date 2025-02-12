---
id: 3scale_publish_step_by_step
title: Step by step Guide
sidebar_label: Step by step Guide
---

## How to register a new API endpoint:

1. We navigate the 3scale admin page. The homepage is displaying the Dashboard view.
2. Under TAB APIs we click on <ins>NEW PRODUCT</ins>.
3. We choose Define manually, insert Name and optionally description. The system name can be left empty as it will be automatically populated.
4. A new product is generated and we are redirected to its overview page. Next things to be done are setting the backends (API endpoints) and the application Plans.
5. We click on <ins>Create Application Plan</ins>.
6. We set a name and optionally the billing rules. System name can be left empty. We click on Create plan.
7. After we create the plan, we are re-directed to the Application Plans overview page. We need to publish the plan to make it available. We can also set a default plan on top of the page.
8. We are still inside the Product. On the left sidebar click on Integration and choose backends.
9. We click on <ins>Add Backend</ins>.
10. From the Backend dropdown we choose nothing and we click on the link underneath <ins>Create a Backend that can be used by any Product</ins>.
11. We set Name and our API endpoint. Description is optional, System Name will be automatically populated.
12. We have now created a new backend and we are redirected to its overview page. The backend is still not part of our product. Next step is to add it to our product.
13. From the dropdown on top, we choose our product by name. In the overview page of the product we see there is still no backend registered.
14. We click again on Integration/Backends.
15. We click on <ins>Add Backend</ins> and this time select our newly created backend from the dropdown list. If we plan on adding only one API endpoint to our product we can proceed without setting a Path. If we are going to use multiple endpoints, we need to specifically set a path for each of them.
16. In the Backends overview we now see our registered endpoint. Next step is to publish it.
17. We navigate to Integration/Configuration we now are able to promote our product first on staging and then on production phase.
18. While publishing on stage phase, under Example curl for testing we see the message _&quot;In order to send a valid test request, please create an application that subscribes to an application plan of this service.&quot;_ This means that we need to register our current admin user to this new product in order to generate an API key and be able to test our new API endpoint.
19. From the top dropdown, we choose Audience, Accounts/Listings. We click on Group/Org <ins>Developer</ins>.
20. On the top side we see Account&#39;s options. We click on Service Subscriptions.
21. Our newly generated product is under Available service subscriptions. We click Subscribe. From Plan dropdown we select the default and click on <ins>Create Subscription</ins>.
22. We are redirected back on the Account options. We now click on <ins>Applications</ins> on the top bar.
23. We click on Create Application.
24. We choose a plan (probably the one we want to test), set a name and description and click on <ins>Create Application</ins>.
25. We are now redirected to our new application&#39;s credentials. Under API Credentials we see our newly generated API key.
26. We navigate again to Integration/Configuration. We now see on our staging phase that the previous message is disappeared and the curl URL does also includes our API key.
27. We are ready to test our newly generated API endpoint.