import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModal = ({title, message, onSetVisibility}) => {
    const handleModal = () => {
        onSetVisibility();
    }

    return(
        <div>
            <div className={classes.backdrop}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{title}</h2>
                </header>
                <div className={classes.content}>
                    <p>
                        {message}
                    </p>
                </div>
                <footer className={classes.footer}>
                    <Button onClick={handleModal}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;