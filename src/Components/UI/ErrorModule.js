import React from 'react';
import ReactDOM from 'react-dom';

// get the UI Components
import Card from './Card';
import Button from './Button';

// get the styles
import styles from './ErrorModule.module.css';

const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onConfirm}>
        
        </div>
    );
}

const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onConfirm={props.onConfirm}>Okay</Button>
            </footer>
         </Card>
    );
}

const ErrorModule = (props) => {
    return (
       <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
       </React.Fragment>
    );
}

export default ErrorModule;