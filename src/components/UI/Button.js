import classes from './Button.module.css';

const Button = ({children, type, onClick}) =>{
    return(
        <button type={type} onClick={onClick} className={classes.button}>
            {children}
        </button>
    );

}

export default Button;