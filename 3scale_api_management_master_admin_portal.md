---
id: 3scale_api_management_master_admin_portal
title: Master Admin Portal
sidebar_label: Master Admin Portal
---

A master administrator monitors and manages the 3scale accounts through the Master Admin Portal and API endpoints. The **Master Admin Portal** contains information about all accounts in a deployment and allows for administration of accounts and users through a unique account page.

Dashboard provides an overview of accounts, applications and their statistics.αντ

Its default url is master .${wildcardDomain}.

In _Audience/Accounts/Listing_ you get a full list of the existing tenants and their status.



## Account Configuration 

To create a new **Admin Portal** , you need to create new account inside Master Admin Portal.

1. Navigate to _Audience/Accounts_ and click on _Create_.
2. You provide a username, email and password as well as the organization/group name.

- _The name you provide will be visible as the subdomain of your new admin portal._

After creating a new account, it needs to be activated through _Audience/Accounts/Listing_ for it to be accessible.

An **Admin Portal** serves as a tenant of the Master Admin Portal. When deploying a new 3scale instance, a default tenant is created with a fixed url, 3scale-admin.${wildcardDomain}

Together with the creation of an Admin Portal, a **Developer Portal** is also created. The default one also comes with a fixed url, 3scale.${wildcardDomain}.