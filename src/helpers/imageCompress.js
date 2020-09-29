import Resizer from 'react-image-file-resizer';


const resizeFile = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 100, 100, 'png', 100, 0,
        uri => {
            resolve(uri);
        },
        'base64'
    );
});

const imageCompress = async function imageCompress(file) {
    return await resizeFile(file);
}

export default imageCompress;

