# Non-Media Attachments
Examples for handling non media files. 

An [attachmentAsset](https://developer.kaltura.com/console/service/attachmentAsset) associates a file with an existing [mediaEntry](https://developer.kaltura.com/console/service/media)

And a [dataEntry](https://developer.kaltura.com/console/service/data) is a standalone object for storing and serving files. 

# How to Run
1. Copy env.template to .env and fill in your information
2. run npm install
3. npm run dev for developement
4. npm start for production

# Documentation

## Attachment Asset

An [attachmentAsset](https://developer.kaltura.com/console/service/attachmentAsset) is an object that is associated with a given [mediaEntry](https://developer.kaltura.com/console/service/media)

In the [KMC](https://kmc.kaltura.com/index.php/kmcng/content/entries/list) attachmentAssets are viewable in the "Related Files" tab of "Entries" The Kaltura system uses attachmentAssets for items like storing captions for a mediaEntry. The API also allows you to store your own files associated with a mediaEntry.

![attachmentAsset](readme_assets/attachmentAsset.png)



In the demo app, the first section handles attachmentAssets:

![attachmentExample](readme_assets/attachmentExample.png)

First, you will need to select an `id` from one of your entries at https://developer.kaltura.com/console/service/media/action/list

Then choose a file and submit the form. Control is handled by [index.js](https://github.com/kaltura-vpaas/non-media-documents-demo/blob/master/routes/index.js#L24) which passes the form's data to [attachmentAssetExample.js](https://github.com/kaltura-vpaas/non-media-documents-demo/blob/master/lib/attachmentAssetExample.js)

First an [attachmentAsset](https://developer.kaltura.com/console/service/attachmentAsset) is [created](https://github.com/kaltura-vpaas/non-media-documents-demo/blob/master/lib/attachmentAssetExample.js#L5) 

# How you can help (guidelines for contributors) 

Thank you for helping Kaltura grow! If you'd like to contribute please follow these steps:
* Use the repository issues tracker to report bugs or feature requests
* Read [Contributing Code to the Kaltura Platform](https://github.com/kaltura/platform-install-packages/blob/master/doc/Contributing-to-the-Kaltura-Platform.md)
* Sign the [Kaltura Contributor License Agreement](https://agentcontribs.kaltura.org/)

# Where to get help
* Join the [Kaltura Community Forums](https://forum.kaltura.org/) to ask questions or start discussions
* Read the [Code of conduct](https://forum.kaltura.org/faq) and be patient and respectful

# Get in touch
You can learn more about Kaltura and start a free trial at: http://corp.kaltura.com    
Contact us via Twitter [@Kaltura](https://twitter.com/Kaltura) or email: community@kaltura.com  
We'd love to hear from you!

# License and Copyright Information
All code in this project is released under the [AGPLv3 license](http://www.gnu.org/licenses/agpl-3.0.html) unless a different license for a particular library is specified in the applicable library path.   

Copyright © Kaltura Inc. All rights reserved.   
Authors and contributors: See [GitHub contributors list](https://github.com/kaltura/YOURREPONAME/graphs/contributors).  

### Open Source Libraries Used
