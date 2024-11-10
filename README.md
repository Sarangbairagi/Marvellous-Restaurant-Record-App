
# Marvellous-Restaurant-Record-App with JSON server or Dummy server
The Marvellous Restaurant Record web app allows users to view specific restaurant names, contact numbers, and menus. Users can order dishes or items through this app, similar to services like Swiggy and Zomato. The app provides details for specific restaurants, enabling users to easily browse and order their desired dishes.

********************************************************************************************************************************************************************************************************************

##### Detailed Project Setup Instructions #####

     This document provides step-by-step instructions to set up and run the Marvellous Restaurant Record application on your machine. Please follow each step carefully to ensure everything functions correctly.

**Step 1: Install Prerequisites**

     Before you can run the project, you need to install the required software on your machine. These prerequisites include:

         1. Node.js: This JavaScript runtime helps you execute JavaScript code outside a web browser. You can download it from the official site: [Node.js Download](https://nodejs.org/).
  
         2. Angular CLI version 17: The Angular Command Line Interface (CLI) is essential for creating and managing Angular applications. To install Angular CLI, open your terminal (Command Prompt or 
            PowerShell on Windows, Terminal on macOS or Linux) and run the following command:

                npm install -g @angular/cli@17
                

**Step 2: Download the Project**

     Once the prerequisites are installed, you need to download the project files. To do this:

        1. Visit the GitHub repository where the project is hosted. 
        2. Click the “Code” button and choose “Download ZIP.”
        3. After the download is complete, locate the ZIP file on your computer and extract it to a desired location.


**Step 3: Navigate to Project Directory**

     After extracting the project files, navigate to the folder named `Marvellous-Restaurant-Record-App-master`. You will find multiple subfolders and files within this directory, which make up the project's 
     structure.


**Step 4: Install Project Dependencies**

     To run the application, you need to install its dependencies. 

         1. Open Command Prompt (CMD) in the project directory. You can do this by holding the Shift key, right-clicking in the folder, and selecting “Open Command Prompt here” or “Open PowerShell window here.”
         2. Inside CMD, execute the following command:

                npm install
   
     This command will read the `package.json` file in the project directory and install all necessary dependencies. Make sure you have a stable internet connection while this step is performed, as the packages 
     will be downloaded from the internet.


**Step 5: Running the Frontend**

     After completing the installation of the dependencies, you are ready to run the project. 

         1. Ensure you are still in the project directory within CMD.
         2. To start the Angular development server and open the frontend in your default web browser, execute the following command:

                 ng serve --o
   
     This command compiles the application and will automatically open your default web browser to display the frontend interface. It will typically be accessible at `http://localhost:4200`.


**Step 6: Connecting to the Dummy Database**

     While the frontend is running, it is essential to connect it to a backend. For this project, we will use JSON Server, which acts as a dummy server.

         1. Open a new Command Prompt window. It’s crucial to have two CMD windows open: one for the Angular frontend and another for the JSON Server.
   
         2. Navigate to the project directory and open new CMD window.

         3. Start the JSON Server by executing the following command:

   
             json-server --watch db.json
   
     Here, `db.json` is the file that contains your mock database data, and it allows the application to interact with the dummy server, simulating real data interactions.



**Final Note: Monitor Your Command Prompt Windows **

     To connect your machine to the internet, please follow the outlined steps carefully for a smooth connection.

     Ensure that both Command Prompt windows remain open during development. One window should serve the Angular frontend, while the other runs the JSON Server. Closing either window will terminate the server 
     processes, and you won’t be able to interact with the application correctly.

     By following these steps, you should have the Marvellous Restaurant Record application running successfully on your machine! If you encounter any issues, please double-check each step and ensure all 
     dependencies are installed correctly.

 

***************************************************************************************************************************************************************************************************************


<<<<<<< HEAD
# Know

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
=======
