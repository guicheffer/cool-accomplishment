export default function handleOnlyNumbers(val, origin){
	return /^[0-9.,]*$/.test(val) ? (val != 0 ? val : "") : origin;
}
