
<template>
    <Navbar />
        <section class="hero mb-5 bg-color-4">
         <div class="content-hero mb-5 pb-5 container justify-content-between d-flex align-items-center">
             <div class="">
                 <h1 class="title fs-64 pb-5 fw-bold color-primary">
                     Vihara <br>Dharma Surya Putra
                 </h1>
                 <div class="play-button gap-4">
                     <p class="fs-5 fw-semibold">
                      Buddhānubhāvena Sotthi Hotu
                     </p>
                     <p>Selamat datang di media komunikasi resmi Vihara Dharma Surya Putra Temanggung.</p>
                     <div class="mt-5">
                      <a href="" type="button" class="btn border-0 bg-color-6 shadow color-palette-1 rounded-circle"><i class="fa-solid fa-play"></i></a>
                      <a href="" type="button" class="btn ms-5 bg-color-6 border-0 rounded-pill shadow color-palette-1">Gabung bersama kami</a>
                     </div>
                 </div>
             </div>
             <div class="img-hero position-absolute w-50 top-0 end-0">
                 <img class="img-fluid" src="../assets/img/hero.svg" alt="">
             </div>
         </div>
     </section>
     <section class="about">
         <div class="container mt-5 pt-5 pb-5 mb-5">
            <div class="subhead border-bottom-1">
              <h2 class="fw-bold">Tentang Vihara</h2>
            </div>
             <div class="card mb-3 bg-glassmorph border me-auto ms-auto shadow">
                 <div class="row g-0">
                   <div class="col-md-5">
                         <!-- <a href="" class="btn btn-secondary rounded-0 position-absolute top-30 start-50 translate-middle-x">View Details</a> -->
                         <img src="../assets/img/vihara-removebg-preview.png" class="card-img img-fluid rounded-4" alt="...">
                   </div>
                   <div class="col-md-7">
                     <div class="card-body color-primary">
                       <h3 class="card-title fw-bold">Vihara Dharma Surya Putra?</h3>
                       <div class="summary pt-3 pb-3">
                         <div class="summary-header d-flex gap-3">
                             <p class="card-text">Vihara Dharma Surya Putra</p>
                         </div>
                         <p class="card-text"><small class="text-body-secondary">
                              Terletak di Kecamatan Kaloran, Kabupaten Temanggung, Vihara Dharma Surya Putra merupakan tempat ibadah dan pusat spiritual bagi umat Buddha. Vihara ini dikelilingi oleh pemandangan alam yang asri dan tenang, memberikan suasana yang ideal untuk meditasi, refleksi, serta kegiatan keagamaan. </small></p>
                       </div>
                       <div class="summary pt-3 pb-3">
                         <p class="card-text"><small class="text-body-secondary">
                          {{ isExpanded ? description : truncateText(description, 400) }}
                            <button class="btn btn-secondary" @click="isExpanded = !isExpanded">
                              {{ isExpanded ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak' }}
                            </button></small></p>
                       </div>
                     </div>
                   </div>
                 </div>
             </div>
         </div>
     </section>
     <section class="mt-5 pt-5 pb-5 mb-5">
      <div class="container mt-5 mb-5">
        <div class="subhead border-bottom-1 ms-auto">
            <h2 class="fw-bold text-end">Tentang Vihara</h2>
         </div>
      </div>
         <div class="discuse ">
             <div class="card rounded-0 bg-glassmorph shadow border-0 position-absolute w-50">
                 <div class="row d-flex justify-content-between p-5">
                     <div class="mt-2 mb-2">
                         <h3 class="card-title fw-bold">
                             Acara
                         </h3>
                     </div>
                     <div class="mt-2 mb-2">
                         <p class="card-text color-palette-3">
                           Mari ajak teman-teman dan keluarga untuk mengikuti acara-acara di Vihara Dharmma Surya Putra setiap bulannya
                         </p>
                     </div>
                     <div class="mt-2 mb-2">
                       <a href="" class="btn btn-work">Lihat Acara</a>
                     </div>
                 </div>
             </div>
             <div class="img-discuse">
               <img src="../assets/img/vihara6-5cd8a03e3ba7f76c1156ad77.jpg" alt="" class="img-fluid float-end">
           </div>
         </div>
     </section>
    <!-- Client 2 - Bootstrap Brain Component -->
 <section class="py-3 py-md-5 py-xl-8">
   <div class="container">
     <div class="row justify-content-md-center">
       <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
         <h2 class="fs-6 text-secondary mb-2 text-uppercase text-center">Our Customers </h2>
         <h2 class="mb-4 display-5 text-center">are our biggest fans</h2>
         <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle">
       </div>
     </div>
   </div>
   <div class="container rounded-pill marquee-container overflow-hidden">
     <div class="row marquee-content gy-4">
       <div class="marquee-item col-6 col-md-4 col-xl-3 text-center">
         <div class="">
           <img class="img-fluid rounded-pill" src="./assets/img/customer-img/cbn.svg" alt="">
         </div>
       </div>
       <div class="marquee-item col-6 col-md-4 col-xl-3 text-center">
         <div class="">
           <img class="img-fluid"  src="./assets/img/customer-img/ciputra.svg" alt="">
         </div>
       </div>
       <div class="marquee-item col-6 col-md-4 col-xl-3 text-center">
         <div class="">
           <img class="img-fluid" src="./assets/img/customer-img/hubble.svg" alt="">
         </div>
       </div>
       <div class="marquee-item col-6 col-md-4 col-xl-3 text-center">
         <div class="">
           <img class="img-fluid" src="./assets/img/customer-img/img 1.svg" alt="">
         </div>
       </div>
     </div>
   </div>
   <div class="container rounded-pill marquee-container overflow-hidden">
     <div class="row marquee-content gy-4">
       <div class="marquee-item col-6 col-md-4 col-xl-3 text-center">
         <div class="">
           <img class="img-fluid" src="./assets/img/customer-img/img 2.svg" alt="">
         </div>
       </div>
       <div class="marquee-item col-6 col-md-4 col-xl-3 text-center">
         <div class="">
           <img class="img-fluid"  src="./assets/img/customer-img/img 3.svg" alt="">
         </div>
       </div>
       <div class="marquee-item col-6 col-md-4 col-xl-3 text-center">
         <div class="">
           <img class="img-fluid" src="./assets/img/customer-img/img 4.svg" alt="">
         </div>
       </div>
       <div class="marquee-item col-6 col-md-4 col-xl-3 text-center">
         <div class="">
           <img class="img-fluid" src="./assets/img/customer-img/img 5.svg" alt="">
         </div>
       </div>
     </div>
   </div>
   <div class="container rounded-pill marquee-container overflow-hidden">
     <div class="row marquee-content gy-4">
       <div class="marquee-item col-6 col-md-4 col-xl-3 text-center">
         <div class="">
           <img class="img-fluid" src="./assets/img/customer-img/img 6.svg" alt="">
         </div>
       </div>
       <div class="marquee-item col-6 col-md-4 col-xl-3 text-center">
         <div class="">
           <img class="img-fluid"  src="./assets/img/customer-img/income.svg" alt="">
         </div>
       </div>
       <div class="marquee-item col-6 col-md-4 col-xl-3 text-center">
         <div class="">
           <img class="img-fluid" src="./assets/img/customer-img/jawa pos.svg" alt="">
         </div>
       </div>
       <div class="marquee-item col-6 col-md-4 col-xl-3 text-center">
         <div class="">
           <img class="img-fluid" src="./assets/img/customer-img/lazada.svg" alt="">
         </div>
       </div>
     </div>
   </div>
 </section>
 <section>
   <div class="container mt-5 mb-5">
     <div class="our-teams text-center">
       <h3>Pengurus</h3>
       <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle">
     </div>
   </div>
   <div class="container-fluid mt-5 mb-5">
     <div id="carouselExampleDark" class="carousel carousel-dark slide">
       <div class="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class=" active" aria-current="true" aria-label="Slide 1"></button>
         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
       </div>
       <div class="container carousel-inner mb-5">
         <div class="carousel-item active" data-bs-interval="10000">
           <div class="justify-content-between align-items-center text-center row">
             <div class="col-md-4">
               <img src="../assets/img/teams/img11.svg" class="img-fluid rounded-circle w-50" alt="...">
               <div class="pt-4">
                 <h5 class="fw-semibold">Elisabeth BE</h5>
                 <p>COO</p>
               </div>
             </div>
             <div class="col-md-4">
               <img src="../assets/img/teams/img10.svg" class="img-fluid rounded-circle" alt="...">
               <div class="pt-4">
                 <h5 class="fw-semibold">Andree Wijaya</h5>
                 <p>CEO/CTO</p>
               </div>
             </div>
             <div class="col-md-4">
               <img src="../assets/img/teams/img12.svg" class="img-fluid rounded-circle w-50" alt="...">
               <div class="pt-4">
                 <h5 class="fw-semibold">Sanjaya Wahono</h5>
                 <p>CFO</p>
               </div>
             </div>
           </div>
         </div>
         <div class="carousel-item active" data-bs-interval="10000">
           <div class="justify-content-between align-items-center text-center row">
             <div class="col-md-4">
               <img src="../assets/img/teams/img11.svg" class="img-fluid rounded-circle w-50" alt="...">
               <div class="pt-4">
                 <h5 class="fw-semibold">Elisabeth BE</h5>
                 <p>COO</p>
               </div>
             </div>
             <div class="col-md-4">
               <img src="../assets/img/teams/img10.svg" class="img-fluid rounded-circle" alt="...">
               <div class="pt-4">
                 <h5 class="fw-semibold">Andree Wijaya</h5>
                 <p>CEO/CTO</p>
               </div>
             </div>
             <div class="col-md-4">
               <img src="../assets/img/teams/img12.svg" class="img-fluid rounded-circle w-50" alt="...">
               <div class="pt-4">
                 <h5 class="fw-semibold">Sanjaya Wahono</h5>
                 <p>CFO</p>
               </div>
             </div>
           </div>
         </div>
       </div>
       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
       </button>
       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
       </button>
     </div>
   </div>
   <div class="container mt-5 mb-5">
     <div class="row justify-content-between align-items-center">
       <div class="side-right col-md-6">
         <h1 class="fw-bold pb-5">Join Our Team</h1>
         <img src="../assets/img/Rectangle 23.svg" alt="img teams" class="img-fluid">

       </div>
       <div class="side-left col-md-6">
         <p class="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quaerat tenetur velit soluta consequatur vel rem facere accusamus beatae exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, exercitationem?</p>
         <button class="btn btn-work rounded-0" href="">Apply</button>
       </div>
     </div>
   </div>
 </section>
 <Footer />
 </template>

 <script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

  export default {
    name: 'Index',
    components: {
      Navbar,
      Footer,
    },
    data() {
    return {
      description: 'Sebagai salah satu vihara yang berperan penting di wilayah Temanggung, Vihara Dharma Surya Putra menjadi destinasi bagi mereka yang ingin mendekatkan diri kepada ajaran Buddha dan memperdalam praktik spiritual. Selain itu, vihara ini juga menjadi pusat kegiatan sosial, seperti pembinaan umat, pengajaran Dhamma, dan upacara keagamaan.Vihara ini didirikan dengan tujuan untuk melestarikan dan menyebarkan nilai-nilai kebajikan, cinta kasih, dan kedamaian dalam masyarakat. Baik bagi umat Buddha maupun pengunjung lainnya, Vihara Dharma Surya Putra terbuka untuk semua yang mencari ketenangan batin dan bimbingan spiritual.Dengan lokasinya di Kabupaten Temanggung yang sejuk dan damai, Vihara Dharma Surya Putra menawarkan pengalaman spiritual yang mendalam di tengah-tengah alam yang menenangkan. Bagi Anda yang sedang berziarah atau sekadar berkunjung, vihara ini memberikan keteduhan dan kedamaian hati.',
      isExpanded: false
    };
  },
  methods: {
    truncateText(text, length) {
      return text.length > length ? text.substring(0, length) + '...' : text;
    }
  }
  }
</script>

