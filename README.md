# Getting Started with Create React App
cd <project-folder> <br/>
npm install <br/>
npm start <br/>

## Run Test Keycloak and ApacheDS environment
docker compose up -d

## Access KeyCloak server
Open web browser to http://localhost:4000

## Access LDAP Server
Open ApacheDS

Network Parameters Tab:
- hostname: "localhost"

Authentication Tab:
- Authentication Method: Simple
- Bind DN or user: "uid=admin,ou=system"
- Bind Password: "secret"
