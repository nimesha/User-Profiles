import Resizer from 'react-image-file-resizer';

const resizeFile = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 100, 100, 'png', 50, 0,
        uri => {
            resolve(uri);
        },
        'base64'
    );
});

const imageCompress = async function imageCompress(file) {
   
    try {
        return await resizeFile(file);
    } catch (error) {
        console.log(error);
    }


}

export default imageCompress;

