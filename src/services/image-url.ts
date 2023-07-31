const getCroppedUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  //slice the url from beginning to the required index then add new path + rest of url
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedUrl;
