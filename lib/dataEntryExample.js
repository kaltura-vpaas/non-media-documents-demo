const kaltura = require('kaltura-client');

async function createAndUploadDataEntry(client, fileData) {

    // https://developer.kaltura.com/console/service/uploadToken
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

    // https://developer.kaltura.com/console/service/uploadToken
    let uploaded = await kaltura.services.uploadToken.upload(upToken.id, fileData, resume, finalChunk, resumeAt)
        .execute(client)
        .then(result => {
            console.log(result);
            return result;
        });

    let dataEntry = new kaltura.objects.DataEntry();
    dataEntry.type = kaltura.enums.EntryType.DATA;

    https://developer.kaltura.com/console/service/data/action/add
    let newDataEntry = await kaltura.services.data.add(dataEntry)
        .execute(client)
        .then(result => {
            console.log(result);
            return result;
        });

    let resource = new kaltura.objects.UploadedFileTokenResource();
    resource.token = upToken.id;

    return await kaltura.services.data.addContent(newDataEntry.id, resource)
        .execute(client)
        .then(result => {
            console.log(result);
            return result;
        });

}


module.exports = createAndUploadDataEntry;