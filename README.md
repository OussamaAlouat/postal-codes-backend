# Postal Backend

## SUMMARY 
This project provides all postal codes of spain. It have mysql database with all the information, you only need to import it.
The server have end-point's to get the information, you can read the tests to know how it works.

## COMMANDS
### npm run install 
Use this command to install all dependencies.

### npm run dev

This command start the server on development mode. So it will be start using nodemon. Sure that you have this dependency installed.

### npm run build

This command builds the project sources.

### npm run start

This command start the server on production mode. On this case it start using node js.

## STEPS:
### 1) Install mysql on your computer. The version of this database is 8.0.14
### 2) Use MYSQLWorkbench to synchronize the database model. 
### 3) The database model is /database/postal.mwb
### 4) Execute the sql scripts to insert all the data.
### 5) All the scripts are in /database/dump
### 6) Run npm install, to install all the dependencies
### 7) Run npm run start to start the server.
### 8) Use postman to test that server works well.