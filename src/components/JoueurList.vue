<template>
  <div class="container">
    <div class="row">
      <input
        type="search"
        class="center"
        placeholder="Recherchez un  joueur"
        v-model="search"
      />

      <Joueur
        v-for="joueur in filterredBlogs"
        :key="joueur.id"
        :joueur="joueur"
      />
    </div>
  </div>
</template>

<script>
import Joueur from "./Joueur";

export default {
  name: "JoueurList",

  components: {
    Joueur
  },
  data() {
    return {
      //Affichage des données avec vuex
      joueurs: this.$store.state.joueurs,
      search: "",
      searching: ""
    };
  },
  computed: {
    filterredBlogs: function() {
      return this.joueurs.filter((joueur) => {
        return (
          joueur.name.toLowerCase().includes(this.search) ||
          joueur.firstname.toLowerCase().includes(this.search)
        );
      });
    }
  }
};
</script>

<style lang="scss" scoped>
::placeholder {
  font-size: 20px;
  font-weight: bold;
  color: black;
  background: linear-gradient(to left, red, white, blue 85%);
}
input.center {
  border: none;
}
input.center:focus {
  border: none;
}
</style>
