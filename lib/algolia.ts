import algoliasearch from "algoliasearch";
import { PRODUCT_COLLECTION } from "./firebase";

const appID = process.env.ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_API_KEY;
export const algoliaContext = algoliasearch(appID, apiKey);


export const syncData = async function (){
  const snapshot = await PRODUCT_COLLECTION.get();
  const docs = snapshot.docs.map(doc => doc.data());

  const index = algoliaContext.initIndex("products");
  await index.clearObjects();
  docs.forEach(async (e)=>{
      await index.saveObject(e, {autoGenerateObjectIDIfNotExist: true}).wait()
  })

  return true;
}
// Create a new index and add a record
// const index = client.initIndex("test_index");
// const record = { objectID: 1, name: "test_record" }

// await index.saveObject(record).wait();

// // Search the index for "test" and print the results
// const { hits } = await index.search("test");
// console.log(JSON.stringify(hits[0]));
