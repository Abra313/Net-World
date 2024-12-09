const { Dropbox } = require('dropbox');
const fetch = require('node-fetch');

const dbx = new Dropbox({
  fetch: fetch,
  accessToken: process.env.ACCESS_TOKEN,
});

/**
 * Upload a file to Dropbox and return the public URL.
 * @param {string} path - The path where the file should be uploaded in Dropbox.
 * @param {Buffer} contents - The file buffer to upload.
 * @returns {string} - Public URL for the uploaded file.
 */
async function uploadToDropbox(path, contents) {
  try {
    const uploadResponse = await dbx.filesUpload({ path, contents });
    const sharedLinkResponse = await dbx.sharingCreateSharedLinkWithSettings({
      path: uploadResponse.result.path_display,
    });
    return sharedLinkResponse.result.url.replace('?dl=0', '?raw=1');
  } catch (error) {
    console.error('Error uploading to Dropbox:', error);
    throw new Error('Failed to upload file to Dropbox.');
  }
}

module.exports = { uploadToDropbox };
