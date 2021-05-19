## Running This Example

To run this application, you first need to clone this repo:

```bash
git clone https://github.com/marktefftech/okta-ciam-project.git
```

Then install dependencies:

```bash
npm install
```
Enter into custom-login directory:
```bash
cd okta-ciam-project/custom-login
```
Now you need to gather the following information from the Okta Developer Console:

- **Client Id** 
- **Issuer** - For example, `https://dev-1234.oktapreview.com/oauth2/default`.

These values must exist as environment variables. 

```ini
ISSUER=https://yourOktaDomain.com/oauth2/default
CLIENT_ID=123xxxxx123
```

With variables set, start the app server:

```
cd okta-ciam-project/custom-login
npm start
```

Now navigate to http://localhost:8080 in your browser
