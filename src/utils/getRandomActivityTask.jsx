const bored_url = "http://www.boredapi.com/api/activity";
const activity_1person = "?participants=1";
export async function getRandomActivity(setTaskNewName) {
  try {
    const response = await fetch(bored_url + activity_1person);
    const data = await response.json();
    setTaskNewName(data.activity);
  } catch (error) {
    console.log("Error with adding random activity:", error);
  }
}
