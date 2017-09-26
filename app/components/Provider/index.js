/**
 * Created by niko-42na on 26.09.17.
 */
if(process.env.NODE_ENV === 'production') {
    module.exports = require('./Provider.prod');
}
else {
    module.exports = require('./Provider.dev');
}