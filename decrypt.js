const NodeRSA = require('node-rsa');

// TODO: fill in the private key
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIBPQIBAAJBAMB7ref67NHLeIzFzhuoiTcC8faLHcSsX6JJD2wOwKpeMeTB4iwV
B6VND9ZB6nHZH4NLsfrSpnKfXMq65FMxBikCAwEAAQJBAL9zxVxyZ0+dVMCglwtH
rYO8ODOD2A4hbdYbWW2flt9cq2KivnSsP1PA7nOm01W3KaLDksxgm5RidBrTSy51
hIkCIQDrgeOni8ZCYtdyoVUkgHYIfJkedyDxkSxAxhVlkYrCOwIhANE7ZCCZTn7i
Pc60Az+vSjmuJk4s8bJpFIIxDtC9/I7rAiEA2xXHWase8c0PjlTlZwKWS0jWDNBX
9kHOACgF6anegtcCIQCTj5tSEkz114FXokUYSPvEKjoBsFjVRp6cIxUbyqGv+QIh
AOBB6svmCfZDR3f9Rilz2Cmy/zCQMm3kSN6pQQcTiVPn
-----END RSA PRIVATE KEY-----`;

const key = new NodeRSA(privateKey);

// TODO: fill in the encrypted message
const message = "Rr/JCBA9RcKlhA460FDYqSevMQFCi4wYL8FmQT1xeLjzUdOAHeXT7dCzrspwuZ+p4A5FcnK6ZUWNHVag94pHeQ==";

const decrypted = key.decrypt(message, 'utf8');

console.log(decrypted);
