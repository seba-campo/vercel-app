import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import { syncData } from "../../../lib/algolia";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        var queryParams = req.query;
        const sync = await syncData();
        res.send("ok")
        // airtableBase('Furniture').select({}).eachPage(async function page(records, fetchNextPage) {
        //     // This function (`page`) will get called for each page of records.
        //     var objects = records.map((r)=>{
        //         return {
        //             indexId: r.id,
        //             ...r.fields,
        //         }
        //     })
        //     await client.saveObjects({indexName: "test", objects: objects});
        //     console.log(objects)
        //     fetchNextPage();
            

        // }, function done(err) {
        //     if (err) { console.error(err); return; }
        // });

        // res.send("ok")
        
    }
})