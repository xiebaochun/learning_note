## One liner to stop / remove all of Docker containers:
	`docker stop $(docker ps -a -q)
	 docker rm $(docker ps -a -q)`


## commonly commands
docker image ls

docker exec -it <CONTAINER> bash

docker logs -f <CONTAINER>