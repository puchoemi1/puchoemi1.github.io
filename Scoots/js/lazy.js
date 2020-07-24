//get all the imgs on the page with data-src

const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
	image.setAttribute('src', image.getAttribute('data-src'));
	image.onload = () => {image.removeAttribute('data-src');};
};

const imgOptions = {
	threshold: 0.5
};

if ('IntersectionObserver' in window) {
	
	const imgObserver = new IntersectionObserver((items) => {
			items.forEach((item) => {
			if (item.isIntersecting) {
				loadImages(item.target);
				imgObserver.unobserve(item.target);
			}
		});
}, imgOptions);

//load images if necessary
imagesToLoad.forEach((img) => {
imgObserver.observe(img);
});

}
else { //just load all images if not supported
	imagesToLoad.forEach((img) => {
		loadImage(img);
});
}
