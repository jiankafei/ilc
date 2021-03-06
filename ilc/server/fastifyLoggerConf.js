const httpHeaders = require('http-headers');

module.exports = {
    level: 'info',
    serializers: {
        res(res) {
            const r = {
                statusCode: res.statusCode,
            };

            if (r.statusCode >= 300 && r.statusCode < 400) {
                const headers = httpHeaders(res, true);
                if (headers['location']) {
                    r.headers = {
                        location: headers['location']
                    };
                }
            }

            return r;
        }
    }
};
