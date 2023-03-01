import type { playerModel } from "@/models/models";
import { ref } from "vue";

const playerData = ref<playerModel | any>();
class PubgService {
  playerData() {
    console.log(playerData);
    return playerData;
  }
  GetPlayer(playerName: string) {
    const player = `players?filter[playerNames]=${playerName}`;
    const player_url = `${player}`;
    fetch(`${import.meta.env.VITE_API_URL}${player_url}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY} `,
        Accept: "application/vnd.api+json",
      },
    })
      .then((response) => response.json())
      .then(function (response) {
        // console.log(response.data[0]);
        playerData.value = response.data[0];
      })
      .catch((err) => console.error(err));
  }
}

const $pubgService = new PubgService();

export default $pubgService;
