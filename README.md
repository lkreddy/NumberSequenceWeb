#Requirement#

"Numeric Sequence Calculator" project is to calculate some numeric sequences based on user input number. 

#Technologies Used#
JavaScript / AngularJs / Bootstrap / Jasmine / Karma test runner


#Running the site#

1) Download the file and unzip in a clean folder. The test frameworks used in this project are Node based, and node_modules can create very deep folder structures so use short folder path forproject setup.

2) Load the `NumberSequence.sln` solution file in Visual Studio (I used Visual Studio 2012 - Update 5).

3) Rebuild Solution.

4) Hit F5 to run the site. End user instructions are on the page.

#Running the unit tests#

These are writting in [Jasmine](http://jasmine.github.io/edge/introduction.html). The test runner is [Karma](http://karma-runner.github.io/0.12/index.html). Within the solution, they are saved in `Scripts\app\unittests`.

* Tio run test TeamCity can be used: [Karma integration with TeamCity](http://stackoverflow.com/questions/16343543/how-to-integrate-karma-with-teamcity).

**Instructions**

1) [Install Node](https://nodejs.org/). The tests require Node.js version v0.10.0 or better. If you already have Node installed, to check your version run this from the command line:
```
node --version
```

2) On the command line, go to the folder with the `Numbers.sln` file.

3) Install the required Node modules:
```
npm install
```

4) Change to the folder with the unit tests:
```
cd NumberSequence\Scripts\app\unittests
```

5)
Run the unit tests. These will take a while because they run in browsers. The results will be in the command window:
```
..\..\..\..\node_modules\.bin\karma start karma.config.js
```

#Running the UI tests#

Also writting in [Jasmine](http://jasmine.github.io/edge/introduction.html). Run using [Protractor](http://angular.github.io/protractor/#/), which is by the same crew as AngularJs. It uses a Selenium Server under the hood. The actual UI tests are in `Scripts\app\uitests`. [Integration with TeamCity](https://www.committedcoder.com/report-protractor-test-results-on-teamcity.html).

**Instructions**

1) The Selenium Server requires the Java Development Kit (JDK). [Installation page](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). To check if the JDK is installed, run
```
java -version
```

2) Install Protractor and the Webdriver manager:
```
npm; install -g protractor
```

3) Download binaries for the Selenium Server:
```
webdriver-manager update
```

4) Open a second command window.

5) In this second command window, run the Selenium Server (it will keep running unless you stop it):
```
webdriver-manager start
```

6) Go back to your first command window. It should still be at the `unittest` folder. Go to the uitests folder:
```
cd ..\uitests
```

7) Make sure that the site is running (in Visual Studio, hit F5).

8) Run the UI tests:
```
protractor protractor.config.js
```
