const { Dropbox } = require('dropbox');
const fetch = require('node-fetch');

// Initialize Dropbox client using the access token
const dbx = new Dropbox({
  fetch: fetch,
  accessToken: process.env.DROPBOX_ACCESS_TOKEN, // Correctly pass the access token here
});

/**
 * Upload a file to Dropbox and return the public URL.
 * @param {string} path - The path where the file should be uploaded in Dropbox.
 * @param {Buffer} contents - The file buffer to upload.
 * @returns {string} - Public URL for the uploaded file.
 */
async function uploadToDropbox(path, contents) {
  try {
    // Upload the file to Dropbox
    const uploadResponse = await dbx.filesUpload({
      path,
      contents,
    });

    // Create a shared link to the uploaded file
    const sharedLinkResponse = await dbx.sharingCreateSharedLinkWithSettings({
      path: uploadResponse.result.path_display,
    });

    // Return the URL of the uploaded file, replacing the download link with the raw file link
    return sharedLinkResponse.result.url.replace('?dl=0', '?raw=1');
  } catch (error) {
    console.error('Error uploading to Dropbox:', error);
    throw new Error('Failed to upload file to Dropbox.');
  }
}

module.exports = { uploadToDropbox };
