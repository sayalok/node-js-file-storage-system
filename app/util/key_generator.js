const crypto = require('crypto');

const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', {
    namedCurve: 'secp256k1',
    publicKeyEncoding: {
		type: 'spki',
		format: 'der'
	},
	privateKeyEncoding: {
		type: 'pkcs8',
		format: 'der'
	}
});

module.exports = {
	privateKey,
	publicKey
}