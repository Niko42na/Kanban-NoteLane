/**
 * Created by niko-42na on 26.09.17.
 */
import NoteStore from '../../stores/NoteStore';
import storage from '../../libs/storage';
import persist from '../../libs/persist';


export default alt => {
    alt.addStore('NoteStore', NoteStore);
    persist(alt, storage(localStorage), 'app');

}