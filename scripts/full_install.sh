#Script to install node and npm, install dependencies, and install npm packages

#Update and install node + npm
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm

#Install deps
./dldeps.sh

#Install npm packages
cd ../
npm i
		
