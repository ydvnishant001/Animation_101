const moveImage = () => {
  const img = new Image();
  const canvas = document.getElementById("can");
  const ctx = canvas.getContext("2d");
  let x = 0,
    y = 0;
  const startTime = new Date().getTime(); //getting current time

  img.onload = () => {
    const start = setInterval(() => {
      if (new Date().getTime() - startTime > 7000) {
        //comparing startTime with latest time
        clearInterval(start);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing canvas
      ctx.drawImage(img, x, y, 700, 800); //moving the image
      x = x + 20;
    }, 1000); // running this for roughly 5 seconds
  };
  img.src =
    "https://images.pexels.com/photos/2915997/pexels-photo-2915997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
};

export default moveImage;
