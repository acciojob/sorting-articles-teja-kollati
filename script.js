//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

bands.sort((a, b) => {
	if(a.startsWith('A ') || a.startsWith('An ') || a.startsWith('The ')){
		a = a.split(" ");
		a.shift();
		a = a.join(" ");
	}
	if(b.startsWith('A ') || b.startsWith('An ') || b.startsWith('The ')){
		b = b.split(" ");
		b.shift();
		b = b.join(" ");
	}
	return a.localeCompare(b);
});

const container = document.querySelector(".container");

const ul = document.createElement("ul");

bands.forEach((band) => {
	const li = document.createElement("li");
	li.textContent = band;
	ul.appendChild(li);
})

container.appendChild(ul);