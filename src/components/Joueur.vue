<template>
  <div class="col-md-4 ">
    <div class="row">
      <div class="card-group">
        <div
          :class="joueur.type"
          @mouseleave="hover = false"
          @mouseover="hover = true"
        >
          <div class="card-deck">
            <div class="card">
              <img
                class="img-responsive logo "
                :src="joueur.logo"
                style="width:100%"
              />
              <div class="card-body">
                <h5 class="card-title">{{ fullName }}</h5>
                <p>{{ joueur.type }}</p>

                <router-link :to="'/' + joueur.name + '/' + joueur.id">
                  <b-button
                    class="btn blue right"
                    v-if="hover"
                    variant="primary"
                    >Plus d'info</b-button
                  ></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Joueur",
  data() {
    return {
      hover: false
    };
  },
  props: {
    joueur: {
      type: Object,
      default: null
    }
  },

  computed: {
    fullName: function() {
      return this.joueur.firstname + " " + this.joueur.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-deck {
  margin: 0px !important ;
}
// .electrique {
//   background-color: yellow;
// }

// .feu {
//   background-image: url("https://bonbon-france.fr/wp-content/uploads/2019/03/france.png");
//   background-repeat: no-repeat;

//   background-size: 550px;
// }
// .force {
//   background-color: grey;
// }
// .eau {
//   background-color: blue;
// }

button {
  animation: buttonshow 0.4s;
  animation-delay: 0.5s;
  opacity: 1;
  position: absolute;
}
</style>
