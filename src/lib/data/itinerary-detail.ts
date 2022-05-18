export async function itineraryDetail(id: number) {
  return itinerary(id);
}

async function itinerary(id: number) {
  let data: any = [];

  data[1] = {
    title: 'Pick Up Information',
    content: `
      <h4>Vehicle</h4>
      <img src="https://imgcdn.oto.com/medium/gallery/color/38/1917/toyota-alphard-color-856953.jpg" alt="Toyota Alphard Black">
      <p>Type: <strong>Toyota Alphard Black</strong><br />License Plate: <strong>EB 4729 DH</strong></p>
      <h4>Contact person</h4>
      <p><strong>Peter Parker</strong><br />Driver</p>
      <p>08111111111</p>
      <p><a class="btn bg-base-100 border text-base-content m-2" href="#">WA</a> <a class="btn bg-base-100 border text-base-content m-2" href="#">CALL</a></p>
    `
  }

  data[2] = {
    title: 'Sailing Trivia',
    content: `
      <h4>Enjoy life on board for 3 days and 2 nights</h4>
      <img src="https://ik.imagekit.io/tvlk/xpe-asset/dsIfD0QxFcgaDmB6sQchobk5CmBu9PzsWhwFXGFxJ179jzSxIGG5kZNhhHY-p7nw/xxt/experience/image/Labuan-Bajo-Levillia-Phinisi-JPG-1280x720-FIT-f769d2118c341a881eefa1c2b178aa30.jpeg?_src=imagekit&tr=c-at_max,h-500,q-60,w-612" alt="Pinisi Boat">
      <p>This boat will accompany you while enjoying your trip in Komodo.</p>
      <h4>Spend the Night in a private or shared cabin.</h4>
      <img src="https://ik.imagekit.io/tvlk/xpe-asset/dsIfD0QxFcgaDmB6sQchobk5CmBu9PzsWhwFXGFxJ179jzSxIGG5kZNhhHY-p7nw/xxt/experience/image/Labuan-Bajo-Levillia-Phinisi-4-JPG-1280x720-FIT-39103c3654e3bb97c5d43232a2efddfc.jpeg?_src=imagekit&tr=c-at_max,h-500,q-60,w-612" alt="Sleep">
      <p>Get some rest for next adventure.</p>
    `
  }

  return data[id];
}