import { createTemplateAction } from '@backstage/plugin-scaffolder-backend';

interface EnvironmentAction {
  registryUrl: string
  orgId: string
  awsRegion: string
}

export function createGetEnvironmentAction({ registryUrl, orgId, awsRegion }: EnvironmentAction) {
  return createTemplateAction({
    id: 'backend:get-environment',
    schema: {
      output: {
        required: ['registryUrl'],
        properties: {
          registryUrl: {
            type: 'string'
          },
          orgId: {
            type: 'string'
          },
          awsRegion: {
            type: 'string'
          }
        }
      }
    },
    handler: async (ctx) => {
      ctx.output('orgId', orgId);
      ctx.output('registryUrl', registryUrl);
      ctx.output('awsRegion', awsRegion);
    },
  });
}
