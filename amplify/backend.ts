import { defineBackend } from '@aws-amplify/backend';
import { auth } from '@aws-amplify/backend-auth';
import { data } from '@aws-amplify/backend-data';

const backend = defineBackend({
  auth: auth(),
  data: data({
    models: {
      Post: {
        title: 'string',
        content: 'string',
      },
    },
    authorizationModes: {
      defaultAuthorizationMode: 'userPool',
    },
  }),
});

export default backend;
