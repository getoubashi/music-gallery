(() => {
  const liveInfomation = {
    DATE: '日付',
    dateAndTimeDetail: '2020年5月31日',
    VENUE: '会場',
    venueDetail: '池袋RED-Zone',
    TIME: '時間',
    timeDetail: 'OPEN 18:00 / START 18:30',
    TICKET: 'チケット',
    ticketDetail: '¥500（ドリンク別/税込み）',
  }

  const live = document.getElementById('live');
  live.insertAdjacentHTML('afterbegin', `
    <div class="contents-body" id="live-body">
      <div class="contents-container">
        <h1 class="section-title">LIVE</h1>
        <div class="section-contents">
          <div class="row">
            <div class="cell">${liveInfomation.DATE}</div>
            <div class="cell">${liveInfomation.dateAndTimeDetail}</div>
          </div>
          <div class="row">
            <div class="cell">${liveInfomation.VENUE}</div>
            <div class="cell">${liveInfomation.venueDetail}</div>
          </div>
          <div class="row">
            <div class="cell">${liveInfomation.TIME}</div>
            <div class="cell">${liveInfomation.timeDetail}</div>
          </div>
          <div class="row">
            <div class="cell">${liveInfomation.TICKET}</div>
            <div class="cell">${liveInfomation.ticketDetail}</div>
          </div>
        </div>
      </div>
    </div>
  `);
})();
