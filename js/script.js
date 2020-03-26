/**
* トラックリスト
*/
const trackList = {
  '幻想大陸': '01',
  '大海原への旅立ち': '02',
  'Fashionably Late': '03',
  '別れ': '04',
  '能力者': '05',
  '旅の終わり': '06',
  'Huge Beast': '07',
  'Forward!': '08'
}

/**
* スクロール位置で背景を変える
*/
const onScrollChangeBackGroundImage = () => {
  let scrolled = true;

  window.addEventListener('scroll', () => {
    if (scrolled) {
      scrolled = false;

      window.setTimeout(function () {
        const music = document.getElementById('music');
        const musicRect = music.getClientRects()[0];
        const musicRectValue = musicRect.bottom / musicRect.height;

        if (musicRectValue > 1) {
          music.style.opacity = 2 - musicRectValue;
        } else {
          music.style.opacity = musicRectValue;
        }

        const top = document.getElementById('top');
        const topRect = top.getClientRects()[0];
        const aboutRect = document.getElementById('about').getClientRects()[0];
        top.style.opacity = aboutRect.bottom / aboutRect.height <= 2 ? topRect.bottom / topRect.height : '';

        const live = document.getElementById('live');
        const liveRect = live.getClientRects()[0];
        const liveRectValue = liveRect.bottom / liveRect.height;

        if (musicRectValue < 0) {
          live.style.visibility = 'visible';
          live.style.opacity =
            liveRect.bottom < liveRect.height ? 1 :
              liveRectValue > 1 ? 2 - liveRectValue :
                liveRectValue;
        } else {
          live.style.visibility = 'hidden';
          live.style.opacity = '';
        }

        scrolled = true;
      }, 200);
    }
  });
}

/**
* SoundCloudWidget の操作
*/
const SCWidgetController = () => {
  const widget = SC.Widget(document.getElementById('sc-widget'));

  widget.bind(SC.Widget.Events.READY, () => {
    console.log('ロード完了🙆‍♂️');
    widget.setVolume(50);

    document.getElementById('skip-previous').addEventListener('click', () => {
      widget.seekTo(0);
      widget.prev();
    });

    document.getElementById('skip-next').addEventListener('click', () => {
      widget.seekTo(0);
      widget.next();
    });
  });

  widget.bind(SC.Widget.Events.FINISH, () => {
    console.log('終了🙇');
  });

  widget.bind(SC.Widget.Events.PLAY, () => {
    widget.getCurrentSound((callback) => {
      const music = document.getElementById('music');

      for (const child of music.children) if (child.tagName === 'STYLE') music.removeChild(child);

      music.insertAdjacentHTML('afterbegin', `
      <style>
        #music:before {
          background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('images/trackImage/${trackList[callback.title]}.jpg');
        }
      </style>
    `);
    });
  });
}

/**
* ナビバーのイベントを設定する
*/
const setNavbarEvent = () => {
  const switchActive = (menuBtn, menuContent) => {
    menuBtn.classList.toggle('active');
    menuContent.classList.toggle('active');
  }

  const menuBtn = document.getElementById('menu_btn');
  const menuContent = document.getElementById('menu_content');
  menuBtn.addEventListener('click', () => switchActive(menuBtn, menuContent));

  for (const menuItem of document.getElementsByClassName('menu-item')) {
    menuItem.addEventListener('click', () => switchActive(menuBtn, menuContent));
  }
}

setNavbarEvent();
onScrollChangeBackGroundImage();
SCWidgetController();
