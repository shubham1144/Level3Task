# Level3Task
Create a 'angular-webapp' to connect to server created at Level 1 and 2 tasks 

# Step 1: Make sure that the server is up and running on port '3000' for https requests.

# Step 2: Navigate to the directory where you will put the client code and Execute the following commands in 'gitbash':

```
git init
git remote add origin https://github.com/shubham1144/Level3Task.git
git remote -v
git pull origin master

```
# Step 3: Once the repository is pulled successfully, you should be able to see the following files, when we run the below command

```
ls

```
```
DevicePositionTracker.html	OverSpeedingDevices.html	font-awesome			index.html			nginx.conf
EfficiencyTracker.html		README.md			fonts				js				stationaryDevices.html
GeoDwell.html			css				home.html			listDevices.html
```
# Step 4: copy the 'nginx.conf' file and replace the existing 'nginx.conf' file with the file provided in the repository.
Also make changes in the 'nginx.conf' file to the 'root /path/to/location/of/project/root/directory;' to point to the root directory of the project.

```
http{
  server{
     listen 8080;
    location / {
         include /usr/local/etc/nginx/mime.types;
         root /path/to/location/of/project/root/directory;
               }
    location /tracker/ {
         proxy_pass https://localhost:3000;
                       }
   }
}

```

# Step 5: run the following command to start 'nginx':
```
sudo nginx
```

# Step 6: the client content can be accessed at 'http://localhost:8080/'.let the 'spawnclient' at level 1 task run for around 5 minutes before hitting the APi's from browser ,so that more relevant results are fetched.


