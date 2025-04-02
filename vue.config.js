process.env.VUE_APP_VERSION = process.env.npm_package_version;

module.exports = {
    productionSourceMap: false,
    outputDir: './dist/',
    assetsDir: 'public',
    publicPath: '',
    // eslint-disable-next-line no-undef
    pages: {"index":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./index.html","lang":"en","title":"Blank | Start from scratch","cacheVersion":5,"meta":[{"name":"title","content":"Blank | Start from scratch"},{"itemprop":"name","content":"Blank | Start from scratch"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Blank | Start from scratch"},{"property":"og:title","content":"Blank | Start from scratch"},{"property":"og:site_name","content":"Blank | Start from scratch"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://76d9003e-3ce7-4fd4-95d3-159c06794981.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://76d9003e-3ce7-4fd4-95d3-159c06794981.weweb-preview.io/"}],"chunks":["chunk-vendors","chunk-common","index"]}},
    configureWebpack: config => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        });
        config.performance = {
            hints: false,
        };
    },
};
