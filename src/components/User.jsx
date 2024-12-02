import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../asyncActions/users";
import { addProduct, changeCount, changeYear, deleteById, removeLastUser } from "../store/userSlice";

function User() {
    const users = useSelector(store => store.users.cart)
    const dispatch = useDispatch()
  
    return (
    <div>
        <div>
            <input/>
            <button onClick={() => dispatch(addProduct('aaaaa'))}>Добавить</button>
        </div>
        
        <div>
            <ul>
                {users.map(user => (
                    <li 
                        key={user.id}
                        onClick={() =>dispatch()}
                    >
                        {user.title} {user.count}
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <button onClick={() => dispatch(changeCount(1))}>+</button>
            <button onClick={() => dispatch(changeCount(-1))}>-</button>
        </div>
    </div>
    
  );
}

export default User;
