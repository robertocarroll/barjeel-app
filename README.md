barjeel-app
===========
1. npm install
2. bower install
3. grunt serve   - starts a server and work on dev
4. grunt build   - creates a clean package for deployment in the dist folder  

## Build process
- The dev files for the app sit in the main branch
- 'grunt build' creates a version for deployment in the dist folder
- 'grunt-gh-pages' task copies the dist to gh-pages branch 
- This version can be viewed at http://robertocarroll.com/barjeel-app
- Phonegap Build picks up the gh-pages branch version
- Here's a [config.xml example](https://raw.githubusercontent.com/wildabeast/PhoneGapBuildTester/master/config.xml)

## Content
- Content is in the 'data' folder: https://github.com/robertocarroll/barjeel-app/tree/master/app/data

## Setting up Phonegap Build, iOS and Google Play
http://wiki.nsbasic.com/Submitting_to_the_iOS_App_Store
- config.xml is in the app folder and gets copied as part of the Yeoman build process 

### iOS
#### Development 
1. [iOS developer account](https://developer.apple.com/programs/ios/)
2. A development certificate - ios_development.cer - install it to Keychain on your computer
3. App ID - use this consistently
4. Add UDID for each device you want to test on
5. Provisioning profile - barjeeldevelopment.mobileprovision - bring the app together with the testing devices
6. Phonegap Build - https://build.phonegap.com/apps
7. "certificate" is the .p12 file
9. Export
10. Password 
11. Upload the .p12 file and the barjeeldevelopment.mobileprovision
12. Unlock using the password in step 10.

#### Install ipa file for testing
Upload to Diawi.com and email the link


## Connect images 
*In data/images/connect-images with the names specified in data/connect.json*

1. Each post needs a square image for the curator - used on connect 3.1, connect 3.2 and connect 3.3. It also needs an @2x image for retina screens. 
2. Each image needs a normal size and an @2x for retina screens. 
3. Suggest naming 1-1_, 1-2_, 2-1_, 2-2_ etc so it groups the images in order of posts and images(see examples in folder)
4. Max-width is currently set to 520px for the normal and 1020px for the retina to avoid distortion.

## Play images
*In data/images/play-images with the names specified in data/questions.json*
1. Each question has two images.
2. Each images needs a square version and a @2x for retina screens.
3. Each image needs a normal (uncropped version) and a @2x for retina screens.


## Line endings
- Git doesn't like .svg files sometimes and gets confused about line endings
- use `cmd+shift+P` then `Line Endings Unify`
- enter svg as the file extension
- the plugin will convert it to the correct line ending