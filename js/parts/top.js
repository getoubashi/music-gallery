(() => {
  const logo = `
    <p>Ge</p>
    <p>tou</p>
    <p>bashi</p>
  `;

  const top = document.getElementById('top');
  top.insertAdjacentHTML('afterbegin', `
    <div class="contents-body">
      <a href="#music">
        <h1 class="logo title has-text-white">
          ${logo}
        </h1>
      </a>
    </div>
  `);
})();
