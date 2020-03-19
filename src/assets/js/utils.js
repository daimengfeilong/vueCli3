//防抖
export function debounce(fn, delay) { 
	let timeout = null
	return function () {
		if (timeout) {
			clearTimeout(timeout)
		}
		timeout = setTimeout(() => {
			timeout = null
			fn.apply(this, arguments)
		}, delay)
	}
}
//节流
export function throttle (fn, interval) {     
	let lastTime = 0
	let timeout = null
	return function () {
		let now = Date.now()
		if (now - lastTime > interval) {
			fn.apply(this, arguments)
			lastTime = now
		}
	}
}