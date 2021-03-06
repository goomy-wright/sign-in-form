let curentForm = 'sign-in';

let changeForm = (form) => {
	switch (form) {
		case 'sign-up':
			if (curentForm != 'sign-up') {
				let divs = document.getElementsByClassName('box');
				divs[0].style.display = 'none';
				divs[1].style.display = 'block';

				curentForm = 'sign-up';
			}
			
			break;
		case 'sign-in':
			if (curentForm != 'sign-in') {
				let divs = document.getElementsByClassName('box');
				divs[0].style.display = 'block';
				divs[1].style.display = 'none';

				curentForm = 'sign-in';
			};

			break;
	};
};
