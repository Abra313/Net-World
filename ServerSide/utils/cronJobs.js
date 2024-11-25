const cron = require('cron');
const Story = require('../models/Story');

// Cron job to delete expired stories (not strictly necessary with TTL index)
const deleteExpiredStories = async () => {
  try {
    await Story.deleteMany({ createdAt: { $lt: new Date(Date.now() - 86400000) } });
    console.log('Expired stories deleted');
  } catch (error) {
    console.error('Error deleting expired stories', error);
  }
};

// Schedule cron job to run every hour (you can adjust the frequency as needed)
const startCronJobs = () => {
  const job = new cron.CronJob('0 * * * *', deleteExpiredStories); // Runs every hour
  job.start();
};

module.exports = { startCronJobs };
