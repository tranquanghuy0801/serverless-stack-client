const config = {
     s3: {
       REGION: "us-east-1",
       BUCKET: "notes-app-upload-harry",
     },
     apiGateway: {
       REGION: "us-east-1",
       URL: "https://w55yqa1nca.execute-api.us-east-1.amazonaws.com/prod",
     },
     cognito: {
       REGION: "us-east-1",
       USER_POOL_ID: "us-east-1_XL6kc9scr",
       APP_CLIENT_ID: "78pbu8dkcircmetecc7pvcgfu4",
       IDENTITY_POOL_ID: "us-east-1:e60ef7b4-4806-415c-9f9c-e69b57940c92",
     },
};

export default config;