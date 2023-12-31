import { storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
// Input : file byte, document name, file name and parcours id
// Input : Byte du fichier, nom du dossier, nom du fichier et identifiant du parcours.
// Output : L'url par laquelle le fichier sera accessible une fois uploadé. 
// Besoin de mettre à jour cette url dans Firestore une fois obtenue
export async function uploadImage(fileByte, fileName) {
    const storageRef = ref(storage, "/" + fileName +'.jpg');
    const metadata = {
        contentType: 'image/jpeg'
    }
    const uploadTask = uploadBytesResumable(storageRef, fileByte, metadata);
    uploadTask.on('state_changed',
    (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
        case 'paused':
            console.log('Upload is paused');
            break;
        case 'running':
            break;
        }
    }, 
    (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
            case 'storage/unauthorized':
                console.log("User doesn't have permission to access the object")
                break;
            case 'storage/canceled':
                console.log("User canceled the upload");
                break;

            case 'storage/unknown':
                console.log("Unknown error occurred, inspect error.serverResponse");
                break;
            }
    }, 
    () => {
        // Upload effectué avec succes, maintenant on peut obtenir l'url de téléchargement
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            return downloadURL;
        });
    }
    );

    return "";
}
