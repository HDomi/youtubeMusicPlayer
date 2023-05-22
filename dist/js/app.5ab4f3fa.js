(function(){"use strict";var t={3610:function(t,i,s){var e=s(6369),a=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],l=s(3736),o={},c=(0,l.Z)(o,a,n,!1,null,null,null),d=c.exports,r=s(2631),u=function(){var t=this,i=t._self._c;return i("div",{staticClass:"wrap stars"},[i("div",{staticClass:"small"}),i("div",{staticClass:"medium"}),i("div",{staticClass:"big"}),i("div",{staticClass:"controlBar-wrap"},[i("div",{staticClass:"flux"},[t._v("Music Player")]),i("div",{staticClass:"description"},[t._v("유투브 영상 링크를 복사하여 노래추가하기를 통해 노래를 추가해 주세요.")]),i("div",{staticClass:"description"},[t._v("재생/일시정지를 임의로 조작하지 말아주세요..")]),i("youtube-media",{staticStyle:{position:"absolute",left:"-9999px",top:"-9999px",width:"0",height:"0"},attrs:{"video-id":t.videoId,"player-vars":{autoplay:1}},on:{ready:t.ready,playing:t.playing,ended:t.change}}),i("div",{staticClass:"playing-info-wrap"},[t.nowSingTitle.length?i("div",{staticClass:"play-title"},[t._v(t._s(t.nowSingTitle))]):i("div",{staticClass:"play-title"},[t._v("재생을 눌러주세요.")])]),i("div",{staticClass:"btn-wrap"},[t.isPlay?i("img",{attrs:{src:s(2597)},on:{click:t.pause}}):i("img",{attrs:{src:s(9251)},on:{click:t.play}}),i("img",{attrs:{src:s(1942)},on:{click:t.change}})])],1),i("div",{staticClass:"playList-wrap"},[Object.keys(t.playList).length?t._e():i("div",{staticClass:"not-set-sing"},[t._v("추가된 노래가 없습니다!")]),t._l(t.playList,(function(e,a,n){return i("div",{key:`play-${n}`,staticClass:"playList-item",class:{nowPlaying:t.getNowPlay(e.link)}},[i("div",{staticClass:"info-wrap",on:{click:function(i){return t.onClickChange(e.link)}}},[i("div",{staticClass:"name"},[t._v(t._s(t.getTitle(a)))]),i("div",{staticClass:"link"},[t._v(t._s(e.link))])]),i("div",{staticClass:"control-wrap"},[t.getNowPlay(e.link)&&t.isPlay?i("div",{staticClass:"btn",on:{click:t.pause}},[i("img",{attrs:{src:s(1118)}})]):i("div",{staticClass:"btn",on:{click:function(i){return t.deleteItem(a)}}},[i("div",{staticClass:"delete"},[t._v("-")])])])])}))],2)])},p=[],h=(s(7658),s(7795)),y=s(7130),g={apiKey:"AIzaSyAILBlIMN8P3NiV5r-t0T6ZkQHFVa4XlMY",authDomain:"simple-database-384bb.firebaseapp.com",projectId:"simple-database-384bb",storageBucket:"simple-database-384bb.appspot.com",messagingSenderId:"611877853207",appId:"1:611877853207:web:a3699f8216e01f5db1e452",measurementId:"G-8TNXN0KL05",databaseURL:"https://simple-database-384bb-default-rtdb.firebaseio.com/"},v={name:"HomeView",components:{},data(){return{isPlay:!1,isAddSing:!1,initializeApp:null,musicDataOnWeb:{},playList:{},videoId:"",nowSingTitle:"",nowSingTime:"",addSingTitle:"",addSingLink:""}},computed:{playListId(){const t=[];return Object.keys(this.playList).forEach((i=>{t.push(this.getCode(this.playList[i].link))})),t}},watch:{videoId(){this.fetchList()}},methods:{ready(t){this.setPlayStatusForDatabase(!1),this.player=t.target},playing(t){this.setPlayStatusForDatabase(!0);const i=this.player.getVideoData();this.nowSingTitle=i.title,this.setPlayNameForDatabase(),console.log("@@@@@@@@@@@@",t),console.log("노래가 재생됩니다.\n",this.nowSingTitle)},change(){this.setPlayStatusForDatabase(!0);const t=this.playListId.indexOf(this.videoId,0),i=this.playListId.length<=t+1?0:t+1;this.videoId=this.playListId[i]},play(){this.setPlayStatusForDatabase(!0),this.player.playVideo()},pause(){this.setPlayStatusForDatabase(!1),this.player.pauseVideo()},setPlayStatusForDatabase(t){this.isPlay=t;const i=(0,y.N8)();t?(0,y.t8)((0,y.iH)(i,"playStatus/"),!0):(0,y.t8)((0,y.iH)(i,"playStatus/"),!1),this.fetchList()},async fetchStatus(){const t=(0,y.iH)((0,y.N8)(this.initializeApp));await(0,y.U2)((0,y.iU)(t,"playStatus/")).then((t=>{t.exists()&&(this.isPlay=t.val())})).catch((t=>{console.error(t)}))},getCode(t){let i="";t.includes("youtu.be/")?i=t.split("youtu.be/")[1]:t.includes("youtube.com/watch?v=")?i=t.split("youtube.com/watch?v=")[1]:t.includes("youtube.com/embed/")?i=t.split("youtube.com/embed/")[1]:t.includes("youtube.com/v/")&&(i=t.split("youtube.com/v/")[1]);const s=i.indexOf("&");return-1!==s&&(i=i.substring(0,s)),i},getTitle(t){return t.split("-").slice(1).join("-")},getNowPlay(t){const i=this.getCode(t);return i===this.videoId},setPlayNameForDatabase(){const t=(0,y.N8)();(0,y.t8)((0,y.iH)(t,"playName/"),this.nowSingTitle),(0,y.t8)((0,y.iH)(t,"playCode/"),this.videoId)},onClickChange(t){this.videoId=this.getCode(t)},addSing(){this.fetchUpdate(!0),this.addSingTitle=this.addSingLink="",this.isAddSing=!1},deleteItem(t){this.fetchUpdate(!1,t)},fetchUpdate(t,i){const s=(0,y.N8)(),e=Object.keys(this.playList).length+1;t?(0,y.t8)((0,y.iH)(s,`musicList/${e}-${this.addSingTitle}/`),{link:this.addSingLink}):(0,y.t8)((0,y.iH)(s,`musicList/${i}/`),{}),this.fetchList()},async fetchMusicItem(){const t=(0,y.iH)((0,y.N8)(this.initializeApp));await(0,y.U2)((0,y.iU)(t,"musicList/")).then((t=>{t.exists()?(this.musicDataOnWeb=t.val(),this.playList=this.musicDataOnWeb,console.log("FETCH DATA\n",this.playList)):console.log("No data available")})).catch((t=>{console.error(t)}))},async fetchList(){await this.fetchMusicItem(),await this.fetchStatus()}},async mounted(){this.initializeApp=(0,h.ZF)(g),await this.fetchList(),this.videoId=this.playListId[0],this.setPlayStatusForDatabase(!0)}},m=v,f=(0,l.Z)(m,u,p,!1,null,"3bc530bd",null),b=f.exports,w=function(){var t=this,i=t._self._c;return i("div",{staticClass:"wrap stars"},[i("div",{staticClass:"small"}),i("div",{staticClass:"medium"}),i("div",{staticClass:"big"}),i("div",{staticClass:"controlBar-wrap"},[i("div",{staticClass:"flux"},[t._v("Music Player")]),i("div",{staticClass:"description"},[t._v("유투브 영상 링크를 복사하여 노래추가하기를 통해 노래를 추가해 주세요.")]),i("img",{staticClass:"refresh",attrs:{src:s(8325)},on:{click:t.fetchList}})]),i("div",{staticClass:"add-sing-wrap"},[t.isAddSing?t._e():i("span",{on:{click:function(i){t.isAddSing=!0}}},[t._v("노래 추가하기")]),t.isAddSing?i("div",{staticClass:"add-sing-info"},[i("div",{staticClass:"set-info"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.addSingTitle,expression:"addSingTitle"}],attrs:{placeholder:"제목",type:"text"},domProps:{value:t.addSingTitle},on:{input:function(i){i.target.composing||(t.addSingTitle=i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.addSingLink,expression:"addSingLink"}],staticStyle:{"margin-top":"7px"},attrs:{placeholder:"링크",type:"text"},domProps:{value:t.addSingLink},on:{input:function(i){i.target.composing||(t.addSingLink=i.target.value)}}})]),i("div",{staticClass:"add-btn",on:{click:t.addSing}},[t._v("+")])]):t._e()]),i("div",{staticClass:"playList-wrap"},[Object.keys(t.playList).length?t._e():i("div",{staticClass:"not-set-sing"},[t._v("추가된 노래가 없습니다!")]),t._l(t.playList,(function(e,a,n){return i("div",{key:`play-${n}`,staticClass:"playList-item",class:{nowPlaying:t.getNowPlay(e.link)}},[i("div",{staticClass:"info-wrap"},[i("div",{staticClass:"name"},[t._v(t._s(t.getTitle(a)))]),i("div",{staticClass:"link"},[t._v(t._s(e.link))])]),i("div",{staticClass:"control-wrap"},[t.getNowPlay(e.link)?i("div",{staticClass:"btn"},[i("img",{attrs:{src:s(1118)}})]):i("div",{staticClass:"btn",on:{click:function(i){return t.deleteItem(a)}}},[i("div",{staticClass:"delete"},[t._v("-")])])])])}))],2)])},C=[],S={name:"AddMusic",components:{},data(){return{isPlay:!1,isAddSing:!1,initializeApp:null,musicDataOnWeb:{},playList:{},videoId:"",nowSingTitle:"",nowSingTime:"",addSingTitle:"",addSingLink:""}},computed:{},methods:{getCode(t){let i="";t.includes("youtu.be/")?i=t.split("youtu.be/")[1]:t.includes("youtube.com/watch?v=")?i=t.split("youtube.com/watch?v=")[1]:t.includes("youtube.com/embed/")?i=t.split("youtube.com/embed/")[1]:t.includes("youtube.com/v/")&&(i=t.split("youtube.com/v/")[1]);const s=i.indexOf("&");return-1!==s&&(i=i.substring(0,s)),i},getTitle(t){return t.split("-").slice(1).join("-")},fetchNowPlayCode(){const t=(0,y.iH)((0,y.N8)(this.initializeApp));(0,y.U2)((0,y.iU)(t,"playCode/")).then((t=>{t.exists()&&(this.videoId=t.val())})).catch((t=>{console.error(t)}))},getNowPlay(t){const i=this.getCode(t);return this.videoId===i},addSing(){this.fetchUpdate(!0),this.addSingTitle=this.addSingLink="",this.isAddSing=!1},deleteItem(t){this.fetchUpdate(!1,t)},fetchUpdate(t,i){const s=(0,y.N8)(),e=Object.keys(this.playList).length+1;t?(0,y.t8)((0,y.iH)(s,`musicList/${e}-${this.addSingTitle}/`),{link:this.addSingLink}):(0,y.t8)((0,y.iH)(s,`musicList/${i}/`),{}),this.fetchList()},async fetchMusicItem(){const t=(0,y.iH)((0,y.N8)(this.initializeApp));await(0,y.U2)((0,y.iU)(t,"musicList/")).then((t=>{t.exists()?(this.musicDataOnWeb=t.val(),this.playList=this.musicDataOnWeb,console.log("FETCH DATA\n",this.playList)):console.log("No data available")})).catch((t=>{console.error(t)}))},async fetchList(){await this.fetchMusicItem(),await this.fetchNowPlayCode()}},async mounted(){this.initializeApp=(0,h.ZF)(g),await this.fetchList()}},L=S,k=(0,l.Z)(L,w,C,!1,null,"4f6b5da8",null),P=k.exports;e.ZP.use(r.ZP);const _=[{path:"/",name:"home",component:b},{path:"/addMusic",name:"addmusic",component:P}],I=new r.ZP({routes:_});var T=I,x=s(3822);e.ZP.use(x.ZP);var N=new x.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),O=s(6734);e.ZP.use(O.ZP,{global:!0,componentId:"youtube-media"}),e.ZP.config.productionTip=!1,new e.ZP({router:T,store:N,render:t=>t(d)}).$mount("#app")},1118:function(t,i,s){t.exports=s.p+"img/pause.552e03eb.svg"},2597:function(t,i,s){t.exports=s.p+"img/pause-white.41672f03.png"},9251:function(t,i,s){t.exports=s.p+"img/play-white.7f110df7.png"},8325:function(t,i,s){t.exports=s.p+"img/refresh-w.34c097ac.png"},1942:function(t,i,s){t.exports=s.p+"img/skip-white.3f0eaba6.png"}},i={};function s(e){var a=i[e];if(void 0!==a)return a.exports;var n=i[e]={exports:{}};return t[e](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(i,e,a,n){if(!e){var l=1/0;for(r=0;r<t.length;r++){e=t[r][0],a=t[r][1],n=t[r][2];for(var o=!0,c=0;c<e.length;c++)(!1&n||l>=n)&&Object.keys(s.O).every((function(t){return s.O[t](e[c])}))?e.splice(c--,1):(o=!1,n<l&&(l=n));if(o){t.splice(r--,1);var d=a();void 0!==d&&(i=d)}}return i}n=n||0;for(var r=t.length;r>0&&t[r-1][2]>n;r--)t[r]=t[r-1];t[r]=[e,a,n]}}(),function(){s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,{a:i}),i}}(),function(){s.d=function(t,i){for(var e in i)s.o(i,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){s.p="/youtubeMusicPlayer/"}(),function(){var t={143:0};s.O.j=function(i){return 0===t[i]};var i=function(i,e){var a,n,l=e[0],o=e[1],c=e[2],d=0;if(l.some((function(i){return 0!==t[i]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(c)var r=c(s)}for(i&&i(e);d<l.length;d++)n=l[d],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(r)},e=self["webpackChunkyoutube_music_player"]=self["webpackChunkyoutube_music_player"]||[];e.forEach(i.bind(null,0)),e.push=i.bind(null,e.push.bind(e))}();var e=s.O(void 0,[998],(function(){return s(3610)}));e=s.O(e)})();
//# sourceMappingURL=app.5ab4f3fa.js.map