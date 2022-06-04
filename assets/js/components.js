class Header extends HTMLElement  {
    constructor() {
      super();
    }

  connectedCallback() {
    this.render();
  }    
  render(){
    this.innerHTML = `
<header id="header" class="fixed-top header-inner-pages">
<div class="container-fluid">

  <div class="row justify-content-center">
    <div class="col-xl-9 d-flex align-items-center">
      <h1 class="logo mr-auto"><a href="index.html">IDEJA?</a></h1>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li><a href="index.html">Naslovnica</a></li>
          <li><a href="stvaratelji.html">Stvaratelji</a></li>               
          <li><a href="kupci.html">Kupci</a></li>
          <li class="drop-down"><a href="partneri.html">Ulagači i partneri</a>
            <ul>
              <li><a href="partneri.html#ulagaci">Ulagači</a></li>
              <li><a href="partneri.html#partneri">Partneri</a></li>
            </ul>
          </li>
          <li class="drop-down"><a href="#">Općenito</a>
            <ul>
              <li><a href="onama.html">O nama</a></li>
              <li><a href="sigurnost.html">Sigurnost</a></li>
              <li><a href="#footer">Kontakt</a></li>
            </ul>
          </li>

        </ul>
      </nav><!-- .nav-menu -->

      <a href="prijava.html" class="get-started-btn scrollto">Prijava</a>
    </div>
  </div>

</div>
</header>
`;
  }
}

customElements.define('header-component', Header);


class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Ideja?</h3>
            <p>
              Radmile Matejčić 2, Rijeka 51000<br>
              <strong>Telefon:</strong> +385 9156 7345<br>
              <strong>Email:</strong> ideja?@gmail.com<br>
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links"><br><br><br>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="onama.html">O nama</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="sigurnost.html">Sigurnost</a></li>

            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links"><br><br><br>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html">Naslovnica</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="LOGO2.html">Logo</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter"><br><br><br>
            <a href="prijava.html" class="get-started-btn scrollto">Prijava</a>
          </div>

        </div>
      </div>
    </div>
  </footer>
  `
    ;
  }
}

customElements.define('footer-component', Footer);