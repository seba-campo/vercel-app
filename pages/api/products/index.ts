// import next, { NextApiRequest, NextApiResponse } from "next"
// // import {client} from "../../../lib/firebase";
// import * as methods from "micro-method-router";

// export default methods({
//     async get(req: NextApiRequest, res: NextApiResponse){
//         const limit = parseInt(req.query.limit as string);
//         const offset = parseInt(req.query.offset as string);
//         const query = req.query.q as string;
//         //Hacer la busqueda en algolia
//         const totals = await client.search({
//         requests: [
//             {
//             indexName: "test",
//             query: ''
//             },
//         ],
//         })
//         client.searchSingleIndex({indexName: "test", searchParams:{}})
//         const {results} = await client.search({
//         requests: [
//             {
//             indexName: "test",
//             query,
//             offset: offset,
//             length: limit
//             },
//         ],
//         });

//         const resultsPaged = results[0].hits
//             .slice(offset, offset + limit);
        
//         res.send({
//         "results": results[0].hits,
//         "pagination": {
//             "offset": offset,
//             "limit": limit,
//             "total": totals.results[0].nbHits
//         }});
//     }
// })