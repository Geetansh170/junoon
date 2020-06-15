# igscraper

Express web app used to scrape Instagram content.  
_This app is for educational purposes only, use at your own discretion_


# Installation 
 
`git clone https://github.com/eddswitchengage/igscraper`  
`cd /igscraper/`  
`npm i`

_If you're on Ubuntu, run the following bash script (it installs dependencies required by chrome driver)_  
`/scripts/dldeps.sh`

`node app.js` to run the app

# Usage
If you wish to use the app as-is (i.e as a webapp) then you can refer to the following endpoints for usage:

_Each POST endpoint takes the following json structure as the request body:_
~~~~
Request body structure:

username : string  
  - username of instagram user
  
post_url: string  
  - URL of a media post by an instagram user
  
max_posts: string  
  - max amount of posts to retrieve in one call
  
max_comments: string  
  - max amount of comments to retrieve in one call
  
continuation_token: string  
  - used to retrieve data continiously
  
retrieve_video: bool  
  - whether to retrieve video media or not (limited support)

~~~~

Note: only the fields that are relevant to the targeted endpoint are required as there are default values for each field

*POST*  
~~~~
'/user'
Retrieve a user profile

Req. paramaters:
- username

~~~~

~~~~
'/post'
Retrieve a single media post

Req. paramaters:
- post_url
~~~~

~~~~
'/post/all'
Retrieve multiple media posts fron auser

Req. paramaters:
- username
- continuation_token (only if making multiple continous calls)

~~~~

~~~~
'/post/random'
Retrieve a random media post from a user

Req. paramaters:
- username

~~~~

~~~~
'/post/comments'
Retrieve comments from a media post

Req. paramaters:
- post_url

~~~~

*GET*
~~~~
'/logs'
Retrieve request logs
~~~~

If you wish to use this app without the express back-end then simply access the methods in service.js manually
