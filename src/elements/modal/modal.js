import { useEffect } from 'react';
import { useIsMobile } from '@/lib/hooks/mobile';
import { motion, AnimatePresence } from 'framer-motion';
import SvgIcon from '../icon/svg';
import style from './style.module.scss';

export default function Modal({ isOpen, onClose, title, children, theme }) {
    const isMobile = useIsMobile();

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    const mobileVariants = {
        initial: { opacity: 0, x: '-100%' },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '-100%' },
        transition: { duration: 0.4, ease: 'easeOut' }
    };

    const desktopVariants = {
        initial: { opacity: 0, y: 50, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 30, scale: 0.95 },
        transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }
    };

    const current = isMobile ? mobileVariants : desktopVariants;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={style.overlay}
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className={`${style.modal} ${style[theme]}`}
                        onClick={(e) => e.stopPropagation()}
                        initial={current.initial}
                        animate={current.animate}
                        exit={current.exit}
                        transition={current.transition}
                    >
                        <button className={style.closeBtn} onClick={onClose}>
                            <SvgIcon url={"/close.svg"} />
                        </button>
                        <div className={style.contentwrapper}>
                            <h3 className={style.modaltitle}>{title}</h3>
                            <div className={style.content}>
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
