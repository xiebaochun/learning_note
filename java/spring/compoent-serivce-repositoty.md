## annotations
In most typical applications, we have distinct layers like data access, presentation, service, business, etc.
And, in each layer, we have various beans. Simply put, to detect them automatically,  Spring uses classpath scanning annotations.
Then, it registers each bean in the ApplicationContext.
Here's a quick overview of a few of these annotations:


### @Component
is a generic stereotype for any Spring-managed component

### @service
annotates classes at the service layer

### @repository
annotates classes at the persistence layer, which will act as a database repository
