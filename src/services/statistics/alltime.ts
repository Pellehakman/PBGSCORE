import { getAuth } from "firebase/auth";
// "https://api.pubg.com/shards/$platform/players/$playerId/seasons/lifetime"
// curl -g "https://api.pubg.com/shards/$platform/seasons" \
class Lifetime {
  state: any;
  async GetLifetime(ignID: string) {
    // if (localStorage.getItem("_user_lifetime")) {
    //   console.log("NO API REQUEST MADE");
    // } else if (auth.currentUser) {
    // console.log("API REQUEST MADE");
    const lifetime_url = `players/${ignID}/seasons/lifetime`;

    await fetch(`${import.meta.env.VITE_API_URL}${lifetime_url}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: "application/vnd.api+json",
      },
    })
      .then((response) => response.json())
      .then(async (response) => {
        this.state = await response;
        // localStorage.setItem("_user_lifetime", JSON.stringify(response));
        console.log(this.state);
      });
    // }
  }
}

const $lifetime = new Lifetime();
export default $lifetime;
