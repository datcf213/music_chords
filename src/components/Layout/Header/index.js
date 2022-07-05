import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { faCircleUser, faCloudArrowUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo     */}
                <div className={cx('logo')}>
                    <Link to="/">
                        <img className={cx('header-logo')} src={require('~/images/logo-music.png')} alt=""></img>
                    </Link>
                </div>
                {/* Search */}
                <div className={cx('search')}>
                    <input className={cx('search-input')} placeholder="Tìm cái gì cũng được" spellCheck="false"></input>
                    <button className={cx('search-icon')}>
                        <FontAwesomeIcon className={cx('detail-icon')} icon={faMagnifyingGlass} />
                    </button>
                </div>
                {/* Login/register */}
                <div className={cx('right-icon')}>
                    <FontAwesomeIcon className={cx('upload-icon')} icon={faCloudArrowUp} />
                    <Link to="/login">
                        <FontAwesomeIcon className={cx('user-icon')} icon={faCircleUser} />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
