(() => {
  const live = document.getElementById('live');
  live.insertAdjacentHTML('afterbegin', `
    <div class="contents-body" id="live-body">
      <div class="contents-container">
        <h1 class="section-title">LIVE</h1>
        <div id="live-contents">
          <div class="row">
            <div class="cell cell01">日時</div>
            <div class="cell cell02">2020年5月31日</div>
          </div>
          <div class="row">
            <div class="cell cell01">会場</div>
            <div class="cell cell02">池袋RED-Zone</div>
          </div>
          <div class="row">
            <div class="cell cell01">時間</div>
            <div class="cell cell02">OPEN 18:00 / START 18:30</div>
          </div>
          <div class="row">
            <div class="cell cell01">日時</div>
            <div class="cell cell02">2020年5月31日</div>
          </div>
          <div class="row">
            <div class="cell cell01">チケット</div>
            <div class="cell cell02">¥500（ドリンク別/税込み）</div>
          </div>
        </div>
      </div>
    </div>
  `);
})();
