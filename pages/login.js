import style from '../styles/login.module.css'

function Login() {
    return (
        <div>
            <input placeholder="First Name" type="text" name="name" className={style.input} />
        </div>
    )
}

export default Login