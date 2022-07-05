import className from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

const cx = className.bind(styles);

function Footer() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <span>Coppy right @copy Dinovative Intern team.</span>
                <br />
                <Link to="/" className={cx('border-r')}>
                    Chính sách
                </Link>
                <Link to="/" className={cx('border-r')}>
                    Quy chế hoạt động
                </Link>
                <Link to="/" className={cx('border-r')}>
                    Điều khoản và điều kiện
                </Link>
                <Link to="/">Chủ sở hữu</Link>
            </div>
        </header>
    );
}

export default Footer;
