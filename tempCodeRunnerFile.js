	let artistsWhoLivedIn20thCentury = data.filter((el) => {
		let start = Number(el.years.split(' ')[0]);
		let end = Number(el.years.split(' ')[2]);
		return el.name;
	});