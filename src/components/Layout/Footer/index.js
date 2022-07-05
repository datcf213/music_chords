import className from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = className.bind(styles);

function Footer() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <span>Coppy right @copy Dinovative Intern team.</span>
                <br />
                <a href="/" className={cx('border-r')}>
                    Chính sách
                </a>
                <a href="/" className={cx('border-r')}>
                    Quy chế hoạt động
                </a>
                <a href="/" className={cx('border-r')}>
                    Điều khoản và điều kiện
                </a>
                <a href="/">Chủ sở hữu</a>
            </div>
        </header>
    );
}

export default Footer;
