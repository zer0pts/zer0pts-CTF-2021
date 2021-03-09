import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Team from "../views/Team.vue";
import Challenges from "../views/Challenges.vue";
import Ranking from "../views/Ranking.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/team/:id",
    name: "Team",
    component: Team
  },
  {
    path: "/challenges",
    component: Challenges
  },
  {
    path: "/challenges/:id",
    name: "Challenges",
    component: Challenges
  },
  {
    path: "/ranking",
    name: "Ranking",
    component: Ranking
  },
];

const router = new VueRouter({
  routes
});

export default router;
