import { useEffect } from 'react';
import style from './style.module.scss';
import SvgIcon from '../icon/svg';

export default function ScrollableModal({ isOpen, onClose, title, children, theme }) {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={style.overlay} onClick={onClose}>
            <div className={`${style.modal} ${style[theme]}`} onClick={(e) => e.stopPropagation()}>
                <button className={style.closeBtn} onClick={onClose}>
                    <SvgIcon url={"/close.svg"} />
                </button>
                <div className={style.contentwrapper}>
                    <h3 className={style.modaltitle}>{title}</h3>
                    <div className={style.content}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
