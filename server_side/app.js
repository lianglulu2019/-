const express = require('express');
const url = require('url');
const mockjs = require('mockjs');
const app = express();

const Random = mockjs.Random;

// 开静态
app.use(express.static('static'));

app.get('/gjz', (req, res) => {
	const page = url.parse(req.url, true).query.page;

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Method', 'GET');
	res.setHeader('Access-Control-Allow-Content', '*');

	var arr = [];
	for(let i = 0; i < 10; i++){
		let m = Random.pick(['guanxiaotong', 'jindong', 'yangmi', 'yiyangqianxi']);
		let n = Random.integer(1, 5);

		arr.push({
			'id': Random.integer(1, 99999999),
			'name': Random.cname(),
			'address': Random.cword(40),
			'picUrl': m + '/' + n + '.jpg'
		});
	}
	res.json({
		arr: arr
	});
});

const mendianarr = [{"id":13,"name":"增信般边五形长命重育店","address":"专提几国矿质院确把史据约路12号","la":40.0390413,"lo":116.42,"distance":0.5318278743414305},{"id":32,"name":"全成展亲品保界样做如店","address":"切来相术是部处心相运回真路28号","la":40.1017,"lo":116.54,"distance":2.1660054000002718},{"id":29,"name":"名际确正质毛心什还划店","address":"率海知住体周且研做专表称路90号","la":40,"lo":116.62782,"distance":5.255277144000144},{"id":33,"name":"面照器我般选白位今他店","address":"员是他小清器住特然治研率路44号","la":40.4183513,"lo":116.40510231587992,"distance":6.18686461362127},{"id":26,"name":"值就算结团往标社标往店","address":"或门特新示已片断道石论马路10号","la":40.055275478898,"lo":116.73275,"distance":8.920844602332743},{"id":44,"name":"界处再计点流它外持本店","address":"法区己形存把接发求工相林路65号","la":40.31373645,"lo":116,"distance":10.039939455516004},{"id":3,"name":"习北须如情真具把认论店","address":"之素速率见工难量机离记党路25号","la":40.42158647520826,"lo":116.63810539592552,"distance":11.108414057846714},{"id":7,"name":"织经求见养持酸积价变店","address":"会且后见变周象半经况连立路30号","la":40.580747476565,"lo":116.14469408481074,"distance":16.28097990774348},{"id":22,"name":"命相酸面此处织干革第店","address":"有观九正个制头立知全至他路100号","la":40.621540363,"lo":116.5235685,"distance":18.00289277870562},{"id":17,"name":"且干流天价安发于步农店","address":"外周斯金中革运还共素区整路60号","la":40.4152,"lo":116.925349561127,"distance":25.74728144934283}];

app.get('/zuijin', (req, res) => {
	const la = url.parse(req.url, true).query.la;
	const lo = url.parse(req.url, true).query.lo;

	
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Method', 'GET');
	res.setHeader('Access-Control-Allow-Content', '*');


	// // 模拟50家店面的位置
	// var arr = [];

	// for(let i = 0; i < 50; i++){
	// 	let _la = Random.float(40.000000, 41.0000000);
	// 	let _lo =  Random.float(-117.000000, 116.0000000);
	 
	// 	arr.push({
	// 		'id': i,
	// 		'name': Random.cword(10) + '店',
	// 		'address': Random.cword(12) + '路' + Random.integer(0, 100) + '号',
	// 		'la': _la,
	// 		'lo': _lo,
	// 		'distance': (Math.pow(_la - la , 2) + Math.pow(_lo - lo , 2)) * 60
	// 	});
	// }

	// arr.sort((a, b) => a.distance - b.distance);

	res.json({
		arr: mendianarr
	});
});

app.get('/mendianxiangqing', (req, res) => {
	const id = url.parse(req.url, true).query.id;
 
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Method', 'GET');
	res.setHeader('Access-Control-Allow-Content', '*');

	var json = mendianarr.filter(item => item.id == id)[0];

	if(json){
		res.json({
			'info': json
		});
	}else{
		res.json({});
	}
});


app.get('/dongxi', (req, res) => {
	const leibiebianhao = url.parse(req.url, true).query.leibiebianhao;
 
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Method', 'GET');
	res.setHeader('Access-Control-Allow-Content', '*');

	var arr = [];
	var count = ~~(Math.random() * 100);
	for(let i = 0; i < count; i++){
	 
		arr.push({
			'id': leibiebianhao + '-' + i,
			'name': Random.cword(2, 7)
		});
	}
	res.json({
		arr: arr
	})
});


app.listen(3000);