<template>
  <header class="diva">
    <router-link to="/">
      <div class="d1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjFTO5P1yacBRXCLscjrh3Z3t3GAIH7B1UwsG4Ls0rifGayh_m_RDjdVY2ZtQNs0kBcI&usqp=CAU"
          alt=""
          class="px-5 rounded-circle my-1 my-2"
        />
      </div>
    </router-link>
    <div class="d2">
      <div data-mdb-toggle="modal" data-mdb-target="#exampleModal">
        <i
          class="fa-regular fa-user fs-5 text-primary"
          style="color: #838891"
        ></i>
        <p class="px-3 my-4 text-none" style="color: var(--mdb-body-color)">
          Kirish
        </p>
      </div>

      <router-link to="/korzinka">
        <div>
          <i
            class="fa-solid fa-cart-shopping text-seccess fs-5 text-primary"
            style="color: #838891"
          ></i>
          <button
            class="btn btn-primary btn-floating fa-bounce mb-4 mx-2 counter2"
            style="
              border-radius: 50px;
              font-size: 0.7rem;
              width: 20px;
              height: 20px;
            "
          >
            {{ countet?.length }}
          </button>
          <p class="px-3 my-4" style="color: var(--mdb-body-color)">Savat</p>
        </div>
      </router-link>
      <div>
        <i
          class="fa-regular fa-heart fs-5 text-danger"
          style="color: #838891"
        ></i>
        <p class="px-3 my-4">Saralangan</p>
      </div>
    </div>
  </header>

  <section
    class="Menu d-none border border-start-0 border-end-0 border-bottom-0"
  >
    <router-link to="/">
      <div>
        <a href="#" class="fa-solid fa-house fs-4" style="color: #8c8989"></a>
        <p style="font-size: 0.7rem; position: absolute ; margin-left: -2vh;" > Bosh sahifa</p>

      </div>
    </router-link>
    <router-link to="/search">
      <div>
        <a
          href="#"
          class="fa-solid fa-magnifying-glass fs-4"
          style="color: #8c8989"
        ></a>
        <p style="font-size: 0.7rem; position: absolute ;"> Katalog</p>

      </div>
    </router-link>
    <router-link to="/korzinka">
      <div>
        <a
          href="#"
          class="fa-solid fa-cart-shopping text-seccess fs-4"
          style="color: #8c8989"
        ></a>
        <p style="font-size: 0.7rem; position: absolute ;margin-left: -0.2vh;"> Savat</p>
        <button
          class="btn btn-primary btn-floating fa-bounce counter"
          style=" 
            border-radius: 50px;
            font-size: 0.7rem;
            width: 20px;
            height: 20px;
          "
        >
          {{ countet.length }}
        </button>
      </div>
    </router-link>
    <router-link to="">
    <div>
      <a href="#" class="fa-regular fa-heart fs-4" style="color: #8c8989"></a>
      <p style="font-size: 0.7rem; position: absolute ; margin-left: -2vh;" > Saralangan</p>

    </div>
  </router-link>
    <router-link to="/user">
      <div>
        <a href="#" class="fa-regular fa-user fs-4" style="color: #8c8989"></a>
        <p style="font-size: 0.7rem; position: absolute ; margin-left: -1.3vh;" > Kabinet</p>

      </div>
    </router-link>
  </section>
  <!--  -->
  <!-- Modal -->
  <div
    class="modal top fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-mdb-backdrop="static"
    data-mdb-keyboard="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header my-2">
          <h5
            class="modal-title"
            id="exampleModalLabel"
            style="margin-left: 12.3vh"
          >
            Telefon raqamini kiriting
          </h5>

          <button
            type="button"
            class="btn-close"
            data-mdb-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body my-2">
          <input
            type="text"
            class="rounded-5 border-1 px-3"
            style="
              margin-left: 12vh;
              width: 60%;
              height: 50px;
              font-size: 1.1rem;
            "
            placeholder="+998 00 000-00-00"
          />
        </div>
        <div class="modal-footer my-2">
          <button
            type="button"
            class="btn btn-primary rounded-4"
            style="margin-right: 8vh; width: 60%; height: 40px"
          >
            Kodni olish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let countet = ref([]);

// setInterval(()=>{
//   countet.value =  JSON.parse(localStorage.getItem("savat"));
// },1000)

 onMounted( async () => {
  countet.value = await JSON.parse(localStorage.getItem("savat")) || [];

   if (countet.value.length > 0)  {
    let count = document.querySelector(".counter");
    count.style.display = "block";
    let count2 = document.querySelector(".counter2");
    count2.style.display = "block";
  } else {
    let count = document.querySelector(".counter");
    count.style.display = "none";
    let count2 = document.querySelector(".counter2");
    count2.style.display = "none";
  }
});
</script>

<style scoped>
.diva {
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-around;
}
.d1 {
  width: 30%;
  height: 100%;
}
.d2 {
  width: 22%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.d2 div {
  display: flex;
  align-items: center !important;
  cursor: pointer;
}

img {
  width: 180px;
  height: 100%;
}
.Menu {
  width: 350px;
  height: 70px;
  position: fixed;
  left: 40.5%;
  z-index: 22;
  bottom: 0px !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px !important;
  background-color: rgb(255, 255, 255);
}
.Menu a:hover {
  color: #3b71ca !important;
}
.counter {
  bottom: 55%;
  margin-left: 4%;
  position: absolute;
}
.counter2 {
  display: none;
  margin-left: 14px !important;
  position: absolute;
}
/* Responsive 385px*/
@media (max-width: 385px) {
  .diva {
    display: none;
  }
  .Menu {
    display: block;
    width: 100%;
    height: 65px !important;
    left: 0% !important;
    padding-bottom: 1vh;
  }
  .Menu p{
    margin-left: -0.8vh;
    position: absolute !important;
    max-height: 10px;
  }
 
  .Menu,
  a {
    font-size: 1.3rem !important;
  }
}
/* Responsive  576px*/
@media (max-width: 576px) {
  .diva {
    display: none;
  }
  .Menu {
    display: inline-flex !important;
    width: 100%;
    height: 60px !important;
    left: 0%;
    padding-bottom: 1vh;
  }
  .Menu,
  a {
    font-size: 1.4rem;
  }
  .counter {
    bottom: 55%;
    margin-left: 4%;
    position: absolute;
  }
}
</style>
