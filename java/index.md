## sublime text plugin
	javatar

## How java Launcher finds Classes
	The virtual machine searches for and loads classes in this order:
	Bootstrap classes
	Extension classes
	User classes(use classpath to specify)

	refer: https://docs.oracle.com/javase/7/docs/technotes/tools/findingclasses.html#jarclass

## CLASSPATH
	为什么要配置classpath变量？配置classpath变量，才能使得java解释器知道到哪里去找标准类库，这些标准类库是别人已经写好了的，我们只管使用。比如我们常用到java.lang包中的类，在配置classpath变量后被设为默认导入，所以在写程序时就不用import这个包了。那么这些标准类库在哪呢？在以JDK的lib目录下以jar为后缀的文件中：一个是dt.jar，一个是tools.jar，这两个jar包都位于C:/jdk1.6.0/lib目录下，所以通常我们都会把这两个jar包加到我们的classpath环境变量的值为：.; C:\Program Files\Java\jdk1.5.0_17\\lib\tools.jar; C:\Program Files\Java\jdk1.5.0_17\\lib\dt.jar;


## 学习网站
	http://how2j.cn/



