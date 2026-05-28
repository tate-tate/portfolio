const importImages = () => {
    const images = import.meta.glob(
        [
            '../assets/images/gallery/*.{jpg,jpeg,png,webp,gif,avif}',
            '../assets/images/gallery/*.{JPG,JPEG,PNG,WEBP,GIF,AVIF}'
        ],
        { eager: true, import: 'default' }
    );

    // Sort and organize by filtering the original keys (file paths), not the processed URLs
    const sortedEntries = Object.entries(images)
        .sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }));

    const sortedImages = sortedEntries.map(([, path]) => path);

    // Organize images by location prefix - filter by original filename
    return {
        pittsburgh: sortedEntries.filter(([key]) => key.toLowerCase().includes('pitt')).map(([, value]) => value),
        gary: sortedEntries.filter(([key]) => key.toLowerCase().includes('gary')).map(([, value]) => value),
        all: sortedImages
    };
};

export default importImages;