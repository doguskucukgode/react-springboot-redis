# react-springboot-redis
Basic react app with material UI framework, spring boot backend integrated to redis 

## Requirements
 * Java 8
 * Redis
 * Yarn
 * Gradle

 ## Redis
 ```
  docker run -p 6379:6379 --name redis -d redis 
 ```

 ## Frontend
```
 cd frontend_mui
 yarn install
 yarn start
```
Frontend will be opened automatically at http://localhost:3000
## Backend
```
 gradle build
 gradle bootRun

```
Backend will be running on http://localhost:8080 

