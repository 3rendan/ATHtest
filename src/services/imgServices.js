import React from 'react';

const imgUrl = 'http://digital.provath.org/api/files/';

export async function getImg(id) {
  const response = await fetch(imgUrl);
  if (response.ok) return response.json();
  const u = response.find((r) => r.item.id === id)
  throw u;
}
export async function getUrl(arr, x) {
  const obj  = arr.find(image => (image.item.id === x))
  return obj.file_urls.square_thumbnail;
}
