const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8061233867:AAED-1Y7lP5sDvHa8TN3cwxqcXTPRDO9o8E',
  id: isNaN(parsedId) ? 7448360691 : parsedId // replace 12345.. with your telegram chat id
};
