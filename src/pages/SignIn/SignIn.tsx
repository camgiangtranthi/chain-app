import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import './SignIn.scss';
import NavBar from '../../components/NavBar/NavBar';

type Inputs = {
    username: string;
    password: string;
};

const SignIn = () => {
    const [hideForm, setHideForm] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => data;
    return (
        <div className={hideForm ? 'hide' : 'wrapper'}>
            <div className="signin">
                <div className="signin__header">
                    <h2 className="signin__title">Sign In</h2>
                    <CloseOutlined onClick={() => setHideForm(true)} />
                </div>
                <form className="signin__form" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">Username </label>
                    <input id="username" {...register('username', { required: true, maxLength: 20 })} />
                    {errors.username && <span>Username is required</span>}
                    <label htmlFor="password">Password </label>
                    <input id="password" {...register('password', { required: true })} />
                    {errors.password && <span>Password is required</span>}
                    <button className="signin__btn">Sign in</button>
                    <div className="signin__footer">
                        <span>Don't have an account?</span>
                        <Link to="signup">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
