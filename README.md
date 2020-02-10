# README

[![Codeship Status for erikacy/Vinder-TheWineFinder](https://app.codeship.com/projects/aedaeef0-2e55-0138-370e-6eb55da84966/status?branch=master)](https://app.codeship.com/projects/384832)

# Vinder- The Winder Finder

Title: Vinder


Description: Vinder is a wine recommending web application that allow users
to receive personalized wine list based on wine preferences.

User can select their preferences based on different wine attributes, and Vinder will generate a list of wines that user would like based in selected attributes.

User can also search wine by keyword such as the name or variety or country from the wine database.

User can also get exposed to detail information about each individual wine, as well as saving each individual wine to a personal wine list and make tasting notes for every wine.

Author: Erica Huang

Heroku Link

# Technologies

-Ruby - 2.6.3
-Rails - 5.2.4.1
-React - 16.8.0
-Foundation-Rails - 6.5.3.0


# Setup

To set up this app, download the repo and run the following commands in your terminal in exact order:

-yarn install<br />
-bundle exec bundle install<br />
-bundle exec rake db:create<br />
-bundle exec rake db:migrate && bundle exec rake db:rollback && bundle exec rake db:migrate<br />
-bundle exec rake db:seed<br />
-yarn start<br />
-new tab- bundle exec rails s<br />
-Navigate your browser to localhost:3000

# Testing

To run tests, run these files in a separate terminal tab:<br />
-bundle exec rake db:test:prepare<br />
-bundle exec rspec<br />
-yarn run test
