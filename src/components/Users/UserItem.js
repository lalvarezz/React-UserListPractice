import classes from './UserItem.module.css';

const UserItem = (props) =>{
    return(
        <li className={classes['user-item']}>
            <div>{props.username} ({props.age} yeard old)</div>
        </li>
    );
}

export default UserItem;