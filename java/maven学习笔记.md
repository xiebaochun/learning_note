## 1、pom.xml
POM-project object model(项目对象模型)
maven项目的核心
### groupId
定义了项目属于那个组，通常和组织/公司关联
### artifactId
当前Maven项目在组的唯一ID
### version
当前版本

## 代码结构
### 主代码
src/main/java
src.main/java/com/juvenxu/mvnbook/helloworld/HelloWorld.java

编译命令：mvn clean compile

### 测试代码
src/test/java
src/test/java/HelloWorld.java

测试命令：mvn clean test

## 打包和运行
### mvn clean package
实际上就是jar插件的jar目标将项目主 代码打包成一个名为hello-world-1.0-SNAPSHOT.jar的文件

### mvn clean install
该任务将项目输出的jar安装到了Maven本地仓库中

