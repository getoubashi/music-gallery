export default class Top {
  constructor() {
    this.logo = `
      <p>Ge</p>
      <p>tou</p>
      <p>bashi</p>
     `;
  }

  /** top を生成 */
  createTop() {
    const top = document.getElementById('top');
    top.insertAdjacentHTML('afterbegin', `
    <div class="contents-body">
      <div class="logo">
        ${this.logo}
      </div>
    </div>
  `);
  }
}
