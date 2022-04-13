import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import modalItems from './modalItems';

const Modal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickToOpen}>
        Zjistit více o rodech
      </Button>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{'Rody na zámku Zbenice'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {modalItems.map((item) => (
              <div class="dialog__item" key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} color="primary" autoFocus>
            Zavřít
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
