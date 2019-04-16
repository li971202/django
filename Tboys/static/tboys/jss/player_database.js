// MP3播放器及歌曲库js


	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	},
     [
		 { title: "Ellens Gesang III D839", artist: "Geoffrey Parsons", mp3:"http://music.163.com/song/media/outer/url?id=16691428.mp3  ", poster: "http://p1.music.126.net/wAIlwR4SxuZg_ZMwgmSYcg==/3386495814257726.jpg?param=130y130"},
		 { title: "默", artist: "那英", mp3:"http://music.163.com/song/media/outer/url?id=31473269.mp3 ", poster: "http://p1.music.126.net/OCGt5ln0lPPtPbVJ3VEKtA==/109951163020570422.jpg?param=130y130"},
		 { title: "Fire", artist: "Said The Sky", mp3:"http://music.163.com/song/media/outer/url?id=435289279.mp3", poster: "http://p1.music.126.net/tg2zke_mrqwuOPlEIEUjGg==/18294773975127592.jpg?param=130y130"}
	 ], 
		 		    
		{playlistOptions:{enableRemoveControls: true},
		swfPath: "js/",
		supplied: "webmv, ogv, m4v, oga, mp3",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		audioFullScreen: true
	});
	

	//past
	var latest=[
		{ title: "Fleur de lis", artist: "Noicybino", mp3: "http://music.163.com/song/media/outer/url?id=533079474.mp3", poster:"http://p1.music.126.net/C3C4vPOMsTd_vX9Ccww06Q==/109951163117390906.jpg?param=130y130"},
		{ title: "Dance, cherry blossoms!", artist: "Yuri akiyama", mp3: "http://music.163.com/song/media/outer/url?id=518291899.mp3 ", poster:"http://p1.music.126.net/AKhQSRL6HyZu4YwWg4Wi6A==/109951163060585255.jpg?param=130y130"},
		{ title: "Lost in Love", artist: "Bois LanYun", mp3: "http://music.163.com/song/media/outer/url?id=521597063.mp3", poster:"http://p1.music.126.net/6o_M9dSbYPRqKRmwY1bOGg==/109951163073262137.jpg?param=130y130"},
		{ title: "远すぎた空", artist: "Akito", mp3: "http://music.163.com/song/media/outer/url?id=357185.mp3", poster:"http://p1.music.126.net/7cYhniBuLvU3fvLjeRFeNw==/106652627910735.jpg?param=130y130"},
		{ title: "Whether", artist: " AniFace", mp3: "http://music.163.com/song/media/outer/url?id=515384791.mp3", poster:"http://p1.music.126.net/PzE3JrY7QVqFghK9gJN67A==/109951163050326398.jpg?param=130y130"},
		{ title: "Constellation Of Tatyana", artist: "Yakuro", mp3: "http://music.163.com/song/media/outer/url?id=28914253.mp3", poster:"http://p1.music.126.net/V7YrIWl2ALgg4QZTxD7_rw==/2937895071851575.jpg?param=130y130"},
		{ title: "Princess", artist: "α·Pav", mp3: "http://music.163.com/song/media/outer/url?id=357023.mp3", poster:"http://p1.music.126.net/ktIGtL8eCh6bmDf5a27tFQ==/93458488378205.jpg?param=130y130"},
		{ title: "Day by Day", artist: "Shirfine", mp3: "http://music.163.com/song/media/outer/url?id=27579054.mp3", poster:"http://p1.music.126.net/J6m3eJOw32G_wDim2tqloA==/5636096604060170.jpg?param=130y130"},
		{ title: "blue blossoms", artist: "久遠", mp3: "http://music.163.com/song/media/outer/url?id=803347.mp3", poster:"http://p1.music.126.net/j9u_wRtJMhlt64k-ZSUM3Q==/944480488305733.jpg?param=130y130"}
	];

	//now
	var popular=[
		{ title: "木头的心", artist: "", mp3: "http://music.163.com/song/media/outer/url?id=35476883.mp3", poster:"https://p1.music.126.net/ek5C5HeDHICGjziHhTMCow==/749866930165203.jpg?param=130y130"},
		{ title: "初恋旧爱新欢", artist: "", mp3: "http://music.163.com/song/media/outer/url?id=30284674.mp3", poster:"http://p1.music.126.net/ek5C5HeDHICGjziHhTMCow==/749866930165203.jpg?param=130y130"},
		{ title: "She Is My Sin", artist: "", mp3: "http://music.163.com/song/media/outer/url?id=4209157.mp3", poster:"http://p1.music.126.net/ykne_IJENLMk5KvNUXC3Xg==/779553744115520.jpg?param=130y130"},
		{ title: "Down", artist: "", mp3: "http://music.163.com/song/media/outer/url?id=405226741.mp3", poster: "http://p1.music.126.net/jRkMO3QROnFeVrL2m3XuvQ==/18976471183854535.jpg?param=130y130"},
		{ title: "Call of the ambulance", artist: "", mp3: "http://music.163.com/song/media/outer/url?id=29984255.mp3", poster:"http://p1.music.126.net/e0tsg402IoJLHyJIx4TWQw==/4451922580867675.jpg?param=130y130"},
		{ title: "听见下雨的声音", artist: "", mp3: "http://music.163.com/song/media/outer/url?id=29822014.mp3", poster:"http://p1.music.126.net/RNabeevAh1X4_U76fS1FCg==/4415638697151069.jpg?param=130y130"},
		{ title: "夏天的风", artist: "Sound Horizon", mp3: "http://music.163.com/song/media/outer/url?id=298213.mp3", poster:"http://p1.music.126.net/RNabeevAh1X4_U76fS1FCg==/4415638697151069.jpg?param=130y130"},
		{ title: "开始懂了", artist: "MUSIRISCA", mp3: "http://music.163.com/song/media/outer/url?id=287719.mp3", poster:"http://p1.music.126.net/9vinX4XYfdNgSu3pQcWMMg==/2542070884388514.jpg?param=130y130"},
		{ title: "我不难过", artist: "MUSIRISCA", mp3: "http://music.163.com/song/media/outer/url?id=287398.mp3", poster:"http://p1.music.126.net/g9dAq3k_Z9gE6GRcZo4XuA==/3420580674756260.jpg?param=130y130"}
	];

	//future
	var rank=[
		{ title: "创奏", artist: "霜月はるか", mp3: "http://music.163.com/song/media/outer/url?id=645239.mp3", poster:"http://p1.music.126.net/Fp7CYfdZsQAYZls-gD8KpQ==/2262794929982835.jpg?param=130y130"},
		{ title: "願い枯れゆく歌声", artist: "Ether", mp3: "http://music.163.com/song/media/outer/url?id=40915970.mp3", poster:"http://p1.music.126.net/DU6RM83OPR0KMcVP05f6zA==/3294136844455797.jpg?param=130y130"},
		{ title: "LICHT MEER", artist: "河合夕子", mp3: "http://music.163.com/song/media/outer/url?id=499086.mp3", poster:"http://p1.music.126.net/z7Mk6Au_otaoWozoM-t62w==/2402432906715323.jpg?param=130y130"},
		{ title: "Nocturne No. 2 ", artist: "Chopin", mp3: "http://music.163.com/song/media/outer/url?id=1060914.mp3", poster:"http://p1.music.126.net/Dvhon4mH7qimTtE7q3omTw==/1419469524716144.jpg?param=130y130"},
		{ title: "夜曲", artist: "Chopin", mp3: "http://music.163.com/song/media/outer/url?id=5266269.mp3", poster:"http://p1.music.126.net/-jxEuvKopuUdXDTKL7KuWw==/105553116283769.jpg?param=130y130"},
		{ title: "降E大调夜曲", artist: "Chopin", mp3: "http://music.163.com/song/media/outer/url?id=25830129.mp3", poster:"http://p1.music.126.net/h3MYwTuGIpkWiMuBwZ3Vmg==/6631154628238015.jpg?param=130y130"},
		{ title: "即兴幻想曲", artist: "Chopin", mp3: "http://music.163.com/song/media/outer/url?id=25830133.mp3", poster:"http://p1.music.126.net/8cSVJulJa2tiLydRxyXuTg==/109951162938339077.jpg?param=130y130"},
		{ title: "Nocturne op. 32", artist: "Chopin", mp3: "http://music.163.com/song/media/outer/url?id=26160789.mp3", poster:"http://p1.music.126.net/MiXbBt6j6xWNlv_QCFSRAw==/2288083697427927.jpg?param=130y130"},
		{ title: "Prelude in Des", artist: "Chopin", mp3: "http://music.163.com/song/media/outer/url?id=26818399.mp3", poster:"http://p1.music.126.net/68_Rrtyz1A9MGImm2cUb-w==/2078076976524854.jpg?param=130y130"}
	];

   // oline song/dream/
   var main =[
	   { title: "Init", artist: "Virtual Riot", mp3: "http://music.163.com/song/media/outer/url?id=461519865.mp3", poster: "http://p1.music.126.net/wME0oX7VY7fEkKvbXgzlrA==/19122706230471650.jpg?param=130y130" },
	   { title: "421", artist: "Cyan Lpegd", mp3: "http://music.163.com/song/media/outer/url?id=511639386.mp3", poster: "http://img5.imgtn.bdimg.com/it/u=3718886823,522924068&fm=26&gp=0.jpg" },
	   { title: "Slip", artist: "徐梦圆", mp3: "http://music.163.com/song/media/outer/url?id=424496657.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552678683913&di=3eec9b05a44bbf17083e829f0b7441a4&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fa6c7b8acad424419110e96e167650f8ddaaa2bd5.jpg" },
	   { title: "Lost", artist: "Tule", mp3: "http://music.163.com/song/media/outer/url?id=514761669.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552673323325&di=73ad9ccf558c4dd64b6acd8767367b96&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Fdc3098153ff7ecc10066ef2e4c618be515f55aa0.jpg" },
	   { title: "Zest", artist: "Venemy", mp3: "http://music.163.com/song/media/outer/url?id=426291149.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552673323325&di=00c8ae61032a7caf1e45c05c4981595f&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fe27d58a5cd6fe05768f15ae19a6f7a73aac23a77.jpg" },
	   { title: "Cool", artist: "Blume", mp3: "http://music.163.com/song/media/outer/url?id=444267496.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552673323326&di=6c15bc759946eb5eff9d85d46a64e2b0&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw1723h1144%2F20171223%2F2ff0-fypvuqf4405883.jpg" },
	   { title: "Echo", artist: "SaMZing", mp3: "http://music.163.com/song/media/outer/url?id=1311835501.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552673323328&di=f6401a3808e14eb0502ada53165944e2&imgtype=0&src=http%3A%2F%2Fwww.h19club.com%2FUpload%2FDSC06319.jpg" },
	   { title: "Vivid", artist: "Valcos", mp3: "http://music.163.com/song/media/outer/url?id=30352407.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552673323329&di=0a93c7794e4331c79bb05042b2067c9c&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F7d408311e3d0808f957438d0c74ebe4f3452a633.jpg" },
	   { title: "Icaro", artist: "Distrion", mp3: "http://music.163.com/song/media/outer/url?id=551337701.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552673323329&di=80ffd2129bdcaa82f0d63cb1b862bbd1&imgtype=0&src=http%3A%2F%2Fp0.qhimgs4.com%2Ft012ea0e1a04aa4b94d.jpg" },
	   { title: "Alien", artist: "Sabrina", mp3: "http://music.163.com/song/media/outer/url?id=545201001.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552673323330&di=2cd0d7febad3de8e663202f63770d9bb&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F510b2c46bb3fbd5c3f2e29d07245df72304a3df2.png" }
	   ];
   var spirit =[
	   { title: "M19+20", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=591753.mp3 ", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552674450692&di=47bcc2ac6c905c1fb68b8f7fa9be3b90&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F49d7eabe190431eea27707874828147356b4e7b9.jpg" },
	   { title: "Sis puella magica!", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=496902072.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552674450691&di=133a8e39c992df290fe4da8e43dc2c1a&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-4o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F9825bc315c6034a86af5ef8acd134954092376a1.jpg" },
	   { title: "月は优しく (月)", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=590623.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552674450690&di=2f6d2539012eaf86f89bfe5a792270c7&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F51%2F84%2F16pic_5184592_b.jpg" },
	   { title: "Euterpe エウテルペ ", artist: "染音若蔡", mp3: "http://music.163.com/song/media/outer/url?id=452654214.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552674450689&di=bc7a50d5fc656278f4befbd412059de9&imgtype=0&src=http%3A%2F%2Fwww.bizhidaquan.com%2Fd%2Ffile%2Fhuahui%2Fhuacaoshuye%2F2014-10-29%2F9d2fd06dfff3c3bc8900a360747e8c3f.jpg" },
	   { title: "幻光", artist: "杨秉音", mp3: "http://music.163.com/song/media/outer/url?id=526989692.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552674450686&di=713d3dcab03e22a1e3c74fd549caf091&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201602%2F20%2F20160220213905_Cyk4i.thumb.700_0.jpeg" },
	   { title: "世界の約束", artist: "神罗Shinra", mp3: "http://music.163.com/song/media/outer/url?id=429460870.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552674549711&di=2d64ecbdaedc3dfdb605e1ebcfed6abc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201404%2F04%2F20140404060138_4hrRF.jpeg" },
	   { title: "Cave OF Mind", artist: "久石譲", mp3: "http://music.163.com/song/media/outer/url?id=28457572.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552674549710&di=2706c8bef6f379d8e992e9bd998f3ce2&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd3022796a9b97024a11ae81ef0794834.jpeg%40wm_2%2Ct_55m%2B5a625Y%2B3L%2BWKqOa8q%2BasoeWFg%2BWnkA%3D%3D%2Cfc_ffffff%2Cff_U2ltSGVp%2Csz_33%2Cx_21%2Cy_21" },
	   { title: "幽灵公主", artist: "K. Williams", mp3: "http://music.163.com/song/media/outer/url?id=28457554.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552674549710&di=04302195caa7fc6cdd64b3910737f20c&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F548b9804716b6988fa605ef6b59a9655.jpeg%40c_1%2Cw_650%2Ch_845%2Cx_0%2Cy_37" },
	   { title: "心之逆鳞", artist: "魏小涵", mp3: "http://music.163.com/song/media/outer/url?id=408280658.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552674549709&di=2c9374c36d3c1948ef28d32710880559&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F9de8e45a2bd8ada79177d86b3a80a2cf.jpeg" },
	   { title: "愛を教えてくれた君へ", artist: "Qaijff", mp3: "http://music.163.com/song/media/outer/url?id=521416051.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552674659654&di=cba82f57aa22287f1cda638dd2f247ab&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F53a56410505594563b431dcbf8041087b6b11e79.jpg" }
	   ];
   var magic =[
	   { title: "群雄疾走", artist: "川井憲次", mp3: "http://music.163.com/song/media/outer/url?id=448153.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552675060300&di=6ee7ece2e939f92e5fcdb47d3fa6f35d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201402%2F24%2F20140224203350_eimyV.jpeg" },
	   { title: "Ghost of a smile", artist: "EGOIST", mp3: "http://music.163.com/song/media/outer/url?id=35955908.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552675060298&di=963098ce3d3664914ade6bdaf20d22ac&imgtype=0&src=http%3A%2F%2Fimglf1.ph.126.net%2Fw0HMmhKkt5I5_TvxZZxgGg%3D%3D%2F6608529976352980348.jpg" },
	   { title: "樱子小姐的脚下", artist: "大竹佑季", mp3: "http://music.163.com/song/media/outer/url?id=36271375.mp3", poster:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552675060297&di=265646e4a017391457aefbb531417ac5&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fed252bce8494879d84f8b5156bbe3746de8a072d.jpg" },
	   { title: "非科学的表裏一体", artist: "豚乙女", mp3: "http://music.163.com/song/media/outer/url?id=30870899.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552675060294&di=12a1030ce34747307c409661480c8c98&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201401%2F04%2F20140104235918_uNikH.jpeg" },
	   { title: "You're the Shine", artist: "：FELT", mp3: "http://music.163.com/song/media/outer/url?id=26260757.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552675060294&di=b80b9d3dd427e042bbc7c15c5537d55e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F06%2F20150406H4138_icRex.jpeg" },
	   { title: "旅の途中", artist: "清浦夏実", mp3: "http://music.163.com/song/media/outer/url?id=26220167.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552675060321&di=8cbf347a8e85499de0eea0d9721cb83d&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201506%2F25%2F20150625220640_3jSEQ.jpeg" },
	   { title: "夏祭り", artist: "東山奈央", mp3: "http://music.163.com/song/media/outer/url?id=488388729.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552675060320&di=43cbe86c864684b62a9eb42ed72b6686&imgtype=0&src=http%3A%2F%2Fp2.gexing.com%2FG1%2FM00%2F1F%2FA5%2FrBACFFMa47CRjnEwAARsDSxzvDk354.jpg" },
	   { title: "Sway", artist: "Nevve", mp3: "http://music.163.com/song/media/outer/url?id=475073464.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552675060319&di=4e281c614840dccf4eda5caf442648ed&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201605%2F15%2F20160515233306_GsReQ.jpeg" },
	   { title: "Vanish", artist: " Breathe Carolina", mp3: "http://music.163.com/song/media/outer/url?id=427542077.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552675333553&di=77da69f69637ffe168495bc23194b48f&imgtype=0&src=http%3A%2F%2Fpccoo.cn%2Fablum%2F20120720%2F20120720163444582.jpg" },
	   { title: "It's Over", artist: "MEIDEN", mp3: "http://music.163.com/song/media/outer/url?id=477933011.mp3", poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552675333552&di=85ad2b5356e016e5db109823f4ab2277&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F90%2F68%2FrBACFFYTl4nyAoM6AAUBrUq0JPc967.jpg" }
	   ];

	//添加播放歌曲

	$("#latest li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:latest[k].title, artist:latest[k].artist,
			//free:true,
			mp3:latest[k].mp3,
			//oga:"",
			poster:latest[k].poster
		});
		myPlaylist.play(-1);
	});

	$("#popular li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:popular[k].title, artist:popular[k].artist,
			//free:true,
			mp3:popular[k].mp3,
			//oga:"",
			poster:popular[k].poster
		});
		myPlaylist.play(-1);
	});

	$("#rank li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:rank[k].title, artist:rank[k].artist,
			//free:true,
			mp3:rank[k].mp3,
			//oga:"",
			poster:rank[k].poster
		});
		myPlaylist.play(-1);
	});
	
