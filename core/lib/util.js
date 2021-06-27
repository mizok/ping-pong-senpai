export function getScreenshotImage(targetCvs) {
  let url = targetCvs.toDataURL();
  let image = new Image(targetCvs.width, targetCvs.height);
  image.src = url;
  return image;
}

export function getCacheCanvas(targetCtx) {
  let cacheCvs = document.createElement('canvas');
  let cacheCtx = cacheCvs.getContext('2d');
  let sourceWidth = targetCtx.canvas.width;
  let sourceHeight = targetCtx.canvas.height;
  cacheCvs.width = sourceWidth;
  cacheCvs.height = sourceHeight;

  let cacheData = targetCtx.getImageData(0, 0, sourceWidth, sourceHeight);
  cacheCtx.putImageData(cacheData, 0, 0);
  return cacheCvs;
}