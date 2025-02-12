---
title: V4.7.5 (2023-10-09) release notes
---

## Update contact email form structure

- get sender email address from ContactConfig property 'emailSender'
- refactor email payload
- fix unicode compatibility in payload's message property
- update customer configuration ContactConfig with property 'emailSender'

## Header component updates

- detach searchbar from header and make it a seperate component
- new config property 'languageSelector': choose whether to display the language button with an icon or the language code
