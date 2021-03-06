import React, { useState, useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../contexts/UserContext';
import imageCompress from '../helpers/imageCompress';
import countryCode from '../helpers/CountryCodes.json';
import uuid from 'uuid/v4';
import { yupResolver } from '@hookform/resolvers';
import schema from '../helpers/validation/user';



const UserAdd = () => {

    const { dispatch } = useContext(UserContext);
    const [messageState, setMessageState] = useState(false);
    const { register, handleSubmit, errors, setValue } = useForm({ resolver: yupResolver(schema) });


    useEffect(() => {
        setValue("dob", '2020-10-01');
    }, []);

    useEffect(() => {
        if (messageState) {
            const timer = setTimeout(() => {
                setMessageState(false)
            }, 2000);
            return () => clearTimeout(timer);
        }

    }, [messageState]);

    const onSubmit = (user, e) => {

       
        const addtoContext = async () => {
            try {
                if (user.profilePic[0]) {
                    const img = await imageCompress(user.profilePic[0]);
                    user.profilePic = img;
                } else {
                    user.profilePic = '';
                }
                dispatch({ type: 'ADD_USER', user });
                setMessageState(true);
                e.target.reset()
                setValue("dob", '2020-10-01');
            } catch (error) {
                alert("TODO : Need to add global error handler");
            }
        };
        addtoContext();

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                {messageState &&
                    <div className="col-12">
                        <div className="alert alert-success" role="alert">The user successfully added</div>
                    </div>
                }
                <div className="col-12 col-lg-6">
                    <div className="form-group">
                        <label className="float-left">First name *</label>
                        <input
                            className="form-control"
                            name="firstName"
                            ref={register()} />
                        <small className="form-text text-danger">
                            {errors.firstName && errors.firstName.message}
                        </small>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="form-group">
                        <label className="float-left">Last name</label>
                        <input
                            className="form-control"
                            name="lastName"
                            ref={register({ maxLength: 60 })}
                        />
                        <small className="form-text text-danger">
                            {errors.lastName && errors.lastName.message}
                            {errors.lastName?.type === "maxLength" && "Your input exceed maxLength"}
                        </small>
                    </div>
                </div>

                <div className="col-12 col-lg-6">

                    <div className="form-group">
                        <label className="float-left">Email *</label>
                        <input
                            className="form-control"
                            name="email"
                            ref={register({
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })}
                        />
                        <small className="form-text text-danger">{errors.email && errors.email.message}</small>
                    </div>

                </div>

                <div className="col-12 col-lg-6">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-6">
                                <label className="float-left">Contact Number</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <select
                                    className="form-control"
                                    name="countryCode"
                                    ref={register}>
                                    {countryCode.map(cc =>
                                        <option key={uuid()} value={cc.dial_code}>{cc.name} {cc.dial_code}</option>
                                    )};
                         </select>
                            </div>
                            <div className="col-7">
                                <input
                                    className="form-control"
                                    name="contact"
                                    ref={register({ maxLength: 15 })}
                                />
                                <small className="form-text text-danger">{errors.contact && errors.contact.message}</small>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="form-group">
                        <label className="float-left">Date of Birth</label>
                        <input
                            className="form-control"
                            name="dob"
                            type="date"
                            ref={register}
                           
             
                        />
                        <small className="form-text text-danger"> {errors.dob && errors.dob.message}</small>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="custom-file mt-4">
                        <input
                            className="custom-file-input"
                            ref={register()}
                            type="file"
                            name="profilePic"
                            accept="image/png, image/jpeg" />
                        <label className="custom-file-label mt-lg-2">Upload Picture</label>

                        <small className="form-text text-danger"> {errors.profilePic && errors.profilePic.message}</small>
                    </div>

                </div>



                <div className="col-12">
                    <div className="form-group">
                        <label className="float-left">Address</label>
                        <input
                            className="form-control"
                            name="address"
                            ref={register({ maxLength: 250 })}
                        />
                        <small className="form-text text-danger">
                            {errors.address && errors.address.message}
                        </small>
                    </div>
                </div>

                <div className="col-12 mt-4 float-right">
                    <input type="submit" value="Save User" className="btn btn-primary float-right" />
                </div>

            </div>
        </form>
    );
}

export default UserAdd;