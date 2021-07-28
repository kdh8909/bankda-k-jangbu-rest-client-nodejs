export function getCurrentTime() {
	var now = new Date();
	var res = "" + now.getFullYear() + padZero(now.getMonth() + 1) + 
		padZero(now.getDate()) + padZero(now.getHours()) + 
		padZero(now.getMinutes()) + padZero(now.getSeconds());
	return res;
}

function padZero(num: number) {
	var result;
	if (num < 10) {
		result = "0" + num;
	} else {
		result = "" + num;
	}
	return result;
}