---
title: V4.5.9 release notes
---

Add accessibility based on Gezond Stedelijk Leven hub

Code specific improvements:

- Angular: expansion panels header added
  Provides a summary of the panel content

- Angular: added header, footer and main component
  Improve description of components

- added title to the index.html
  The `index.html` needs to have a title in the header. In our case 'DataPlatform portal' to let users know on what website they are.

Visual improvements UI:

- Added icon to map pop up close button.
  After opening the map in full-screen mode, a close button now appears on the top-right.

- Removed text background for more contrast
  Contrast between texts and background was too low. The contrast ratio for text should be `4.5:1` for normal text and `3:1` for large text. The contrast is the visual difference between the color of the text and the colors of the background. You can find more details about contrast [here](https://web.accessibility.duke.edu/contrast-ratio/)

Other:

- Added developer documentation
  Guidelines on accessibility are now part of developer documentation.
