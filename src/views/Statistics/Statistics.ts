import Footers from "@/components/Footers/Footers.vue";
import MatchList from "@/components/MatchList/MatchList.vue";
import MenuBar from "@/components/MenuBar/MenuBar.vue";
import OptionBar from "@/components/OptionBar/OptionBar.vue";
import PlayerStats from "@/components/PlayerStats/PlayerStats.vue";
import SeasonStats from "@/components/SeasonStats/SeasonStats.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "statistics-view",
  components: {
    MenuBar,
    Footers,
    SeasonStats,
    OptionBar,
    PlayerStats,
    MatchList,
  },

  setup() {
    return {};
  },
});
