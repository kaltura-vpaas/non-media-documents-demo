var express = require('express');
var router = express.Router();

const kaltura = require('kaltura-client');
var KalturaClientFactory = require('../lib/kalturaClientFactory');
var createAndUploadAsset = require('../lib/attachmentAssetExample');
var createAndUploadDataEntry = require('../lib/dataEntryExample');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    res.render('index');
  } catch (e) {
    res.render('error', { message: e, error: e });
  }
});

//Asset
router.post('/', async function (req, res, next) {
  try {
    var adminks = await KalturaClientFactory.getKS('', { type: kaltura.enums.SessionType.ADMIN });
    var client = await KalturaClientFactory.getClient(adminks);
    let result = await createAndUploadAsset(client,req.body.entryId,req.files.theFile.name,req.files.theFile.data);
    res.render('result',{ json_result:JSON.stringify(result,null,2) });
  } catch (e) {
    res.render('error', { message: e, error: e });
  }
});


//Data
router.post('/data', async function (req, res, next) {
  try {
    var adminks = await KalturaClientFactory.getKS('', { type: kaltura.enums.SessionType.ADMIN });
    var client = await KalturaClientFactory.getClient(adminks);
    let result = await createAndUploadDataEntry(client,req.files.theFile.data);

    res.render('data',{json_result:JSON.stringify(result,null,2) });

  } catch (e) {
    res.render('error', { message: e, error: e });
  }
});

module.exports = router;
