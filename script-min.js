document.getElementById("header").insertAdjacentHTML("afterbegin",'\n    <nav id="menu_content">\n      <div class="menu_bg"></div>\n      <div class="menu_wrapper">\n        <div class="inner">\n          \n  <ul id="menu">\n    <li>\n      <a class="menu-item" href="#top">\n        <span>TOP</span>\n      </a>\n    </li>\n    <li>\n      <a class="menu-item" href="#music">\n        <span>MUSIC</span>\n      </a>\n    </li>\n    <li>\n      <a class="menu-item" href="#about">\n        <span>ABOUT</span>\n      </a>\n    </li>\n    <li>\n      <a class="menu-item" href="#live">\n        <span>LIVE</span>\n      </a>\n    </li>\n  </ul>\n  \n        </div>\n      </div>\n    </nav>\n    <div id="menu_btn">\n      <div class="wrap">\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n    </div>\n  '),document.getElementById("top").insertAdjacentHTML("afterbegin",'\n    <div class="contents-body">\n      <div class="logo">\n        \n    <p>Ge</p>\n    <p>tou</p>\n    <p>bashi</p>\n  \n      </div>\n    </div>\n  '),document.getElementById("music").insertAdjacentHTML("afterbegin",'\n    <div class="contents-body" id="music-body">\n      <div class="contents-container">\n        <h1 class="section-title">MUSIC</h1>\n        <div id="music-contents">\n          <iframe id="sc-widget" class="track" width="500" height="400" scrolling="no" frameborder="no" allow="autoplay"\n            src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/playlists/971590474&color=%23b59d9f&auto_play=false&buying=false&liking=false&download=true&sharing=false&show_artwork=false&show_comments=false&show_playcount=false&show_user=false&show_reposts=false&hide_related=false&show_teaser=false&visual=false">\n          </iframe>\n          <i class="material-icons is-pulled-left" id="skip-previous">skip_previous</i>\n          <i class="material-icons is-pulled-left" id="skip-next">skip_next</i>\n        </div>\n      </div>\n    </div>\n  '),document.getElementById("about").insertAdjacentHTML("afterbegin",'\n    <div class="contents-body" id="about-body">\n      <div class="contents-container">\n        <h1 class="section-title">ABOUT</h1>\n        <div class="section-contents">\n          \n    <p>オーケストレーターとして活躍していた作家に師事し、映画音楽の道に進む。</p>\n    <p>感情や情景が浮かびあがるような、世界観をダイレクトに表現した楽曲を製作。</p>\n  \n        </div>\n      </div>\n    </div>\n  '),(()=>{const n="日付",e="2020年5月31日",t="会場",s="池袋RED-Zone",i="時間",l="OPEN 18:00 / START 18:30",a="チケット",d="¥500（ドリンク別/税込み）";document.getElementById("live").insertAdjacentHTML("afterbegin",`\n    <div class="contents-body" id="live-body">\n      <div class="contents-container">\n        <h1 class="section-title">LIVE</h1>\n        <div class="section-contents">\n          <div class="row">\n            <div class="cell">${n}</div>\n            <div class="cell">${e}</div>\n          </div>\n          <div class="row">\n            <div class="cell">${t}</div>\n            <div class="cell">${s}</div>\n          </div>\n          <div class="row">\n            <div class="cell">${i}</div>\n            <div class="cell">${l}</div>\n          </div>\n          <div class="row">\n            <div class="cell">${a}</div>\n            <div class="cell">${d}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  `)})();const trackList={"幻想大陸":"01","大海原への旅立ち":"02","Fashionably Late":"03","別れ":"04","能力者":"05","旅の終わり":"06","Huge Beast":"07","Forward!":"08"},onScrollChangeBackGroundImage=()=>{let n=!0;window.addEventListener("scroll",()=>{n&&(n=!1,window.setTimeout(function(){const e=document.getElementById("music"),t=e.getClientRects()[0],s=t.bottom/t.height;e.style.opacity=s>1?2-s:s;const i=document.getElementById("top"),l=i.getClientRects()[0],a=document.getElementById("about").getClientRects()[0];i.style.opacity=a.bottom/a.height<=2?l.bottom/l.height:"";const d=document.getElementById("live"),c=d.getClientRects()[0],o=c.bottom/c.height;s<0?(d.style.visibility="visible",d.style.opacity=c.bottom<c.height?1:o>1?2-o:o):(d.style.visibility="hidden",d.style.opacity=""),n=!0},200))})},SCWidgetController=()=>{const n=SC.Widget(document.getElementById("sc-widget"));n.bind(SC.Widget.Events.READY,()=>{console.log("ロード完了🙆‍♂️"),n.setVolume(50),document.getElementById("skip-previous").addEventListener("click",()=>{n.seekTo(0),n.prev(),n.pause()}),document.getElementById("skip-next").addEventListener("click",()=>{n.seekTo(0),n.next(),n.pause()})}),n.bind(SC.Widget.Events.FINISH,()=>{console.log("終了🙇")}),n.bind(SC.Widget.Events.PLAY,()=>{n.getCurrentSound(n=>{const e=document.getElementById("music");for(const n of e.children)"STYLE"===n.tagName&&e.removeChild(n);e.insertAdjacentHTML("afterbegin",`\n      <style>\n        #music:before {\n          background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('images/trackImage/${trackList[n.title]}.jpg');\n        }\n      </style>\n    `)})})},setNavbarEvent=()=>{const n=(n,e)=>{n.classList.toggle("active"),e.classList.toggle("active")},e=document.getElementById("menu_btn"),t=document.getElementById("menu_content");e.addEventListener("click",()=>n(e,t));for(const s of document.getElementsByClassName("menu-item"))s.addEventListener("click",()=>n(e,t))};setNavbarEvent(),onScrollChangeBackGroundImage(),SCWidgetController();