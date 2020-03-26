export default class Header {
  constructor() {
    this.item1 = 'TOP';
    this.item2 = 'MUSIC';
    this.item3 = 'ABOUT';
    this.item4 = 'LIVE';
    this.menu = `
      <ul id="menu">
        <li>
          <a class="menu-item" href="#top">
            <span>${this.item1}</span>
          </a>
        </li>
        <li>
          <a class="menu-item" href="#music">
            <span>${this.item2}</span>
          </a>
        </li>
        <li>
          <a class="menu-item" href="#about">
            <span>${this.item3}</span>
          </a>
        </li>
        <li>
          <a class="menu-item" href="#live">
            <span>${this.item4}</span>
          </a>
        </li>
      </ul>
    `;
  }

  /** header を生成 */
  createHeader() {
    const header = document.getElementById('header');
    header.insertAdjacentHTML('afterbegin', `
    <nav id="menu_content">
      <div class="menu_bg"></div>
      <div class="menu_wrapper">
        <div class="inner">
          ${this.menu}
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
  }
}
