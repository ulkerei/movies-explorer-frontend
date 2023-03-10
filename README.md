# movies-explorer-frontend
This repo includes frontend for the application with the following features: user authorization and registration, operations with cards and users, request to external API.

## About
A study dimloma-project: movie library. 

## Techs:
<div>
	<img height="24" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" />
	<img height="24" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" />
	<img height="24" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" />
	<img height="24" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" />
	<img height="24" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" />
	<img height="24" src="https://user-images.githubusercontent.com/25181517/183345125-9a7cd2e6-6ad6-436f-8490-44c903bef84c.png" alt="Nginx" title="Nginx" />
</div>

## Functionality
1. Registration and authorization.
2. Token is stored in localStorage.
3. Logged users able to change their personal information, search movies, save them in own library, delete from it.
4. Non-authorized user not able to reach secure routes.
5. App works with two APIs. Own backend part - to save and delete movies, manage users; and external - to search movies in DB.
 
While I'm having a grant from Ya.cloud, you could reach the app here:
Frontend https://movielib.nomoredomains.club
Backend https://api.movielib.nomoredomains.club

After that please [watch my loom video](https://www.loom.com/share/6f809d04d7f44028aa5b2e75cd30ed54?t=120).
Or you can run this project locally:
```
git clone https://github.com/ulkerei/movies-explorer-frontend.git
```
go to local directory
```
npm i
```
```
npm run start
```

Figma prototype .fig
https://disk.yandex.ru/d/7qbSjgUOJVf6Lw

##Update
Added a movie card with info: year, country, description, etc. That's not a default feature, but I think It's beter to use info that we get from server than just forget about it.