var time = document.getElementById('time')
var btn = document.getElementById('btn')
var list = new Date('2027-10-12T00:00:00')
var copy = document.getElementById('copy')

var n = setInterval(function() {
	var now = new Date()
	if (now >= list) {
		time.style.display = 'flex'
		clearInterval(n)
	} else {
		time.style.display = 'none'
	}
}, 0)

var news = document.getElementById('new')
var btnnew = document.getElementById('btnnew')
var btnnewgb = document.getElementById('btnnewgb')

btnnewgb.addEventListener('click', function() {
	news.style.display = 'none'
	sessionStorage.setItem('newgb', '2')
})

vnew()

function vnew() {
	fetch('https://ltrone.github.io/zmys/news.json')
		.then(rel => rel.json())
		.then(data => {
			console.log(data)
			if (data.vnew <= 12 || sessionStorage.getItem('newgb')) {
				news.style.display = 'none'
			} else {
				news.style.display = 'flex'
			}
		})
		.catch(() => setTimeout(vnew, 200))
}

btnnew.addEventListener('click', function() {
	navigator.clipboard.writeText('https://pan.quark.cn/s/a7d8e49e0ec8')
	App.ui.toast('已复制到剪切板')
})

btn.addEventListener('click', function() {
	webapp.关闭应用退出();
	//退出应用程序
})

copy.addEventListener('click', function() {
	top.location.href = 'zmrz.html'
})