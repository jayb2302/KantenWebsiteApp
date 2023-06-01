<template>
  <teleport to="body">

    <transition enter-active-class="transition ease-in duration-800 transform" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition ease-out duration-100 transform"
      leave-from-class="opacity-100" leave-to-class="opacity-0">

      <div ref="modal-backdrop" v-show="showModal" @click="closeModal"
        class=" modal-backdrop fixed bg-black w-full h-full bg-opacity-10 z-10 inset-0 ">

        <div class="flex justify-center overflow-auto scrollbar 
          h-4/5 lg:h-5/6 pt-14  lg:pt-16 mt-4 ">

          <div class="modal overflow-auto hover:overflow-auto 
            scrollbar-thin shadow-md shadow-slate-500 
            shadow-inner w-11/12 pt-4 p-8 lg:mb-2 h-full mb-2" role="dialog" ref="modal">

            <img src="../assets/mana.svg" class="w-28 relative " alt="">

            <p class="text-2xl w-8/12 mb-3 m-auto text-center">
              Electronic Music Vibes: Rave culture is closely associated
              with electronic dance music (EDM).
            </p>
            
            <button class="btn absolute right-3 text-3xl pt-1 mt-1 pb-0.5 pl-2 pr-2 top-2 z-20" @click="closeModal">
              &cross;
            </button>

            <!-- Upcoming Events Section -->
            <section id="events" class="py-10 w-full h-auto">
              <div class="eventsbg"></div>
              <h2 class="text-3xl font-bold mb-5 text-center">Upcoming Events</h2>
              <router-view></router-view>
            </section>

            <!-- Gallery Section -->
            <section id="gallery" class="py-10 flex flex-col justify-center  h-auto">
              <h2 class="text-3xl font-bold mb-5 text-center">Gallery</h2>
              <div class="gallerybg w-11/12  ">
                <Gallery />
              </div>
            </section>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Gallery from '../components/Gallery.vue'



const props = {
  show: {
    type: Boolean,
    default: false,
  },
};
export default {
  name: 'ManaDialog',
  props,
  components: {
    Gallery,
    routerView: useRouter.component,

  },
  setup(props) {
    const showModal = ref(false);

    function closeModal() {
      showModal.value = false;
    }
    watch(
      () => props.show,
      (show) => {
        showModal.value = show;
      }
    );

    return {
      showModal, closeModal,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../modules/_variables.scss';


.modal {
  background-color: $primaryone;
  box-shadow:
    0px 0px 5px $kpink,
    inset 0 0 3px $kpink;
  color: $white;

  .gallerybg {
    margin: auto;
  }

  h1 {
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 800;
  }

  p {
    font-family: $k2d;
  }



  .btn {
    color: $gray;
    opacity: 0.4;

    #closebutton {
      &:hover {
        color: $kpink;
      }
    }

    &:hover {
      color: $kpink;
      transition: ease-in-out duration-1000 transform;
    }

  }
}

.rb {
  box-sizing: border-box;
  border-width: 0.5px;
  border-color: red;
}

.bb {
  box-sizing: border-box;
  border-width: 0.5px;
  border-color: rgb(162, 167, 192);
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: $kpink;


}
</style>