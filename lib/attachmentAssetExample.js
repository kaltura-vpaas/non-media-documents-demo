const kaltura = require('kaltura-client');

async function createAndUploadAsset(client, entryId, fileName, fileData) {

    let uploadToken = new kaltura.objects.UploadToken();
    let upToken = await kaltura.services.uploadToken.add(uploadToken)
        .execute(client)
        .then(result => {
            console.log(result);
            return result;
        });

    let resume = false;
    let finalChunk = true;
    let resumeAt = -1;

    let uploaded = await kaltura.services.uploadToken.upload(upToken.id, fileData, resume, finalChunk, resumeAt)
        .execute(client)
        .then(result => {
            console.log(result);
            return result;
        });

    let attachmentAsset = new kaltura.objects.AttachmentAsset();
    attachmentAsset.format = kaltura.enums.AttachmentType.TEXT;
    attachmentAsset.filename = fileName
    attachmentAsset.title = "title";

    //see https://developer.kaltura.com/console/service/attachmentAsset/action/add
    return await kaltura.services.attachmentAsset.add(entryId, attachmentAsset)
        .execute(client)
        .then(result => {
            console.log(result);
            let contentResource = new kaltura.objects.UploadedFileTokenResource();
            contentResource.token = upToken.id;
            return kaltura.services.attachmentAsset.setContent(result.id, contentResource)
                .execute(client)
                .then(result => {
                    console.log(result);
                    return result;
                }).catch((error) => {
                    console.error(error);
                });
        }).catch((error) => {
            console.error(error);
        });
}


module.exports = createAndUploadAsset;