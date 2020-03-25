(() => {
  const logo = `
    <p>Ge</p>
    <p>tou</p>
    <p>bashi</p>
  `;

  const top = document.getElementById('top');
  top.insertAdjacentHTML('afterbegin', `
    <div class="contents-body">
      <div class="logo">
        ${logo}
      </div>
    </div>
  `);
})();
