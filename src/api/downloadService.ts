export function getDownloadUrl(
  volcano: string,
  filename: string
) {

  return `/api/geo3bcn/download/${volcano}/${filename}`;

}