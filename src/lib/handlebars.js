const { format } = require("timeago.js");
const  helpers = {}
helpers.timeago = ( timesTam ) => {
	return format(timesTam);
}
module.exports = helpers;
