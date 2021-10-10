import { createMachine, assign } from 'xstate';
import { submitMessageService } from './services';

const STATES = {
  empty_list: 'empty_list',
  showing_list: 'showing_list',
  submitting_message: 'submitting_message',
};

const ACTIONS = {
  submit_message: 'submit_message',
  update_message: 'update_message',
};

const machine = createMachine(
  {
    id: 'ex_feature_machine',
    context: {
      message: '',
      message_list: [],
    },
    initial: STATES.empty_list,
    states: {
      [STATES.empty_list]: {
        on: {
          [ACTIONS.update_message]: {
            actions: ['updateMessageInContext'],
          },
          [ACTIONS.submit_message]: STATES.submitting_message,
        },
      },
      [STATES.showing_list]: {
        on: {
          [ACTIONS.update_message]: {
            actions: ['updateMessageInContext'],
          },
          [ACTIONS.submit_message]: STATES.submitting_message,
        },
      },
      [STATES.submitting_message]: {
        invoke: {
          id: 'submit_message_service',
          src: (context) => submitMessageService(context.message),
          onDone: [
            {
              actions: [
                assign({
                  message_list: (context) => [
                    ...context.message_list,
                    context.message,
                  ],
                }),
                assign({ message: () => '' }),
              ],
              target: STATES.showing_list,
            },
          ],
        },
      },
    },
  },
  {
    actions: {
      updateMessageInContext: assign((_, event) => {
        return {
          message: event.value,
        };
      }),
    },
  }
);

export { STATES, ACTIONS };
export default machine;
