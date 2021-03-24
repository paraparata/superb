async function imgFlip() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  return res.json();
}

export { imgFlip };
