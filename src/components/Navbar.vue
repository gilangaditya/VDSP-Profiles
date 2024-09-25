<template>
    <section class="header container">
      <nav id="main-nav" ref="navbar" class="navbar navbar-expand-lg p-0 fixed-top container mt-2" 
       :class="{'bg-glassmorph': scrolled, 'bg-color-4': !scrolled}">
             <div class="container text-center ">
               <a class="navbar-brand d-flex justify-content-start gap-3 w-25" href="#">
                 <img src="../assets/img/logo/logo.png" alt="" class="img-fluid w-25">
                 <p class="fw-bold mt-auto mb-auto color-primary">VDSP</p>
               </a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse end" id="navbarSupportedContent">
                 <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="#">Beranda</a>
                   </li>
                   <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Inspirasi
                     </a>
                     <ul class="dropdown-menu bg-glassmorph">
                       <li><a class="dropdown-item" href="#">Inspirasi</a></li>
                       <li><a class="dropdown-item" href="#">Ceramah</a></li>
                     </ul>
                   </li>
                   <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Kegiatan
                     </a>
                     <ul class="dropdown-menu bg-glassmorph">
                       <li><a class="dropdown-item" href="#">Action</a></li>
                       <li><a class="dropdown-item" href="#">Another action</a></li>
                       <li><a class="dropdown-item" href="#">Something else here</a></li>
                     </ul>
                   </li> 
                   <li class="nav-item">
                     <a class="nav-link" href="#">Tentang Vihara</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" href="#">Hubungi Kami</a>
                   </li>
                 </ul>
                 <form class="d-flex" role="search">
                   <!-- <input class="form-control me-2" type="search" type="hidden" placeholder="Search" aria-label="Search"> -->
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