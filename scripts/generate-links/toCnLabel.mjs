const labelMap = {
  "what is fuel": "什么是Fuel",
  "quickstart": "快速开始",
  "glossary": "术语表",
  "guides": "指南",

}


export function toCnLabel(label) {
  return labelMap[label.toLowerCase()] || label
}
