<template>
  <div class="container">
    <div class="card mb-3 mt-5" style="max-width: 100%;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="joueur.logo" class="card-img" alt="{{joueur.name}}" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ fullName }}</h5>
            <p class="card-text">né le {{ joueur.age }} à {{ joueur.lieu }}</p>

            <p class="card-text">club: {{ joueur.club }}</p>

            <p class="card-text">
              {{ joueur.texte }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <router-link to="/"
    ><button class="btn btn-primary">Retour à l'accueil</button></router-link
  >
</template>
<script>
export default {
  name: "DetailJoueur",

  data() {
    return {
      joueur: null
    };
  },
  props: {
    joueurs: {
      type: Object,
      default: null
    }
  },
  computed: {
    fullName: function() {
      return this.joueur.firstname + " " + this.joueur.name;
    }
  },
  created() { 
    // Récupère les joueurs
    const joueurs = this.$store.state.joueurs;
    // recupérer l'id
    const id = this.$route.params.id;

    // recupérer le nom
    const name = this.$route.params.name;
    // Filtre pour récupérer le joueur en question
    this.joueur = joueurs.find((joueur) => joueur.id === id);
    this.joueur = joueurs.find((joueur) => joueur.name === name);
  }
};
</script>
<style lang="scss" scoped>
.electrique {
  background-color: yellow;
}

.feu {
  background-color: red;
}
.force {
  background-color: grey;
}
.eau {
  background-color: blue;
}
</style>
