class Hero extends HTMLElement  {
    constructor() {
      super();
    }

    get prvi(){
        return this.getAttribute("prvi-txt");
      }
    set prvi(val){
      this.setAttribute("prvi-txt", val);
    }
    get drugi(){
      return this.getAttribute("drugi-txt");
    }
    set drugi(val){
      this.setAttribute("drugi-txt", val);
    }
    get videic(){
      return this.getAttribute("video");
    }
    set videic(val){
      this.setAttribute("video", val);
    }

    
    connectedCallback() {
      this.render();
    }
      
      render(){
        this.innerHTML = `
<!-- Hero -->
<section id="hero" class="d-flex align-items-center">

    <div class="container-fluid" >
      <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>${this.prvi}</h1>
          <h2>${this.drugi}</h2>
          <div><a href="prijava.html" class="btn-get-started scrollto">Prijava</a><br><br><br></div>
        </div>
        <div class="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" >
          <video controls><source src=${this.videic} type="video/mp4"></video>
        </div>
      </div>
    </div>

</section>
<!-- End Hero -->
`;
 }
}

class TextSlika extends HTMLElement  {
    constructor() {
      super();
    }

    get naslov(){
        return this.getAttribute("naslov");
      }
    set naslov(val){
      this.setAttribute("naslov", val);
    }
    get sadrzaj(){
        return this.getAttribute("sadrzaj");
      }
    set sadrzaj(val){
      this.setAttribute("sadrzaj", val);
    }
    get slika(){
        return this.getAttribute("slika");
    }
    set slika(val){
        this.setAttribute("slika", val);
    }
    get alter(){
        return this.getAttribute("alter");
    }
    set alter(val){
        this.setAttribute("alter", val);
    }
    get link(){
        return this.getAttribute("link");
    }
    set link(val){
        this.setAttribute("link", val);
    }

    connectedCallback() {
      this.render();
    }    
    render(){
      this.innerHTML = `
<section id="about" class="about">
    <div class="container">

      <div class="row">
        <div class="col-lg-6 order-1 order-lg-2 content">
          <img src=${this.slika} class="center"  alt=${this.alter}>
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" >
          <h3>${this.naslov}</h3>
          <p class="font-italic">
            ${this.sadrzaj}
          </p>

          <a href=${this.link} class="read-more">Saznaj više <i class="icofont-long-arrow-right"></i></a>
        </div>
      </div>

    </div>
</section>
`;
 }
}

class SlikaText extends HTMLElement  {
    constructor() {
      super();
    }

    get naslov(){
        return this.getAttribute("naslov");
      }
    set naslov(val){
      this.setAttribute("naslov", val);
    }
    get sadrzaj(){
        return this.getAttribute("sadrzaj");
      }
    set sadrzaj(val){
      this.setAttribute("sadrzaj", val);
    }
    get slika(){
        return this.getAttribute("slika");
    }
    set slika(val){
        this.setAttribute("slika", val);
    }
    get alter(){
        return this.getAttribute("alter");
    }
    set alter(val){
        this.setAttribute("alter", val);
    }
    get link(){
        return this.getAttribute("link");
    }
    set link(val){
        this.setAttribute("link", val);
    }
  
  connectedCallback() {
    this.render();
  }    
  render(){
    this.innerHTML =`
    <section id="about" class="about">
        <div class="container">
    
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2 content" >
            
              <h3>${this.naslov}</h3>
              <p class="font-italic">
                ${this.sadrzaj}
              </p>
             
              <a href=${this.link} class="read-more">Saznaj više <i class="icofont-long-arrow-right"></i></a>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
              <img src=${this.slika} class="center" alt=${this.alter}>
            </div>
          </div>
        </div>
    </section>
    `
  }
}

class Breadcrumbs extends HTMLElement  {
    constructor() {
      super();
    }

    get naslov(){
        return this.getAttribute("naslov");
      }
    set naslov(val){
      this.setAttribute("naslov", val);
    }
  
  connectedCallback() {
    this.render();
  }    
  render(){
    this.innerHTML =`
<section id ="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <div class="d-flex justify-content-between align-items-center">
            <h2>${this.naslov}</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>${this.naslov}</li>
            </ol>
          </div>
  
        </div>
</section>`
  }
}

class TrakaOpis extends HTMLElement  {
    constructor() {
      super();
    }

    get sadrzaj(){
        return this.getAttribute("sadrzaj");
      }
    set sadrzaj(val){
      this.setAttribute("sadrzaj", sadrzaj);
    }
  
  connectedCallback() {
    this.render();
  }    
  render(){
    this.innerHTML =`
    <section id="faq" class="faq">
    <div class="container">

      <div class="section-title">
        <p>${this.sadrzaj}</p> 
      </div>

    </div>
</section>
   `
  }
}

class 
<section id="features" class="features">
    <div class="container" >
     <div class="row">
       <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
         <div class="icon-box mt-5" >
           <i class="bx bx-images"></i>
           <h4>Jedinstvenost</h4>
           <p>Kupnjom originalne ideje postaješ prva osoba na svijetu koja će realizirati tu ideju.</p>
         </div>  <br><br>
         <div class="icon-box mt-5 mt-lg-0" >
           <i class="bx bx-receipt"></i>
           <h4>Izbor</h4>
           <p>Među raznim kategorijama koje nudimo velika je vjerojatnost da ćeš pronaći savršeni projekt.</p>
         </div>
         <div class="icon-box mt-5" >
           <i class="bx bx-shield"></i>
           <h4>Osiguranje</h4>
           <p>Ako odabrana objava ima veliki broj lajkova i pozitivnih komentara, velika je vjerojatnost da će njena provedba biti uspješna.</p>
         </div>
       </div>
       <div class="image col-lg-6 order-1 order-lg-2 " >
         <img src="assets/img/features.svg" alt="" class="img-fluid">
       </div>
     </div>

   </div>
 </section>

customElements.define('hero-component', Hero);
customElements.define('text-slika', TextSlika);
customElements.define('slika-text', SlikaText);
customElements.define('breadcrumbs-component', Breadcrumbs);
customElements.define('traka_opis', TrakaOpis);