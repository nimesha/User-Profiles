import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../contexts/UserContext';
import imageCompress from '../helpers/imageCompress';


const UserAdd = () => {

    const { dispatch } = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = user => {
        
        console.log(user);
        const addtoContext = async () => {
            try {
                const img = await imageCompress(user.profilePic[0]);
                user.profilePic = img;
                dispatch({ type: 'ADD_USER', user });
            } catch (error) {

            }
        };
        addtoContext();

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First name</label>
            <input
                name="firstName"
                ref={register} />

            <label>Last name</label>
            <input
                name="lastName"
                ref={register}
            />

            <input ref={register} type="file" name="profilePic" />

            <input type="submit" />
        </form>
    );
}

export default UserAdd;