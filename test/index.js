var chaiAsPromised = require("chai-as-promised"),
    chai = require('chai'),
    expect = chai.expect,
    iisreset = require('../index');

chai.use(chaiAsPromised);

describe('#iisreset', function () {
    it('starts IIS server', function () {
        return expect(iisreset({ server: 'localhost', action: 'start' })).to.eventually.contain("Internet services successfully started");
    });

    it('stops IIS server', function () {
        return expect(iisreset({ server: 'localhost', action: 'stop' })).to.eventually.contain("Internet services successfully stopped");
    });

    it('restarts IIS server', function () {
        return expect(iisreset({ server: 'localhost', action: 'restart' })).to.eventually.contain("Internet services successfully restarted");
    });
    it('starts IIS server using callback', function (done) {
        iisreset({ server: 'localhost', action: 'start' }, function (err, output) {
            expect(output).to.contain("Internet services successfully started");
            done();
        })
    });
    it('stops IIS server using callback', function (done) {
        iisreset({ server: 'localhost', action: 'stop' }, function (err, output) {
            expect(output).to.contain("Internet services successfully stopped");
            done();
        })
    });
    it('restarts IIS server using callback', function (done) {
        iisreset({ server: 'localhost', action: 'restart' }, function (err, output) {
            expect(output).to.contain("Internet services successfully restarted");
            done();
        })
    });
});
