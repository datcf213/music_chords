import className from 'classnames/bind';

import styles from './home.module.scss';

const cx = className.bind(styles);

function Home() {
    return (
        <div className={cx('home-container')}>
            <h2>Home page</h2>
        </div>
    );
}

export default Home;
