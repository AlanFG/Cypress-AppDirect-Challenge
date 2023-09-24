# AppDirectChallenge
## Description
Framework created for the AppDirect automation challenge.

## Objectives
Increase efficiency: The framework aims to optimize time and resources used in the QA lifecycle by automating repetitive tests. This will allow developers and the QA team to focus on more critical and valuable tasks for the company.

Improve productivity: The framework reduces manual workload and provides fast and accurate execution of automated tests, speeding up the necessary processes for proper product testing.

Encourage test case reusability: The framework is designed to facilitate the reuse of methods and test cases. This will ensure greater scalability as the company continues to develop new products and functionalities.

## Prerequisites

## Installation
1.Go to [https://nodejs.org/en] and select the LTS option.

2.Open the installer and follow the steps.

3.Go to [https://code.visualstudio.com/] and select the Download for Windows option.

4.Open the installer and follow the steps.

5.After all that installed restart the PC.

6.Run the command "npm install cypress" in powershell.

## Install Project
1.Open the AppDirect - QA Challenge folder in VSCode.

2.Open powershell console through VSCode.

3.Run the command "npm i -f".

4.To open Cypress, run the command "npm test".


## Framework Structure
The project includes the package-lock.json and package.json files, which store our installed dependencies

There is a cypress.config.js file that stores all the global configurations and necessary dependencies for the framework to function correctly. 
The credentials that will be used in this test, as well as the "baseUrl" of the website being tested, will be provided. Finally, the cypress folder (which contains our entire application) will also be provided.

There is an e2e folder that contains the following subfolders:
1. "Features" that store our test cases.
2. "Step_definitions" In this folder, you can find the files where the code for the test cases created in the "features" folder is written.

## Scripts
This framework includes 1 script that executes the opening of Cypress:

 "scripts": {
    "test": "cypress open"
  },

This command is executed using the npm library.

Example:
  powershell 
"npm test"

The "test" command will open the Cypress application, showing its visual and interactive interface. 
Within this interface, the E2E Testing option, which is configured, will be selected, and the available features will be displayed. 
If a feature is clicked, all the test cases in that suite will be automatically executed.