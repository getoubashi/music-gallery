(() => {
  const about = document.getElementById('about');
  about.insertAdjacentHTML('afterbegin', `
    <div class="contents-body" id="about-body">
      <div class="contents-container">
        <h1 class="section-title">ABOUT</h1>
        <div id="about-contents">
          <p>オーケストレーターとして活躍していた作家に師事し、映画音楽の道に進む。</p>
          <p>感情や情景が浮かびあがる、世界観をダイレクトに表現した楽曲を製作。</p>
        </div>
      </div>
    </div>
  `);
})();
