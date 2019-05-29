1 创建connect实例
	方式一(default)：
		mongoose.connect('mongodb://localhost/gettingstarted', {useNewUrlParser: true});
		实例为： mongoose.connection
		场景： single pool(poolSize default: 5)
	方式二(自定义)：
		var connection = mongoose.createConnection('mongodb://localhost:27017/test');
		场景：multiple connections pools with different props

2 创建Model
	default connection:
		var schema = new mongoose.Schema({ name: 'string', size: 'string' });
		var Tank = mongoose.model('Tank', schema);
			it use default mongoose connections(mongoose.connection)

	mutiple connections:
		var connection = mongoose.createConnection('mongodb://localhost:27017/test');
		var schema = new mongoose.Schema({ name: 'string', size: 'string' });
		var Tank = connection.model('Tank', schema);

3 