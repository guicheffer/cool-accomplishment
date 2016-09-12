export default function replaceVal(str) {
  str = str.toLowerCase();
  str = str.replace(/[àáâãäå]/,"a");
  str = str.replace(/[ëèéê]/,"e");
  str = str.replace(/[íîì]/,"i");
  str = str.replace(/[öõóô]/,"o");
  str = str.replace(/[üúû]/,"u");
  str = str.replace(/[ç]/,"c");

  return str;
}
