import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';




const getUrl = (plural, x) => {
  const obj  = plural.find(image => (image.item.id === x));
  return obj.file_urls.square_thumbnail;
}
const getDes = (plural, x) => {
  const field = plural.find(text => (plural.element.name === x));
  return field.text
}

export { getUrl, getDes }
