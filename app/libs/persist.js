/**
 * Created by niko-42na on 26.09.17.
 */
export default function(alt, storage, storageName) {
    try {
        alt.bootstrap(storage.get(storageName));
    }
    catch(e) {
        console.error('Failed to bootstrap data', e);
    }

    alt.FinalStore.listen(() => {
        if(!storage.get('debug')) {
            storage.set(storageName, alt.takeSnapshot());
        }
    });
}