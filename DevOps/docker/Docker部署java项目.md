1 In project root create Dcokerfile, As following:

	FROM openjdk:8
	ADD target/jwt-auth-service-1.0.0.jar jwt-auth-service.jar
	EXPOSE 8085
	ENTRYPOINT ["java", "-jar", "jwt-auth-service.jar"]


2 build docker image for this project

	docker build -f Dockerfile -t jwt-auth-service .

3 Run docker image
	docker images
	docker run -p 8085:8080 jwt-auth-service 
				[docker port:application port]

