## Project Structure
	src
	|-- main
	    |-- resources
	    |   |-- *.properties
	    |   |-- *.xml
	    |   |-- spring
	    |       |-- applicationContext.xml (main application context config file)
	    |-- webapp
	        |-- WEB-INF
	            |-- spring
	            |   |-- spring-mvc.xml (web application context config file, delegated to manage only the web part)
	            |   |-- spring-security-http.xml (web security config)
	            |-- static
	            |   |-- *.css
	            |   |-- *.js
	            |-- views
	            |   |-- *.jsp
	            |-- web.xml (deployment configuration)

## web.xml
For any web application, entry point is web.xml(under WEB-INF directory)
which describes how the incoming http requests are served / processed
Further, it describes about the global-context and local-context param (i.e.; <context-param> & <init-param>) for loading the files particular to project requirements & contains respective listener

## Create WAR file
	`jar -cvf demoWebsite.war demo.jsp`

## Deploy War file to tomcat
	copy WAR file to CATALINA_HOME/webapps, e.g.,c:Tomcat8/webapps
	access it by: http://localhost:8080/demoWebsite/demo.jsp

	Note: When Tomcat is started, it will automatically expand the web application archive file into its unpacked form



