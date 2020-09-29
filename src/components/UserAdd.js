import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../contexts/UserContext';
import imageCompress from '../helpers/imageCompress';
import countryCode from '../helpers/CountryCodes.json';
import uuid from 'uuid/v4';



const UserAdd = () => {

    const { dispatch } = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = user => {

        console.log(user);
        const addtoContext = async () => {
            try {
                const img = await imageCompress(user.profilePic[0]);
                user.profilePic = img;
                user.contact = user.countryCode + user.contact;
                dispatch({ type: 'ADD_USER', user });
            } catch (error) {
                alert("TODO : Need to add global error handler");
            }
        };
        addtoContext();

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First name *</label>
            <input
                name="firstName"
                ref={register} />

            <label>Last name</label>
            <input
                name="lastName"
                ref={register}
            />

            <label>Address</label>
            <input
                name="address"
                ref={register}
            />

            <select name="countryCode" ref={register}>
                {countryCode.map(cc =>
                    <option key={uuid()} value={cc.dial_code}>{cc.name} {cc.dial_code}</option>
                )};
            </select>

            <label>Contact Number</label>
            <input
                name="contact"
                ref={register}
            />

            <label>Date of Birth</label>
            <input
                name="dob"
                type="date"
                ref={register}
            />


            <label>Email *</label>
            <input
                name="email"
                ref={register({
                    required: "Required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                    }
                })}
            />
            {errors.email && errors.email.message}

            <input ref={register} type="file" name="profilePic" />

            <input type="submit" />
        </form>
    );
}

export default UserAdd;