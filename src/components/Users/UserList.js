import classes from './UserList.module.css';
import UserItem from './UserItem';

const UserList = ({listaUsuarios}) => {
    return(
        <ul className={classes['users-list']}>
            {listaUsuarios.length === 0 ? <h2>No se encontraron usuarios</h2> :
            listaUsuarios.map( usuario => (
                <UserItem key={usuario.id} username={usuario.username} age={usuario.age}/>
            ))}
        </ul>
    );
}

export default UserList;