import { interpret } from 'xstate';
import exfeaturemachine, { STATES, ACTIONS } from '../machine';

it('when initialized should render empty state', () => {
  const machine = interpret(exfeaturemachine);

  machine.start();

  expect(machine.state.context.message).toEqual('');
  expect(machine.state.context.message_list).toEqual([]);
  expect(machine.state.value).toEqual(STATES.empty_list);
});

it('when calling submit message action, should update context', (done) => {
  const machine = interpret(exfeaturemachine);
  machine.start();

  machine.onTransition((current) => {
    if (current.matches(STATES.submitting_message)) {
      expect(machine.state.context.message).toEqual('teste de mensagem');
    }

    if (current.matches(STATES.showing_list)) {
      expect(machine.state.context.message).toEqual('');
      expect(machine.state.context.message_list).toEqual(['teste de mensagem']);
      machine.stop();
      done();
    }
  });

  machine.send(ACTIONS.update_message, { value: 'teste de mensagem' });
  machine.send(ACTIONS.submit_message);
});
