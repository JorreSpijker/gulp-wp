# Gulp-wp
![macOS](https://img.shields.io/badge/OS-macOS-blue.svg)
![Wordpress](https://img.shields.io/wordpress/v/akismet.svg)
![Gulp](https://img.shields.io/badge/Gulp-3.9.1-red.svg)
![Local](https://img.shields.io/badge/Local-1.3.0-brightgreen.svg)

Theme from: Underscores.me

## Installation

0. Install Local from the [website](https://local.getflywheel.com/).
0. Go to settings and change the "Default Sites Path" to: `/Users/[username]/local-sites/`.
0. Create a new project. Choose the projectname wisely.
0. Clone or download this project and put it in a place of choice.
0. Open the "gulpfile.js".
0. Change the following variables:
	0. theme_name: The name of your theme.
	0. project_name: The name of your project, must be equal to the project you filled in step 2.
0. Run `npm install` in the Terminal.
0. Make sure you started the local server from "Local".
0. Run `gulp`, here you can see all the commands you can use.
0. Run `gulp deploy`, this will send the `/build` folder to the local wordpress theme directory.
0. Go to [projectname].dev and login with the admin information you filled in step 1.
0. Go to `Appearance` > `Themes` and activate your theme.

## Use
These steps needs to be done for daily usage:
0. Open "Local" and start the server.
0. Navigate to the folder where you cloned this project.
0. Run `gulp`, here you can see all the commands you can use.
0. Run `gulp watch` and start editing the files.
0. Now the changes will compile automatically and deploy automatically to the local wordpress directory. The browser will reload automatically.
