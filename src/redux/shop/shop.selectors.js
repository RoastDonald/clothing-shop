import {createSelector} from 'reselect';



const collectionsSelector = state => state.shop;


export const selectCollection = collectionUrlParam =>
    createSelector(
    [collectionsItemsSelector],
    collections =>collections[collectionUrlParam]
);

export const collectionsItemsSelector = createSelector(
    [collectionsSelector],
    shop =>shop.collections
);


export const selectCollectionsForPreview = createSelector(
    [collectionsItemsSelector],
    collections=>Object.keys(collections).map(key=>collections[key])
)


