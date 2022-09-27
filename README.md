<p align="center"><a href="#" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>


## Installation

To get started, install Xampp on your local machine. This application creates a web- and MySQL server on your machine. Next up, clone this project into your C:\xampp\htdocs folder. What you will need to do now, is tell your Xampp where to look for the webpages it needs to display.

To do so, open the Xampp control panel. In Apache's line, click Config and then click the httpd.conf option. In the file that just opened, look for a line: *DocumentRoot "C:/xampp/htdocs/"* and change it to *DocumentRoot "C:/xampp/htdocs/theatrix/public"*.

Now go to your Xampp control panel once again. If you have not done this yet, start Apache and MySQL.
We will now set up your database. To do so, browse to *[localhost/phpmyadmin](localhost/phpmyadmin)* and create a new user called theatrix.
Give this new user a password and click 'create a database with the same name and all rights'.

Next up, copy the *.env.example file*, and name it *.env*. Change the Database settings to what matches for you.
(https://github.com/laravel/laravel/blob/9.x/.env.example)
Now open a cmd window within the projects root folder. Here, run the following commands:
- composer install
- npm install
- npm run dev (you might need to do this twice. Once to install dependencies, once to actually install)
- php artisan migrate:fresh --seed



To fix the missing MongoDB extension error:
You need to download the PHP extension for MongoDB. Go to:
https://pecl.php.net/package/mongodb/1.13.0/windows
and download the 8.1 Non thread safe x64 dll.

Paste this file in your C:\xampp\php\ext folder (unless you installed your main php in a different location.

Edit the file C:\xampp\php\php.ini and in the section with all extensions, add the following line:

extension=php_mongodb.dll


After doing so, restart your Apache. The MongoDB driver is now installed. You might need to run a 'composer install' to fix some dependency errors, but that should be it.

All you have to do now is browse to [localhost](localhost) in your webbrowser.

All React.js components are located in resources/js/components.
All back-end functionality is located in app folder.

You can find our documentation and much more details and help in this link:
https://www.notion.so/Theatrix-Guide-16cde481c8ea4cac8172b5d90866bf2a