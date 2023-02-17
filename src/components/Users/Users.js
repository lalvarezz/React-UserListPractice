import classes from './Users.module.css';
import Card from '../UI/Card';
import UserList from './UserList';

const Users = ({usuarios}) =>{
    return(
        <Card>
            <UserList listaUsuarios={usuarios}/>
        </Card>
    );
}

export default Users;