import { useState } from 'react'
import styles from './AddFoodPopup.module.css'

type PopupProps = {
  isOpen: boolean
  closeAddFood: (isOpen: boolean) => void 
}

function AddFoodPopup(props: PopupProps) {

  return (
    <div className={props.isOpen ? styles.diary__addFoodPopupWrapper : styles.diary__addFoodPopupWrapper__closed}>
      <div className={styles.diary__addFoodPopup}>
        <button className={styles.diary__addFoodPopupClose} onClick={() => props.closeAddFood(false)}>x</button>
        <div>абобик</div>
      </div>
    </div>
  )
}

export default AddFoodPopup