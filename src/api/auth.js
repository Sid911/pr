const { OAuth2Client } = require('google-auth-library');
var fs = require('fs')

const http = require('http');
const url = require('url');
const destroyer = require('server-destroy');
 
const keys = require('./oauth2.json'); // only required when doing it file

export default function getAuthenticated(params) {
        return new Promise((resolve, reject) => {
            const oAuth2Client = new OAuth2Client({
                clientId: '112702943867-5h1l6g5i6ftinsppjsgku2crfgu1i856.apps.googleusercontent.com',
                redirectUri: 'com.googleusercontent.apps.112702943867-5h1l6g5i6ftinsppjsgku2crfgu1i856'
            })
            const authorizeUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: 'https://www.googleapis.com/auth/userinfo.profile',
              });
            const server = http
                .createServer(async (req, res) => {
                    try {
                        if (req.url.indexOf('/oauth2callback') > -1) {
                            const qs = new url.URL(req.url, 'http://localhost:4000')
                                .searchParams;
                            const code = qs.get('code');
                            console.log(`Code is ${code}`);
                            res.end('Authentication successful! Please return to the console.');
                            server.destroy();

                            const r = await oAuth2Client.getToken(code);
                            oAuth2Client.setCredentials(r.tokens);
                            console.info('Tokens acquired.');
                            resolve(oAuth2Client);
                        }
                    } catch (e) {
                        reject(e);
                    }
                })
                .listen(3000, () => {
                    // open the browser to the authorize url to start the workflow
                    
                    //open(authorizeUrl, { wait: false }).then(cp => cp.unref());
                });
            destroyer(server);
        });
    }