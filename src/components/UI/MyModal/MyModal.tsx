import { FC } from 'react'
import cl from './MyModal.module.css'


interface MyModalProps {
  children: any;
  visible: boolean;
  setVisible: (visible :boolean) => void
}
const MyModal: FC<MyModalProps> = ({...props}) => {
  const rootClasses = [cl.myModal];
  if (props.visible) {
    rootClasses.push(cl.active)
  }

  return (
    <div onClick={() => props.setVisible(false)} className={rootClasses.join(' ')}>
        <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
          {props.children}
        </div>
    </div>
  )
}

export default MyModal