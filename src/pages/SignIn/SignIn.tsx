import { useForm, SubmitHandler } from 'react-hook-form';
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
            <form className="signin__form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register('username', { required: true, maxLength: 20 })} />
                {errors.username && <span>Username is required</span>}
                <input {...register('password', { required: true })} />
                {errors.password && <span>Password is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default SignIn;
