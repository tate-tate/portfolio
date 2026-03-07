const importImages = () => {
    const images = import.meta.glob(
        [
            '../assets/images/gallery/*.{jpg,jpeg,png,webp,gif,avif}',
            '../assets/images/gallery/*.{JPG,JPEG,PNG,WEBP,GIF,AVIF}'
        ],
        { eager: true, import: 'default' }
    );

    const sortedImages = Object.entries(images)
        .sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }))
        .map(([, path]) => path);

    // Organize images by location prefix
    return {
        pittsburgh: sortedImages.filter(path => path.includes('pitt')),
        gary: sortedImages.filter(path => path.includes('gary')),
        all: sortedImages
    };
};

export default importImages;