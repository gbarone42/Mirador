# Setting Up Mirador Viewer with Apache


### Node.js Installation
Download and install Node.js from the official website: [Node.js](https://nodejs.org/).

### Project Initialization
Create a new directory for your project and open a terminal window.
Initialize a new Node.js project with default settings by running the following command:
``` bash 
npm init -y
```

### Mirador and Text Overlay Plugin Installation
Install Mirador and the Text Overlay plugin by running the following commands:
``` bash
npm install mirador
npm install mirador-textoverlay
```
### Creating the HTML File
#### HTML Setup
Create an HTML file named index.html in your project directory.
Include the necessary CSS and JavaScript files for Mirador and the Text Overlay plugin in your HTML file.


#### Running the Application
#### Starting the Server
Start the Node.js server by running the following command in your terminal:
``` bash
node app.js
```
#### Accessing the Viewer
Open a web browser and navigate to http://localhost:3000 (or the port you specified in your app.js file).
Interact with the Mirador Viewer and test its functionality.

### Apache Installation and Setup (Optional)
Install Apache on your server by running the following commands:

``` bash
sudo apt-get update
sudo apt-get install apache2
```
### Troubleshooting Apache
To troubleshoot Apache, monitor the Apache error log file by running the following command:
``` bash
tail -f /var/log/apache2/error_log
```

### Additional Resources
- Mirador Viewer Demo and Documentation: Project Mirador
 https://projectmirador.org/
- Text Overlay Plugin Documentation: mirador-textoverlay
 https://github.com/dbmdz/mirador-textoverlay
- IIIF API Documentation: IIIF
 https://iiif.io/api/
- examples 
 https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json without textover
 https://iiif.harvardartmuseums.org/manifests/object/299843 without textover
 https://iiif.wellcomecollection.org/presentation/v2/b18035723 with textover
