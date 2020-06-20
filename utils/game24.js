function node(value, exp) {
	this.value = value;
	this.exp = exp;
}
module.exports = {
	game24: function(arr) {
		var result = []
		let answers = new Set();
		let S = new Map();
		let A = arr;

		function run() {
			for (var i = 0; i < (1 << 4); i++) {
				let set = new Set();
				S.set(i, set);
			}
			for (var i = 0; i < 4; i++) {
				let n = new node(A[i], A[i] + "");
				let set = new Set();
				set.add(n);
				S.set(1 << i, set);
			}
			for (var i = 1; i < (1 << 4); i++) {
				fork(i);
			}

			let mSet = S.get((1 << 4) - 1);
			for (let v of mSet.values()) {
				if (v.value == 24) {
					answers.add(v.exp);
				}
			}
			if (answers.size == 0) {
				console.log("It's no possible");
			} else {
				for (let i of answers) {
					// console.log(i) 
					result.push(i)
					if(result.length>=10){
						return result
					}
				}
			}
			return result
		}

		function fork(m) {
			var mSet = S.get(m);
			if (mSet.size > 0)
				return mSet;
			else {
				for (var x = 1; x < m; x++) {
					if ((x & m) == x) {
						let s1 = fork(x);
						let s2 = fork(m - x);
						for (let n1 of s1)
							for (let n2 of s2) {
								var str = "(" + n1.exp + "+" + n2.exp + ")";
								mSet.add(new node(n1.value + n2.value, str));
								str = "(" + n1.exp + "-" + n2.exp + ")";
								mSet.add(new node(n1.value - n2.value, str));
								// str = "(" + n2.exp + "-" + n1.exp + ")";
								// mSet.add(new node(n1.value - n2.value, str));
								str = "(" + n1.exp + "*" + n2.exp + ")";
								mSet.add(new node(n1.value * n2.value, str));
								// if (n1.value != 0) {
								// 	str = "(" + n2.exp + "/" + n1.exp + ")";
								// 	mSet.add(new node(n2.value / n1.value, str));
								// }
								if (n2.value != 0) {
									str = "(" + n1.exp + "/" + n2.exp + ")";
									mSet.add(new node(n1.value / n2.value, str));
								}
							}
					}
				}
				return mSet;
			}

		}
		return run()
	}
};
