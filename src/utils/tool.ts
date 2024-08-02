export function mergeCells(text, data, key, index) {
  if (index - 1 > data.length || (index !== 0 && text === data[index - 1][key])) {
    return 0;
  }
  let rowSpan = 1;
  for (let i = index + 1; i < data.length; i++) {
    if (text !== data[i][key]) {
      break;
    }
    rowSpan++;
  }
  return rowSpan;
}

export function mergecellswithRender(text, data, key, index, children) {
  const obj = {
    children,
    props: {
      rowSpan: 1,
    },
  };
  obj.props.rowSpan = mergeCells(text, data, key, index);
  return obj;
}
