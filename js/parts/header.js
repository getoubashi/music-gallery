(() => {
  const item1 = 'TOP';
  const item2 = 'MUSIC';
  const item3 = 'ABOUT';
  const item4 = 'LIVE';

  const menu = `
  <ul id="menu">
    <li>
      <a class="menu-item" href="#top">
        <span>${item1}</span>
      </a>
    </li>
    <li>
      <a class="menu-item" href="#music">
        <span>${item2}</span>
      </a>
    </li>
    <li>
      <a class="menu-item" href="#about">
        <span>${item3}</span>
      </a>
    </li>
    <li>
      <a class="menu-item" href="#live">
        <span>${item4}</span>
      </a>
    </li>
  </ul>
  `;

  const header = document.getElementById('header');
  header.insertAdjacentHTML('afterbegin', `
    <nav id="menu_content">
      <div class="menu_bg"></div>
      <div class="menu_wrapper">
        <div class="inner">
          ${menu}
        </div>
      </div>
    </nav>
    <div id="menu_btn">
      <div class="wrap">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `);
})();
