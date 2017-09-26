/**
 * Created by niko-42na on 26.09.17.
 */
export default storage => ({
    get(k) {
        try {
            return JSON.parse(storage.getItem(k));
        }
        catch(e) {
            return null;
        }
    },
    set(k, v) {
        storage.setItem(k, JSON.stringify(v));
    }
})