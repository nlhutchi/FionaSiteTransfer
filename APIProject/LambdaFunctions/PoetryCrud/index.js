const AWS = require("aws-sdk");
var documentClient = new AWS.DynamoDB.DocumentClient();
const endpointMapping = require("./endpointMapping.json");
const { v4: uuidv4 } = require("uuid");

var returnObj = {
    statusCode: null,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: null,
};

exports.handler = async (event, context, callback) => {
    console.log('event:', JSON.stringify(event));
    try {
        switch (event.httpMethod) {
            case "GET":
                switch (event.path) {
                    case endpointMapping.GET.GetPoems.path:
                        console.log(endpointMapping.GET.GetPoems.eventName);
                        await getAllPoems();
                        return callback(null, returnObj);
                    default:
                        returnObj.body = "Path not found";
                        returnObj.statusCode = 404;
                        return callback(null, returnObj);
                }
            // case "PUT":
            //     var body = JSON.parse(event.body);
            //     switch (event.path) {
            //         case endpointMapping.PUT.CreateRecipe.path:
            //             console.log(endpointMapping.PUT.CreateRecipe.eventName);
            //             await createNewRecipe(body);
            //             return callback(null, returnObj);
            //         case endpointMapping.PUT.AddAssetFile.path:
            //             console.log(endpointMapping.PUT.AddAssetFile.eventName);
            //             await getUploadURL(body);
            //             return callback(null, returnObj);
            //         default:
            //             returnObj.body = "Path not found";
            //             returnObj.statusCode = 404;
            //             return callback(null, returnObj);
            //     }
            default:
                returnObj.body = "Method Not Allowed";
                returnObj.statusCode = 405;
                return callback(null, returnObj);
        }
    } catch (err) {
        if (err.statusCode !== undefined) {
            returnObj.statusCode = err.statusCode;
            returnObj.body = JSON.stringify(err.error);
        } else {
            returnObj.statusCode = 500;
            returnObj.body = JSON.stringify(err);
        }
        console.log("Catch error", err);
        return callback(null, returnObj);
    }
};


async function getAllPoems() {
    var params = {
        TableName : process.env.PoetryTableName
    };

    await documentClient.scan(params).promise()
        .then((response) => {
            console.log('response', response);
            returnObj.statusCode = 200;
            returnObj.body = JSON.stringify(response);
        });
}
