---
id: apicurio_api_validation
title: Validating APIs with Apicurio
sidebar_label: Validating APIs with Apicurio
---

There are many ways in which an API can be not fully functional. These include:

- Invalid response codes
- Invalid response headers
- API time-outs
- Slow API response with respect to response data bytes
- Incorrect required data in JSON responses
- Missing required text in response bodies
- Slow response for customers in specific locations

## Validating an OpenAPI with Apicurio

You visit <a href="https://studio.apicur.io/apis" target="_blank">Apicurio</a> and register/login.

After logging in successfully, you are redirected to the Dashboard tab.

<img class="img-fluid" src="/docs/assets/3scale/apicurio01.png">

In the Import API tab, we need to supply our OpenAPI definition, either from URL or a file:

<img class="img-fluid" src="/docs/assets/3scale/apicurio02.png">

<img class="img-fluid" src="/docs/assets/3scale/apicurio03.png">

Along with the overview of the contents of our API ,on the top right part of the screen we can identify the issues that correspond to the **validation problems** of our API.

<img class="img-fluid" src="/docs/assets/3scale/apicurio04.png">

By clicking on Go to problem, you are directed to a sub-tab where you can investigate in more detail, with exclamation triangles pointing directly to the issues.

<img class="img-fluid" src="/docs/assets/3scale/apicurio05.png">

Overall, through Apicurio we get a first indication on issues of our API and how to solve them.