$("#main li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: main[k].title, artist: main[k].artist,
		//free:true,
		mp3: main[k].mp3,
		//oga:"",
		poster: main[k].poster
	});
	myPlaylist.play(-1);
});
	
$("#spirit li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: spirit[k].title,
		artist: spirit[k].artist,
		//free:true,
		mp3: spirit[k].mp3,
		//oga:"",
		poster: spirit[k].poster
	});
	myPlaylist.play(-1);
});
$("#magic li").find("a.playIcon").click(function () {
	var m = $(this).parent("li").index();
	myPlaylist.add({
		title: magic[m].title,
		artist: magic[m].artist,
		//free:true,
		mp3: magic[m].mp3,
		//oga:"",
		poster: magic[m].poster
	});
	myPlaylist.play(-1);
});
	//添加歌曲结束


	//移除
	$("#playlist-remove").click(function() {
		myPlaylist.remove();		//（0 1 2 ... -2 -1）
	});
	
	$("#listRemove").click(function() {
		myPlaylist.remove();
	});

	// 上一曲、下一曲

	$("#playlist-next").click(function() {
		myPlaylist.next();
	});
	$("#playlist-previous").click(function() {
		myPlaylist.previous();
	});

	// 播放
	$("#playlist-play").click(function() {
		myPlaylist.play();
	});

	$("#playlist-play--2").click(function() {
		myPlaylist.play(-2);
	});
	$("#playlist-play--1").click(function() {
		myPlaylist.play(-1);
	});
	$("#playlist-play-0").click(function() {
		myPlaylist.play(0);
	});
	$("#playlist-play-1").click(function() {
		myPlaylist.play(1);
	});
	$("#playlist-play-2").click(function() {
		myPlaylist.play(2);
	});

	// 暂停

	$("#playlist-pause").click(function() {
		myPlaylist.pause();
	});



	//是否自动播放

	$("#playlist-option-autoPlay-true").click(function() {
		myPlaylist.option("autoPlay", true);
	});
	$("#playlist-option-autoPlay-false").click(function() {
		myPlaylist.option("autoPlay", false);
	});




	//播放器列表滚动条js------------------------------------------------------------------------------------------------
	var $bar=$(".bar");
	var $scrollBar=$(".scrollBar");
	var $maxH = $scrollBar.innerHeight() - $bar.outerHeight();
	var $ul=$(".jp-playlist ul");
	var $li=$(".jp-playlist ul li");
	var disY=0; 
	var iScale=0;
	var iSpeed = 0;
	
	$ul.height(1000);		//设置ul的高度
	
	$bar.mousedown(function (event){
		var event = event || window.event;
		disY = event.clientY - $(this).position().top;                
		$(document).bind("mousemove",function (event){
				var event = event || window.event;
				var iH = event.clientY - disY;                        
				iH <= 0 && (iH = 0);
				iH >= $maxH && (iH = $maxH);
				$bar.css({top : iH + "px"});
				iScale = - iH/$maxH;
				$ul.css({top:iScale*($ul.height()-$(".jp-playlist-box").height())+"px"});	
				return false;
		});                
		$(document).bind("mouseup",function (){		
				$(document).unbind("mousemove");
				$(document).unbind("mouseup");
		});
		return false;
	});
	
	 //当鼠标移入，监听事件
	$(".jp-playlist-box").mouseover(function(){
			//鼠标滚轮
			addHandler(this, "mousewheel", mouseWheel);//IE
			addHandler(this, "DOMMouseScroll", mouseWheel);//标准
			return false;			
	});
	//绑定事件重写兼容
	 function addHandler(element, type, handler){
			return element.addEventListener ? element.addEventListener(type, handler, false) :
			element.attachEvent("on" + type, handler, false)
	}
	 //鼠标滚轮事件
	function mouseWheel(event){
		var event = event || window.event;
		if(event.wheelDelta) {//IE
				iSpeed = event.wheelDelta > 0 ? -3 : 3;
		}else if(event.detail) {//火孤
				iSpeed = event.detail < 0 ? -3 : 3;
		}
		move();
		
		//FF,绑定事件，阻止默认事件  
		if (event.preventDefault) {  
			event.preventDefault();  
		} 	
	} ;
	//滚轮 要执行的
	function move(){
		var iH=$bar.position().top;
		iH=iH+iSpeed;
		iH <= 0 && (iH = 0);
		iH >= $maxH && (iH = $maxH);
		$bar.css({top:iH+"px"});
		iScale = - iH/$maxH;
		$ul.css({top:iScale*($ul.height()-$(".jp-playlist-box").height())+"px"});
		return false;
	};
	//播放器列表滚动条js 结束------------------------------------------------
	
	
	
	//音乐播放器 收缩、展开----------------------------------------------
	var fold=true;//标识
	
	//页面加载时，播放器运动出来，延迟2秒，运动回去
	$(".jp-video").animate({left:0},"slow",function(){
		slideOut($(this));		
	}).delay(2000).animate({left:"-480px"},350,function(){
		slideIn($(this));	
	});
	
	//点击按钮运动出来，或运动回去
	$("#btnfold").mouseover(function(){
		if(fold){
			$(".jp-video").animate({left:"-480px"},350,function(){	
				slideIn($(this));
			});	
		}else{
			$(".jp-video").animate({left:0},350,function(){
				slideOut($(this));
			});	
		}
	});
	//封装按钮背景切换1
	function slideOut(obj){
		$("#btnfold").attr({"title":"点击收缩"});
		obj.find("span").css({"transform":"rotate(180deg)"});
		obj.find("span").css({"MozTransform":"rotate(180deg) translateX(2px)"});
		obj.find("span").css({"WebkitTransform":"rotate(180deg)"});
		fold=true;		
	};
	//封装按钮背景切换2
	function slideIn(obj){
		$("#btnfold").attr({"title":"点击展开"});	
		obj.find("span").css({"transform":"rotate(0deg)"});
		obj.find("span").css({"MozTransform":"rotate(0deg) translateX(-2px)"});
		obj.find("span").css({"WebkitTransform":"rotate(0deg)"});
		fold=false;	
	};
	
	//歌曲列表展开、收缩---------------------------------------------------
	var iOpen=false;
	$("#listClose").click(function(){
		if(iOpen){
			$(".jp-playlist-box").animate({height:0},100);
			$("#btnfold").css({top:"5px"});
			$("#listRemove").css({display:"none"});
			$(".scrollBar").css({display:"none"});
			$(".jp-video").animate({height:"94px",bottom:"20px"},100);
			iOpen=false;
		}else{
			$(".jp-playlist-box").animate({height:"80px"},100);
			$("#btnfold").css({top:"52px"});
			$("#listRemove").css({display:"block"});
			$(".scrollBar").css({display:"block"});
			$(".jp-video").animate({height:"175px",bottom:"20px"},100);
			iOpen=true;
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
