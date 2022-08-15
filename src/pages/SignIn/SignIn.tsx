import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './SignIn.scss';

type Inputs = {
    username: string;
    password: string;
};

const SignIn = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <div className="signin">
            <h2 className="signin__title">Sign In</h2>
            <form className="signin__form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username </label>
                <input id="username" {...register('username', { required: true, maxLength: 20 })} />
                {errors.username && <span>Username is required</span>}
                <label htmlFor="password">Password </label>
                <input id="password" {...register('password', { required: true })} />
                {errors.password && <span>Password is required</span>}
                <button>Sign in</button>
                <div>
                    <span>Don't have an account</span>
                    <Link to="signup">Sign up</Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
