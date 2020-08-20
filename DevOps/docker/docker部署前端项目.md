1、编写Dockerfile文件，docker将根据这个文件自动部署你的项目
	`# 在容器安装nginx
	FROM nginx
	# 移除nginx的default.conf 
	RUN rm /etc/nginx/conf.d/default.conf 
	# 把配置好的nginx配置文件添加到 /etc/nginx/conf.d/ 目录下  （就是把default.conf文件替换）
	ADD default.conf /etc/nginx/conf.d/
	# 把前端项目文件夹 复制到/usr/share/nginx/html/文件夹下
	COPY dist/ /usr/share/nginx/html/
	`
2、将Dockerfile文件和前端项目放在同一个文件夹，有利于打包:
	dist          ---前端build之后的项目
	default.conf  ---项目nginx配置
	Dockerfile    ---用于生成docker镜像的文件

	注:此时可以交给运维部署了

3、打包docker镜像
	`docker build -t test_web88 .`

4、查看生成的景象
	`docker images`

5、运行镜像
	`docker run -d -p 8686:80 aa43674b9f8`
	-d 代表镜像在后台运行
	-p 代表映射端口号 容器开的端口:服务器的端口
	最后的的字符串是镜像的ID

6、查看镜像是否运行成功
	docker ps

7、用浏览器访问8686端口
	url:[docker的ip地址]:8686


8、停止docker服务
	docker kill [id]

