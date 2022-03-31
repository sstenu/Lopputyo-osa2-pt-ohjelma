import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Editcustomer(props){
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
     firstname: '', lastname: '',  streetaddress: '', postcode: '', city: '', email: '', phone: ''
    })

    const handleClickOpen = () => {
        console.log(props.customer);
        setCustomer({firstname: props.customer.firstname, 
            lastname: props.customer.lastname, 
            streetaddress: props.customer.streetaddress, 
            postcode: props.customer.postcode, 
            city: props.customer.city, 
            email: props.customer.email, 
            phone: props.customer.phone
        });
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

    const handleInputChange = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value})
    }

    const updateCustomer = () => {
        props.updateCustomer(customer, props.customer.links[0].href);
        handleClose();
    }

    return(
        <div>
            <Button onClick={handleClickOpen}>
               Edit
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit customer</DialogTitle>
                <DialogContent>
                <TextField
                        autoFocus
                        margin="dense"
                        name="firstname"
                        value={customer.firstname}
                        label="First name"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="lastname"
                        value={customer.lastname}
                        label="Last name"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                  
                    />
                     <TextField
                        margin="dense"
                        name="streetaddress"
                        value={customer.streetaddress}
                        label="Street address"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="postcode"
                        value={customer.postcode}
                        label="Postal code"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="city"
                        value={customer.city}
                        label="City"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        value={customer.email}
                        label="Email"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        value={customer.phone}
                        label="Phone"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={updateCustomer}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}