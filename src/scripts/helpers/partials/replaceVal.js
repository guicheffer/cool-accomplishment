export default function replaceVal(str) {
  str = str.toLowerCase();
  str = str.replace(/[àáâãäå]/gi,"a");
  str = str.replace(/[ëèéê]/gi,"e");
  str = str.replace(/[íîì]/gi,"i");
  str = str.replace(/[öõóô]/gi,"o");
  str = str.replace(/[üúû]/gi,"u");
  str = str.replace(/[ç]/gi,"c");

  return str;
}
