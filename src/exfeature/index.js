import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
} from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { useMachine } from '@xstate/react';
import { deepOrange, grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { PAGES } from 'app';
import machine, { STATES, ACTIONS } from './machine';

function Header() {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton
          component={Link}
          to={PAGES.Home}
          size="large"
          data-testid="back-button"
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          px: 4,
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Typography variant="h4" color={grey[700]}>
          Eu odeio CSS
        </Typography>
      </Box>
    </Box>
  );
}

function ExampleList({ messageList }) {
  return (
    <Box sx={{ width: '100%', flexGrow: 1, py: 4 }}>
      <List>
        {messageList.map((message) => (
          <React.Fragment key={message}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Nome do ser" secondary={message} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

function EmptyList() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexGrow: 1,
        py: 4,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h5" color={grey[500]}>
        Não há mensagens a serem exibidas
      </Typography>
    </Box>
  );
}

function SubmitMessageForm({ currentMessage, isSubmitting, send }) {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <TextField
        fullWidth
        label="Mensagem"
        id="fullWidth"
        disabled={isSubmitting}
        value={currentMessage}
        onChange={(event) => {
          send(ACTIONS.update_message, { value: event.target.value });
        }}
      />
      <Box
        sx={{
          px: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <IconButton
          size="large"
          disabled={isSubmitting}
          data-testid="send-button"
          onClick={() => {
            send(ACTIONS.submit_message);
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

function ExFeature() {
  const [state, send] = useMachine(machine);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header />

      {state.value === STATES.empty_list ? (
        <EmptyList />
      ) : (
        <ExampleList messageList={state.context.message_list} />
      )}

      <SubmitMessageForm
        currentMessage={state.context.message}
        isSubmitting={state.value === STATES.submitting_message}
        send={send}
      />
    </Box>
  );
}

export default ExFeature;
