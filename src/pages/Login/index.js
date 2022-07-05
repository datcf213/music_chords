import classNames from 'classnames/bind';

import styles from './login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return <h2 className={cx('login-container')}>Login page</h2>;
}

export default Login;
