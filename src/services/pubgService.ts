import type { playerModel } from "@/models/models";
import { ref } from "vue";

class PubgService {
  playerData: playerModel | undefined;

  get data() {
    return this.playerData;
  }

  async GetPlayer(playerName: string) {
    const player = `players?filter[playerNames]=${playerName}`;
    const player_url = `${player}`;

    await fetch(`${import.meta.env.VITE_API_URL}${player_url}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: "application/vnd.api+json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.playerData = response.data[0];
      })
      .catch((err) => console.error(err));
  }
}

const $pubgService = new PubgService();
export default $pubgService;
