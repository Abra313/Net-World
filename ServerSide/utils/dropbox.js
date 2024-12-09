const { Dropbox } = require('dropbox');
const fetch = require('node-fetch');

// Initialize Dropbox client using the access token
const DROPBOX_ACCESS_TOKEN = process.env.DROPBOX_ACCESS_TOKEN;

if (!DROPBOX_ACCESS_TOKEN) {
  console.error("Error: DROPBOX_ACCESS_TOKEN is not set in the environment.");
  throw new Error("Dropbox access token is missing.");
}

const dbx = new Dropbox({
  fetch: fetch,
  accessToken: DROPBOX_ACCESS_TOKEN, // Correctly pass the access token here
});

/**
 * Upload a file to Dropbox and return the public URL.
 * @param {string} path - The path where the file should be uploaded in Dropbox.
 * @param {Buffer} contents - The file buffer to upload.
 * @returns {string} - Public URL for the uploaded file.
 */
async function uploadToDropbox(path, contents) {
  try {
    console.log(`Uploading file to Dropbox at path: ${path}`);

    // Upload the file to Dropbox
    const uploadResponse = await dbx.filesUpload({
      path,
      contents,
      mode: { '.tag': 'overwrite' }, // Ensure overwriting existing files for testing
    });

    console.log("Upload successful, response:", uploadResponse.result);

    // Create a shared link to the uploaded file
    const sharedLinkResponse = await dbx.sharingCreateSharedLinkWithSettings({
      path: uploadResponse.result.path_display,
    });

    console.log("Shared link created, response:", sharedLinkResponse.result);

    // Return the URL of the uploaded file, replacing the download link with the raw file link
    return sharedLinkResponse.result.url.replace('?dl=0', '?raw=1');
  } catch (error) {
    console.error('Error uploading to Dropbox:', error);

    // Log details for debugging
    if (error.status === 401) {
      console.error("Unauthorized: Check your Dropbox access token.");
    }

    throw new Error('Failed to upload file to Dropbox.');
  }
}

module.exports = { uploadToDropbox };
