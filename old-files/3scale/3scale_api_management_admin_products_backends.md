---
id: 3scale_api_management_admin_products_backends
title: Products and backends
sidebar_label: Products and backends
---



**Products:** Customer-facing APIs. Products facilitate the creation of strong and simplified offerings for API consumers.

**Backends:** Internal APIs bundled in a product. Backends grant API Providers the freedom to map their internal API organization structure to 3scale.

A product can contain multiple backends, and a backend can be used in multiple products. In other words, to integrate and manage your API in 3scale you need to create both:

- A Backend containing at least the URL of your API. The backend can optionally have mapping rules, methods and metrics to facilitate reusability.
- A Product where you define the application plans, and configure APIcast.

## Create a new product

1. Go to the Dashboard.
2. Under the APIs section, choose the Products tab.
3. Click New Product.
4. Provide the following details:

- Name (Product identifier)
- System name
- Description

1. Click Create Product.

## Create new backends

1. Go to the Dashboard.
2. Under the APIs section, choose the Backends tab.
3. Click New Backend.
4. Provide the following details:

- Name (Backend identifier)
- System name
- Description
- Private endpoint (Base URL of the private API)

1. Click Create Backend.

- You can also add backends from _[Your\_product\_name]/Integration/Backends_ and click on _Add Backend_ and then _s_pecify the routing path in the Path textbox.

- When defining the path for a backend:

- You can indicate / as path of one of the backends.
- Paths must be unique inside the product. This means that you cannot add two backends with the same path inside the same product. Neither you can add the same backend twice to the same product.
- You can give the same backend the same path in different products.

## Define mapping rules

You can define mapping rules at the backend and product levels. The advantage of defining mapping rules at the backend level is that you will be creating reusable backends that can be added to any product.

1. From the Dashboard, choose the Backends tab.
2. Click on the name of the backend you want to configure. For example, API Backend.
3. In the page containing information about the backend, navigate to Mapping Rules.
4. Click Add Mapping Rule.
5. Specify the following settings:

- Verb: The HTTP request verb (GET, POST, DELETE, or PUT).
- Pattern: The pattern to match. For example, /hello.
- Metric or method to increment: The metric or method name.
- Increment by: The metric increment number. For example, 1.
- Last?: If this mapping rule should be considered as the last one, to stop processing other mapping rules.
- Position: Number that indicates the position of the execution of the mapping rule, to sort the mapping rules.

6. Click Create Mapping Rule.


## Testing backends with a product

Testing the backends with a product involves promoting the APIcast configuration, to staging and production environments, in order to make tests based on request calls.

Requests to a product are redirected to the corresponding backend according to the path. This path is configured when you add the backend to the product.

Navigate to _[Your\_product\_name]/Integration/Configuration_:

1. Under APIcast Configuration, you will see the mapping rules for each backend added to the product. Click **Promote to Staging APIcast**.
2. Once promoted to staging, you can promote to Production. Under Staging APIcast, click **Promote to Production APIcast**.
3. To test requests to your API in the command line, use the command provided in Example curl for testing.

- _The curl command example is based on the first mapping rule in the product._

When testing requests to your API, you can modify the mapping rules by adding methods and metrics.

Every time you modify the configuration and before making calls to your API, make sure you promote to the Staging and Production environments. When there are pending changes to be promoted to the Staging environment, you will see an exclamation mark in the Admin Portal, next to the Integration menu item.