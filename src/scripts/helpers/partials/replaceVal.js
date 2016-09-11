export default function replaceVal(str) {
  str = str.toLowerCase();
  str = str.replace(/[àáâãäå]/,"a");
  str = str.replace(/[ëèéê]/,"E");
  str = str.replace(/[öíî]/,"O");
  str = str.replace(/[öõóô]/,"O");
  str = str.replace(/[üúû]/,"O");
  str = str.replace(/[ç]/,"c");

  return str;
}
