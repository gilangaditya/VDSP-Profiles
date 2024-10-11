<template>
  <section class="header container">
    <nav id="main-nav" ref="navbar" class="navbar navbar-expand-lg p-0 fixed-top container mt-2" 
         :class="{'bg-glassmorph': scrolled, 'bg-color-4': !scrolled}">
      <div class="container text-center ">
        <a class="navbar-brand d-flex justify-content-start gap-3 w-25" to="#">
          <img src="../assets/img/logo/logo.png" alt="" class="img-fluid w-25">
          <p class="fw-bold mt-auto mb-auto color-palette-4">VDSP</p>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse end" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/" exact-active-class="active">Beranda</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inspirasi
              </router-link>
              <ul class="dropdown-menu bg-glassmorph">
                <li><router-link class="dropdown-item" to="#">Inspirasi</router-link></li>
                <li><router-link class="dropdown-item" to="#">Ceramah</router-link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" to="#" active-class="active"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Kegiatan
              </router-link>
              <ul class="dropdown-menu bg-glassmorph">
                <li><router-link class="dropdown-item" to="/Activities" active-class="active" exact-active-class="active">Kegiatan Rutin</router-link></li>
                <li><router-link class="dropdown-item" to="/Sekolah-minggu">Sekolah Minggu</router-link></li>
                <li><router-link class="dropdown-item" to="#">Pujabhakti</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Visit" exact-active-class="active">Tentang Vihara</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact-active-class="active">Hubungi Kami</router-link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <button class="btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </div>
    </nav>
  </section>
</template>



<script>
export default {
  name: 'Navbar',

  data() {
    return {
      scrolled: false
    };
  },
  
  mounted() {
    // pengecekan ref setelah komponen selesai di-mount
    this.$nextTick(() => {
      window.addEventListener("scroll", this.handleScroll);
    });
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const navbar = this.$refs.navbar;
      // Pengecekan jika navbar sudah terdefinisi
      if (navbar) {
        this.scrolled = window.scrollY > (navbar.offsetHeight + 10);
      }
    }
  }
}
</script>

<style scoped>
  .bg-glassmorph{
    background: rgba(255, 255, 255, 0.2) !important;
    border-radius: 16px !important;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
    backdrop-filter: blur(5px) !important;
    -webkit-backdrop-filter: blur(5px) !important;
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
  }
/*   
  .bg-color-4 {
    background-color: # !important;
  } */
</style>