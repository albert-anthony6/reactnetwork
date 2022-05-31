import React, { useEffect, useRef } from 'react';
import { useStore } from '../../stores/index';
import { observer } from 'mobx-react-lite';
import styles from '../../assets/styles/ModalContainer.module.scss';

export default observer(function ModalContainer() {
    const { modalStore } = useStore();
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const closeModal = (e: any) => {
          if (modalStore.modal.open && e.target === modalRef.current) {
            modalStore.closeModal();
          }
        }
    
        document.body.addEventListener('click', closeModal);
    
        return () => document.body.removeEventListener('click', closeModal);
      }, [])

    return (
        <>
            {modalStore.modal.open && (
                <div ref={modalRef} className={styles['modal-container']}>
                    <div className={styles['modal']}>
                        {modalStore.modal.body}
                    </div>
                </div>
            )}
        </>
    )
})