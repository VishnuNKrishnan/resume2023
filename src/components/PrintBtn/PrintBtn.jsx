import React, { useContext } from 'react'
import UserContext from '../../UserContext'
import GlobalStyles from '../../globalStyles.module.css'
import Styles from './PrintBtn.module.css'

function PrintBtn() {
    const context = useContext(UserContext)

    const doUnZoom = () => {
        return new Promise((resolve, reject) => {
            try {
                context.doZoom('default');
                resolve('Zoom reset to default');
            } catch (error) {
                reject(error);
            }
        });
    };

    const doPrint = () => {
        const currentZoom = context.zoom
        doUnZoom().then(() => {
            window.print()
        }).then(() => {
            context.setZoom(currentZoom)
        }).catch(err => {
            console.error('Unzoom unsuccessful: ', err);
            window.print()
        })
    }

    return (
        <button className={`${Styles.btn} ${GlobalStyles.hideOnPrint}`} onClick={doPrint}>
            <span className={`${GlobalStyles.printIcon} material-symbols-outlined`}>print</span>
        </button>
    )
}

export default PrintBtn
