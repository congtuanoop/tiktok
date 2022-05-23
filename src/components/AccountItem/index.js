import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.moudle.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1653379200&x-signature=56ClmmnLLcDb%2B0inCpZfNPV6kFM%3D"
        alt="Cong Tuan"
      />
      <h4 className={cx('info')}>
        <p className={cx('account')}>
          <span>hoaa.hanassii</span>
          <FontAwesomeIcon className={cx('account-color')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Đào Lê Phương Hoa</p>
      </h4>
    </div>
  );
}

export default AccountItem;
