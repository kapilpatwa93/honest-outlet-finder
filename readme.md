# Honest Food Outlet Finder
## Technologies and Packages
##### NodeJS version : 8.11.2
##### Framework : Express(4.15.5)
##### KML to geoJSON : npm package "togeojson" (https://www.npmjs.com/package/@mapbox/togeojson)
##### Find point in polyon : npm package "point-in-geopolygon" (https://www.npmjs.com/package/point-in-polygon)
##### Address string to lat long : https://nominatim.openstreetmap.org/search (complete open source - not api hit limits)

## APIs
#### 1) Find Outlet
endpoint : /api/outlet (GET)
query params: address
#### Example 1 : api/outlet?address=Stumpergasse 51, 1060 Vienna
Result: 
```
{
"success": true,
"data": {
"name": "au_vienna_schoenbrunnerstr"
},
"message": "Outlet found"
}
```
#### Example 2 : api/outlet?address=zzzzzzzzzzzzzz
Result: 
```
{
"success": false,
"error": {
"message": "Invalid Address",
"code": 2001
}
}
```
#### Example 3 : api/outlet?address=Quadenstraße 5, 1200 Vienna
Result: 
```
{
"success": false,
"error": {
"message": "Outlet not found",
"code": 2002
}
}
```
### How to run?
1) Download
2) ` npm install`
3) `npm start` or  `node ./bin/www`
4) open http://localhost:3001 in the browser
