var dest = "./build/";
var src = './src';

module.exports = {

    browserify: {
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/js/main.js',
            dest: dest+"/js",
            outputName: 'out.js',
            debug: false
        }]
    },
    html: {
        src: src +"/index.html",
        dest: dest
    },

};