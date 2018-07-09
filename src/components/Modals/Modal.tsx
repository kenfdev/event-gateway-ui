import * as React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import { ModalRequest, CloseModalRequest } from '../../features/layout/actions';

interface Props {
  modalRequest: ModalRequest;
  onConfirm: (req: ModalRequest) => any;
  onClose: (req: CloseModalRequest) => any;
}

const Modal: React.SFC<Props> = props => {
  const handleClose = () => {
    props.onClose(props.modalRequest);
  };
  const handleConfirm = () => {
    props.onConfirm(props.modalRequest);
  };
  if (props.modalRequest.type === 'confirmation') {
    const { text } = props.modalRequest;
    return (
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Confirm'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  // FIXME:
  return null;
};

export default Modal;
